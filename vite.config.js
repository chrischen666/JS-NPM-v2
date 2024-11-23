import { defineConfig } from 'vite'

export default defineConfig({
    base: '/JS-NPM-v2/',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                admin: 'admin.html'
            }
        }
    }
})