import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command }) => {
    return {
        base: command === 'serve' ? '' : '/build/',
        publicDir: 'fake_dir_so_nothing_gets_copied',
        build: {
            manifest: true,
            outDir: 'public/build',
            rollupOptions: {
                input: 'resources/js/app.js',
            },
        },
        plugins: [
            vue(),
            {
                name: 'blade',
                handleHotUpdate({ file, server }) {
                    if (file.endsWith('.blade.php')) {
                        server.ws.send({
                            type: 'full-reload',
                            path: '*',
                        });
                    }
                },
            }
        ],
    }
})
