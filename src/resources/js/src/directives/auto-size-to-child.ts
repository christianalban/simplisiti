export const MinSize = 100;

export const AutoSizeToChild = {
    mounted(el: HTMLElement) {
        const firstChild = el.firstChild as HTMLElement | null;
        if (firstChild) {
            firstChild.addEventListener('resize', () => {
                const style = window.getComputedStyle(firstChild as Element);
                el.style.width = style?.width;
                el.style.height = style?.height;
            });
        }
    },
}
