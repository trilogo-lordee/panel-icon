import {resolve} from 'path'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

import VueGenerator from "generator";

const name = 'panel-icon';
export default defineConfig({
    plugins: [
        vue(),
        VueGenerator.generate({
            src: './src',
            dist: `./src/${name}.js`,
            resolve: [
                {
                    entry: './src/icon', prefix: 'PanelIcon'
                },
            ],
        })
    ],
    build: {
        manifest: true,
        minify: false,
        cssCodeSplit: true,
        lib: {
            entry: {
                [name]: resolve(__dirname, `./src/${name}.js`),
                install: resolve(__dirname, `./src/install.js`),
            },
            name: name,
        },
        rollupOptions: {
            external: ['vue', 'lodash'],
            output: {
                globals: {
                    'vue': 'Vue',
                },
            },
        },
    },
    alias: {
        '@/': resolve(__dirname, './src'),
    }
})