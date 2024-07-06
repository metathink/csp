import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'Cospa',
        short_name: 'CSP',
        description: 'My Progressive Web App using Vite and React',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        icons: [
          {
            src: '/CSP.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      },

    }),
  ],
});