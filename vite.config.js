import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import generator from "generator";

export default defineConfig({
    plugins: [
        vue(),
        generator({
            src: './src/icon/',
            dist: './lib/components.js',
            resolve: [
                {entry: './src/icon', prefix: 'Icon'}
            ],
        }),
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/components.js'),
            name: 'panel-icon',
            // the proper extensions will be added
            fileName: 'panel-icon'
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ['vue'],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: 'Vue'
                }
            }
        }
    },
    alias: {
        '@/': resolve(__dirname, './src'),
    }
})