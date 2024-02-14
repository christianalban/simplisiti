export const AutoSizeToChild = {
    mounted(el: HTMLElement) {
        const firstChild = el.firstChild as HTMLElement | null;
        const style = window.getComputedStyle(firstChild as Element);
        setTimeout(() => {
            if (firstChild) {
                el.style.width = style?.width;
                el.style.height = style?.height;
            }
        }, 300);
    },
}
