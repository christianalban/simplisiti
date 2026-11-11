interface TemplateRange {
    start: number;
    end: number;
}

const templateOperatorPattern = /&&|\|\||===|!==|==|!=|<=|>=|=>|\?\?=|\?\?|::|->|\+\+|--/g;
const templateEntityPattern = /^&(?:amp|lt|gt|quot|apos|#39|#039);/;

const isIdentifierCharacter = (character: string | undefined): boolean => {
    return Boolean(character && /[A-Za-z0-9_]/.test(character));
};

const findClosingToken = (
    source: string,
    start: number,
    openingLength: number,
    closingToken: string,
): number => {
    let quote: '"' | "'" | null = null;
    let escaped = false;

    for (let index = start + openingLength; index < source.length; index += 1) {
        const character = source[index];

        if (quote) {
            if (escaped) {
                escaped = false;
            } else if (character === '\\') {
                escaped = true;
            } else if (character === quote) {
                quote = null;
            }

            continue;
        }

        if (character === '"' || character === "'") {
            quote = character;
            continue;
        }

        if (source.startsWith(closingToken, index)) {
            return index + closingToken.length;
        }
    }

    return -1;
};

const findDirectiveEnd = (source: string, start: number): number => {
    if (source[start] !== '@' || source[start + 1] === '@') {
        return -1;
    }

    let cursor = start + 1;

    while (isIdentifierCharacter(source[cursor])) {
        cursor += 1;
    }

    if (cursor === start + 1) {
        return -1;
    }

    while (/\s/.test(source[cursor] ?? '')) {
        cursor += 1;
    }

    if (source[cursor] !== '(') {
        return cursor;
    }

    let depth = 0;
    let quote: '"' | "'" | null = null;
    let escaped = false;

    for (; cursor < source.length; cursor += 1) {
        const character = source[cursor];

        if (quote) {
            if (escaped) {
                escaped = false;
            } else if (character === '\\') {
                escaped = true;
            } else if (character === quote) {
                quote = null;
            }

            continue;
        }

        if (character === '"' || character === "'") {
            quote = character;
        } else if (character === '(') {
            depth += 1;
        } else if (character === ')') {
            depth -= 1;

            if (depth === 0) {
                return cursor + 1;
            }
        }
    }

    return source.length;
};

const collectTemplateRanges = (source: string): TemplateRange[] => {
    const ranges: TemplateRange[] = [];

    for (let index = 0; index < source.length; index += 1) {
        let end = -1;

        if (source.startsWith('{{--', index)) {
            const closingIndex = source.indexOf('--}}', index + 4);
            end = closingIndex === -1 ? -1 : closingIndex + 4;
        } else if (source.startsWith('<?', index)) {
            const isXmlDeclaration = source.startsWith('<?xml', index);

            if (!isXmlDeclaration) {
                const closingIndex = source.indexOf('?>', index + 2);
                end = closingIndex === -1 ? -1 : closingIndex + 2;
            }
        } else if (source.startsWith('{!!', index)) {
            end = findClosingToken(source, index, 3, '!!}');
        } else if (source.startsWith('{{', index)) {
            end = findClosingToken(source, index, 2, '}}');
        } else if (source[index] === '@') {
            end = findDirectiveEnd(source, index);
        }

        if (end > index) {
            ranges.push({ start: index, end });
            index = end - 1;
        }
    }

    return ranges;
};

const isRangeCovered = (ranges: TemplateRange[], start: number, end: number): boolean => {
    return ranges.some((range) => start >= range.start && end <= range.end);
};

const collectOperatorRanges = (source: string, ranges: TemplateRange[]): TemplateRange[] => {
    const operatorRanges: TemplateRange[] = [];

    for (const match of source.matchAll(templateOperatorPattern)) {
        const start = match.index;
        const end = start + match[0].length;

        if (!isRangeCovered(ranges, start, end)) {
            operatorRanges.push({ start, end });
        }
    }

    return operatorRanges;
};

const replaceRanges = (
    source: string,
    ranges: TemplateRange[],
    replacement: (value: string, range: TemplateRange) => string,
): string => {
    const sortedRanges = [...ranges].sort((left, right) => left.start - right.start);
    let result = '';
    let cursor = 0;

    for (const range of sortedRanges) {
        if (range.start < cursor) {
            continue;
        }

        result += source.slice(cursor, range.start);
        result += replacement(source.slice(range.start, range.end), range);
        cursor = range.end;
    }

    return result + source.slice(cursor);
};

const decodeTemplateEntities = (value: string): string => {
    const entities: Record<string, string> = {
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&quot;': '"',
        '&apos;': "'",
        '&#39;': "'",
        '&#039;': "'",
    };
    let result = '';
    let quote: '"' | "'" | null = null;
    let escaped = false;

    for (let index = 0; index < value.length; index += 1) {
        const character = value[index];

        if (quote) {
            result += character;

            if (escaped) {
                escaped = false;
            } else if (character === '\\') {
                escaped = true;
            } else if (character === quote) {
                quote = null;
            }

            continue;
        }

        if (character === '"' || character === "'") {
            quote = character;
            result += character;
            continue;
        }

        const entity = value.slice(index).match(templateEntityPattern)?.[0];

        if (entity) {
            result += entities[entity] ?? entity;
            index += entity.length - 1;
        } else {
            result += character;
        }
    }

    return result;
};

export const normalizeSerializedTemplate = (html: string): string => {
    const ranges = collectTemplateRanges(html);
    let normalized = replaceRanges(html, ranges, decodeTemplateEntities);

    normalized = normalized
        .replaceAll('&amp;&amp;', '&&')
        .replaceAll('&lt;=', '<=')
        .replaceAll('&gt;=', '>=')
        .replaceAll('&lt;=&gt;', '<=>');

    return normalized;
};

export class TemplateProtection {
    private readonly markerPrefix = `__SIMPLISITI_TEMPLATE_TOKEN_${Math.random().toString(36).slice(2)}_`;
    private readonly tokens = new Map<string, string>();
    private tokenIndex = 0;

    public reset(): void {
        this.tokens.clear();
        this.tokenIndex = 0;
    }

    public protect(html: string): string {
        const templateRanges = collectTemplateRanges(html);
        const ranges = [
            ...templateRanges,
            ...collectOperatorRanges(html, templateRanges),
        ];

        return replaceRanges(html, ranges, (value) => {
            const marker = `${this.markerPrefix}${this.tokenIndex}__`;
            this.tokenIndex += 1;
            this.tokens.set(marker, value);
            return marker;
        });
    }

    public restore(html: string): string {
        const markerPattern = new RegExp(`${this.escapeRegExp(this.markerPrefix)}\\d+__`, 'g');

        return html.replace(markerPattern, (marker) => this.tokens.get(marker) ?? marker);
    }

    private escapeRegExp(value: string): string {
        return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}
