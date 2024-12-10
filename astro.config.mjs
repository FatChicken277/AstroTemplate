// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://fathub.pages.dev/",
  integrations: [sitemap(), robotsTxt(), react(), tailwind()],
});
