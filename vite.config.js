import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import VueGenerator from "generator";

import module from './package.json';

export default defineConfig({
    plugins: [
        vue(),
        VueGenerator.generator({
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
        target: 'es2020',
        sourcemap: true,
        manifest: true,
        minify: true,
        cssCodeSplit: true,
        lib: {
            entry: resolve(__dirname, './src/index.js'),
            name: 'panel-icon',
            formats: ['esm'],
            fileName: (format, entryName) => (entryName === 'index') ? `panel-icon.${format}.js` : `${entryName}.${format}.js`,
        },
        rollupOptions: {
            input: resolve(__dirname, `./src/index.js`),
            external: [
                ...Object.keys(module.peerDependencies ?? {}), ...Object.keys(module.devDependencies ?? {}), 'vue',
            ],
            output: {
                generatedCode: 'es2015',
                interop: 'esModule',
            },
        },
    },
    alias: {
        '@/': resolve(__dirname, './src'),
    }
})