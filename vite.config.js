import { defineConfig } from 'vite'

export default defineConfig({
    base: '/JS-NPM-2/',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                admin: 'admin.html'
            }
        }
    }
})