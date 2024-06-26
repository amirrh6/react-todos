import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,

        // eslint-disable-next-line no-undef
        host: process.env.EXPOSE_TO_NETWORK !== undefined ? '0.0.0.0' : '127.0.0.1',

        proxy:
            // eslint-disable-next-line no-undef
            process.env.PROXY_JSON_SERVER !== undefined
                ? {
                      '/api': {
                          target: 'http://localhost:8000',
                          changeOrigin: true,
                          rewrite: (path) => path.replace(/^\/api/, '')
                      }
                  }
                : undefined
    }
});
