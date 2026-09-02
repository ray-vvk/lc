import { defineConfig } from "astro/config";

import mdx from '@astrojs/mdx';
import { satteri } from "@astrojs/markdown-satteri"

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  base: '/lc',
  outDir: './lc',
  site: 'https://ray-vvk.github.io',
  integrations: [mdx(), react()],
  markdown: { processor: satteri() }
});