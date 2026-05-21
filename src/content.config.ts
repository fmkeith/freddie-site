import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const diary = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/diary' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

const revision = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/revision' }),
  schema: z.object({
    title: z.string(),
    subject: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { diary, revision };
