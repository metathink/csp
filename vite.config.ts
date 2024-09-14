import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'Cospa',
        short_name: 'CSP',
        display: 'standalone',
        description: 'My Progressive Web App using Vite and React',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          {
            src: '192x192-CSP.svg',
            sizes: '192x192',
            type: 'image/svg+xml'
          },
          {
            src: "csp.svg",
            sizes: "512x512",
            type: "image/svg+xml"
          }
        ],
      },
    }),
  ],
  
});