import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    category: z.string().optional(),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
    views: z.number().default(0),
    comments: z.number().default(0),
  }),
});

export const collections = { posts };
