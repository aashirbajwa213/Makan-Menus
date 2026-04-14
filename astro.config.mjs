// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://makanmenus.my',
  devToolbar: {
    enabled: false
  },

  // Enforce trailing slashes site-wide for SEO consistency
  trailingSlash: 'always',

  build: {
    format: 'directory' // Still build folders for production trailing slashes
  },


  vite: {
    plugins: [
      tailwindcss(),
      {
        name: 'force-trailing-slash-dev',
        configureServer(server) {
          server.middlewares.use(
            /** @param {any} req @param {any} res @param {any} next */
            (req, res, next) => {
              const host = req.headers?.host || 'localhost';
              const reqUrl = req.url || '/';
              const url = new URL(reqUrl, `http://${host}`);
              const pathname = url.pathname;
              
              // Only redirect index-like paths that don't have a trailing slash
              const isFile = pathname.split('/').pop()?.includes('.');
              
              if (pathname !== '/' && !pathname.endsWith('/') && !isFile) {
                const destination = pathname + '/' + url.search;
                res.writeHead(301, { 
                  'Location': destination,
                  'Cache-Control': 'no-store' // Avoid caching the redirect in dev
                });
                res.end();
              } else {
                next();
              }
            }
          );
        }
      }
    ]
  },

  integrations: [sitemap()]
});