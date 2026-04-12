// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://malaysiamenu.my',
  devToolbar: {
    enabled: false
  },

  // Disable Astro's dev-overlay bypass
  trailingSlash: 'ignore',

  build: {
    format: 'directory' // Still build folders for production trailing slashes
  },

  redirects: {
    // 1. Root Category Redirects (Legacy to New)
    '/categories/fast-food/': '/fast-food/',
    '/categories/coffee-bakeries/': '/coffee-bakeries/',
    '/categories/local-asian/': '/local-asian/',
    '/categories/teas-desserts/': '/teas-desserts/',
    '/categories/japanese-korean/': '/japanese-korean/',
    '/categories/pizza-italian/': '/pizza-italian/',
    '/categories/western-grilled/': '/western-grilled/',
    '/categories/convenience-stores/': '/convenience-stores/',
    '/categories/buffet-dining/': '/buffet-dining/',
    '/categories/sandwiches-health/': '/sandwiches-health/',
    '/categories/specialty-burgers/': '/specialty-burgers/',

    // 2. Short URL Redirects (Existing non-menu URLs to -menu/)
    '/fast-food/mcdonalds/': '/fast-food/mcdonalds-menu/',
    '/fast-food/kfc/': '/fast-food/kfc-menu/',
    '/fast-food/texas-chicken/': '/fast-food/texas-chicken-menu/',
    '/coffee-bakeries/starbucks/': '/coffee-bakeries/starbucks-menu/',
    '/coffee-bakeries/zus-coffee/': '/coffee-bakeries/zus-coffee-menu/',
    '/coffee-bakeries/coffee-bean-tea-leaf/': '/coffee-bakeries/coffee-bean-tea-leaf-menu/',
    '/teas-desserts/chagee/': '/teas-desserts/chagee-menu/',
    '/teas-desserts/mixue/': '/teas-desserts/mixue-menu/',
    '/teas-desserts/ai-cha/': '/teas-desserts/ai-cha-menu/',
    '/local-asian/secret-recipe/': '/local-asian/secret-recipe-menu/',
    '/sandwiches-health/subway/': '/sandwiches-health/subway-menu/',
    '/western-grilled/nandos/': '/western-grilled/nandos-menu/',
    '/japanese-korean/sushi-king/': '/japanese-korean/sushi-king-menu/',
    '/pizza-italian/pizza-hut/': '/pizza-italian/pizza-hut-menu/',
    '/fast-food/marrybrown/': '/fast-food/marrybrown-menu/',
    '/coffee-bakeries/oriental-kopi/': '/coffee-bakeries/oriental-kopi-menu/',
    '/teas-desserts/tealive/': '/teas-desserts/tealive-menu/',
    '/nak-nak-menu/': '/specialty-burgers/nak-nak-menu/',
    '/specialty-burgers/naknak-menu/': '/specialty-burgers/nak-nak-menu/',

    // 3. Category + Brand Redirects (Legacy /categories/... to /brand-menu/)
    '/categories/fast-food/mcdonalds-menu/': '/fast-food/mcdonalds-menu/',
    '/categories/fast-food/kfc-menu/': '/fast-food/kfc-menu/',
    '/categories/fast-food/texas-chicken-menu/': '/fast-food/texas-chicken-menu/',
    '/categories/coffee-bakeries/starbucks-menu/': '/coffee-bakeries/starbucks-menu/',
    '/categories/coffee-bakeries/zus-coffee-menu/': '/coffee-bakeries/zus-coffee-menu/',
    '/categories/coffee-bakeries/coffee-bean-tea-leaf-menu/': '/coffee-bakeries/coffee-bean-tea-leaf-menu/',
    '/categories/teas-desserts/chagee-menu/': '/teas-desserts/chagee-menu/',
    '/categories/teas-desserts/mixue-menu/': '/teas-desserts/mixue-menu/',
    '/categories/teas-desserts/ai-cha-menu/': '/teas-desserts/ai-cha-menu/',
    '/categories/local-asian/secret-recipe-menu/': '/local-asian/secret-recipe-menu/',
    '/categories/sandwiches-health/subway-menu/': '/sandwiches-health/subway-menu/',
    '/categories/western-grilled/nandos-menu/': '/western-grilled/nandos-menu/',
    '/categories/japanese-korean/sushi-king-menu/': '/japanese-korean/sushi-king-menu/',
    '/categories/pizza-italian/pizza-hut-menu/': '/pizza-italian/pizza-hut-menu/',
    '/categories/fast-food/marrybrown-menu/': '/fast-food/marrybrown-menu/',
    '/categories/coffee-bakeries/oriental-kopi-menu/': '/coffee-bakeries/oriental-kopi-menu/',
    '/categories/teas-desserts/tealive-menu/': '/teas-desserts/tealive-menu/',

    // 4. Old /menu/ and /menus/ redirects
    '/menu/mcdonalds/': '/fast-food/mcdonalds-menu/',
    '/menus/mcdonalds/': '/fast-food/mcdonalds-menu/',
    '/menu/kfc/': '/fast-food/kfc-menu/',
    '/menus/kfc/': '/fast-food/kfc-menu/',
    '/menu/starbucks/': '/coffee-bakeries/starbucks-menu/',
    '/menus/starbucks/': '/coffee-bakeries/starbucks-menu/',
    '/menu/zus-coffee/': '/coffee-bakeries/zus-coffee-menu/',
    '/menus/zus-coffee/': '/coffee-bakeries/zus-coffee-menu/',
    '/menu/subway/': '/sandwiches-health/subway-menu/',
    '/menus/subway/': '/sandwiches-health/subway-menu/',
    '/menu/chagee/': '/teas-desserts/chagee-menu/',
    '/menus/chagee/': '/teas-desserts/chagee-menu/',
    '/menu/secret-recipe/': '/local-asian/secret-recipe-menu/',
    '/menus/secret-recipe/': '/local-asian/secret-recipe-menu/',
    '/menu/mixue/': '/teas-desserts/mixue-menu/',
    '/menus/mixue/': '/teas-desserts/mixue-menu/',
    '/menu/texas-chicken/': '/fast-food/texas-chicken-menu/',
    '/menus/texas-chicken/': '/fast-food/texas-chicken-menu/',
    '/menu/ai-cha/': '/teas-desserts/ai-cha-menu/',
    '/menus/ai-cha/': '/teas-desserts/ai-cha-menu/',
    '/menu/nandos/': '/western-grilled/nandos-menu/',
    '/menus/nandos/': '/western-grilled/nandos-menu/',
    '/menu/sushi-king/': '/japanese-korean/sushi-king-menu/',
    '/menus/sushi-king/': '/japanese-korean/sushi-king-menu/',
    '/menu/pizza-hut/': '/pizza-italian/pizza-hut-menu/',
    '/menus/pizza-hut/': '/pizza-italian/pizza-hut-menu/',
    '/menu/marrybrown/': '/fast-food/marrybrown-menu/',
    '/menus/marrybrown/': '/fast-food/marrybrown-menu/',
    '/menu/oriental-kopi/': '/coffee-bakeries/oriental-kopi-menu/',
    '/menus/oriental-kopi/': '/coffee-bakeries/oriental-kopi-menu/',
    '/menu/tealive/': '/teas-desserts/tealive-menu/',
    '/menus/tealive/': '/teas-desserts/tealive-menu/',

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