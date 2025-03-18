import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite Configuration
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist', // Ensure this matches your project's build output directory
    },
    server: {
        port: 3000,
    },
    base: './', // If deployed to a subdirectory, adjust the base path
});