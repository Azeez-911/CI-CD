import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/CI-CD/', // 👈 This is critical for GitHub Pages deployment
});
