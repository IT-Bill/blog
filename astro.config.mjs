// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import rehypeExternalLinks from "rehype-external-links";

const target = process.env.DEPLOY_TARGET;
const isGitHubPages = target === "github";

const vercelUrl = process.env.VERCEL_URL;
const vercelProjectProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

const site = isGitHubPages
  ? "https://it-bill.github.io"
  : vercelUrl
    ? `https://${vercelUrl}`
    : vercelProjectProductionUrl
      ? `https://${vercelProjectProductionUrl}`
      : "https://blog-itbill.vercel.app";

// https://astro.build/config
export default defineConfig({
  site,
  base: isGitHubPages ? "/blog" : "/",
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
