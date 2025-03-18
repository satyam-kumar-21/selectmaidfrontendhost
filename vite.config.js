import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite Configuration
export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist', // Ensure this matches your project's build output directory
    },
    server: {
        port: 3000, // Optional: If you want to change the development server's port
    },
});