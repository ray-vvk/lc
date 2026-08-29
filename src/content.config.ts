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
    tags: z.array(z.string()),
  })
});

const tagData = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/tag-data" }),
  schema: z.object({
    description: z.optional(z.string())
  })
})


export const collections = { articleData, tagData };