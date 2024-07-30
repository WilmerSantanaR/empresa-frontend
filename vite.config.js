import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Configurado para escuchar en todas las interfaces
    port: 3000,        // Puerto dentro del contenedor
  },
  build: {
    sourcemap: true,  // Habilita la generación de mapas de fuentes en desarrollo
  },
});
