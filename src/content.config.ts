import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/posts' }),
  // 使用 schema 函数形式，解构出 image
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string(),
    date: z.string(),
    category: z.string().optional(),
    // 将 cover 字段定义为图片类型或 URL 字符串
    cover: z.union([image(), z.string()]).optional(),
    tags: z.array(z.string()).optional(),
    views: z.number().default(0),
    comments: z.number().default(0),
  }),
});

export const collections = { posts };
