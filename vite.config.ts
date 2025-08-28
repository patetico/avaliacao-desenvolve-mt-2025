import tailwindcss from '@tailwindcss/vite';
import ssl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import tspaths from "vite-tsconfig-paths";


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    ssl(),
    tspaths(),
    tailwindcss(),
    react(),
  ],
})
