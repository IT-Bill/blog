// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import rehypeExternalLinks from "rehype-external-links";

// https://astro.build/config
export default defineConfig({
  site: "https://it-bill.github.io",
  base: "/blog",
  integrations: [
    react(),
    sitemap(),
    expressiveCode({
      themes: ["dark-plus"],
      plugins: [pluginLineNumbers()],
      defaultProps: {
        showLineNumbers: true,
      },
    }),
    mdx(),
  ],

  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] }],
    ],
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
