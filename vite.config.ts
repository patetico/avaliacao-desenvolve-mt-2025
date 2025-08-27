import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tspaths from "vite-tsconfig-paths";


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tspaths(),
    tailwindcss(),
    react(),
  ],
})
