import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: '/vendor/simplisiti/',
    // build: {
    //     rollupOptions: {
    //         output: {
    //             assetFileNames: (assetInfo) => {
    //               let extType = assetInfo.name.split('.').at(1);
    //               if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
    //                 extType = 'img';
    //               }
    //               return `vendor/simplisiti/assets/${extType}/[name]-[hash][extname]`;
    //             },
    //             chunkFileNames: 'vendor/simplisiti/assets/js/[name]-[hash].js',
    //             entryFileNames: 'vendor/simplisiti/assets/js/[name]-[hash].js',
    //         },
    //     },
    // },
})
