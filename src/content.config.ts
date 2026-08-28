import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const articleData = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/article-data" }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date(),
    
  })
});

export const collections = { articleData };