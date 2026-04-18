import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { contactApiPlugin } from './vite-plugin-contact-api.js';

dotenv.config({ quiet: true });

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), contactApiPlugin()],
});
