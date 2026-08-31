import { defineConfig } from "astro/config";

import mdx from '@astrojs/mdx';
import { satteri } from "@astrojs/markdown-satteri"

// https://astro.build/config
export default defineConfig({
  base: '/lc',
  outDir: './lc',
  site: 'https://ray-vvk.github.io',
  integrations: [mdx()],
  markdown: { processor: satteri() }
});