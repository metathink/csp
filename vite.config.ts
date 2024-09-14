import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto',
      // devOptions: {
      //   enabled: true,
      // },
      manifest: {
        start_url: "/",
        name: 'Cospa',
        short_name: 'CSP',
        display: 'standalone',
        description: 'My Progressive Web App using Vite and React',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          {
            src: 'csp.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: "csp.png",
            sizes: "512x512",
            type: "image/png"
          }
        ],
      },
    }),
  ],
  
});