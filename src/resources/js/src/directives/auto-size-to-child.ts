export const AutoSizeToChild = {
    mounted(el: HTMLElement) {
        const firstChild = el.firstChild as HTMLElement | null;
        setTimeout(() => {
            if (firstChild) {
                const style = window.getComputedStyle(firstChild as Element);
                el.style.width = style?.width;
                el.style.height = style?.height;
            }
        }, 300);
    },
}
