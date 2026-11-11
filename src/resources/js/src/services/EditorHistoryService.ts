export interface EditorHistoryState {
    canUndo: boolean;
    canRedo: boolean;
}

export class EditorHistoryService {
    private past: string[] = [];
    private future: string[] = [];

    public constructor(private readonly limit = 50) {}

    public initialize(snapshot: string): void {
        this.past = [snapshot];
        this.future = [];
    }

    public record(snapshot: string): void {
        if (this.past.at(-1) === snapshot) {
            return;
        }

        this.past.push(snapshot);
        this.future = [];

        if (this.past.length > this.limit) {
            this.past.shift();
        }
    }

    public undo(): string | null {
        if (this.past.length <= 1) {
            return null;
        }

        const current = this.past.pop();
        if (current) {
            this.future.unshift(current);
        }

        return this.past.at(-1) ?? null;
    }

    public redo(): string | null {
        const next = this.future.shift();
        if (!next) {
            return null;
        }

        this.past.push(next);
        return next;
    }

    public getState(): EditorHistoryState {
        return {
            canUndo: this.past.length > 1,
            canRedo: this.future.length > 0,
        };
    }
}
