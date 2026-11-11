/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            keyframes: {
                editorFadeIn: {
                    from: { opacity: '0' },
                    to: { opacity: '1' },
                },
                editorFadeOut: {
                    from: { opacity: '1' },
                    to: { opacity: '0' },
                },
            },
            animation: {
                'editor-fade-in': 'editorFadeIn 0.25s linear forwards',
                'editor-fade-out': 'editorFadeOut 0.25s linear forwards',
            },
        },
    },
    corePlugins: {
        container: false,
    },
    plugins: [],
};
