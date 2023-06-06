import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  outDir: ".vercel/output/static",
  adapter: vercel({
    analytics: true,
  }),
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [
      [
        remarkToc,
        {
          heading:
            "sommaire|table[ -]des[ -]matières|toc|table[ -]of[ -]contents",
        },
      ],
      [
        remarkCollapse,
        {
          test: "Sommaire",
          summary: "Ouvrir le sommaire",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});
