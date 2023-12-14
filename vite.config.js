import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import VueGenerator from "generator";

const name = 'panel-icon';
export default defineConfig({
    plugins: [
        vue(),
        VueGenerator.generate({
            src: './src',
            dist: `./src/components.js`,
            resolve: [
                {
                    entry: './src/icon', prefix: 'PanelIcon'
                },
            ],
        })
    ],
    build: {
        sourcemap: true,
        manifest: true,
        minify: false,
        cssCodeSplit: true,
        lib: {
            entry: resolve(__dirname, `./src/index.js`),
            name: name,
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            external: ['vue', 'axios', '@inertiajs/vue3', '@headlessui/vue', 'panel-icon', 'panel', 'panel-interface'],
            output: {
                exports: 'named',
                extend: true,
                globals: {
                    'vue': 'Vue',
                    'axios': 'axios',
                    '@inertiajs/vue3': '@inertiajs/vue3',
                    '@headlessui/vue': '@headlessui/vue',
                    'panel-icon': 'panel-icon',
                    'panel': 'panel',
                    'panel-interface': 'panel-interface',
                },
            },
        },
    },
    alias: {
        '@': resolve(__dirname, './src'),
    }
})