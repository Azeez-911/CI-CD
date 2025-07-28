import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/CI-CD/', // ✅ your repo name with trailing slash
  plugins: [react()],
});
