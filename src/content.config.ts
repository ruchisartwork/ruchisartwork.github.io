import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const illustration = defineCollection({
	// Load Markdown and MDX files in the `src/content/illustration/` directory.
	loader: glob({ base: './src/content/illustration', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			customSketch: image().optional(),
		}),
});

export const collections = { illustration };
