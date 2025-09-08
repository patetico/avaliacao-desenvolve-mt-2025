import tailwindcss from '@tailwindcss/vite';
import ssl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import svgr from "vite-plugin-svgr";
import tspaths from "vite-tsconfig-paths";


// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    ssl(),
    tspaths(),
    tailwindcss(),
    svgr({ svgrOptions: { dimensions: false } }),
    react(),
  ],
})
