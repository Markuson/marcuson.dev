import { defineCollection, z } from 'astro:content';

// About schema
const aboutCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    skills: z.object({
      frontend: z.array(z.string()),
      mobile: z.array(z.string()),
      backend: z.array(z.string()),
      aiml: z.array(z.string()),
      making: z.array(z.string()),
    }),
    experience: z.array(
      z.object({
        role: z.string(),
        company: z.string(),
        period: z.string(),
        description: z.string(),
        highlights: z.array(z.string()),
      })
    ),
    philosophy: z.object({
      title: z.string(),
      content: z.string(),
    }),
  }),
});

// Projects schema
const projectsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    category: z.enum([
      'AI Development',
      'Full-Stack',
      'AI/ML',
      'Hardware',
      'Research',
      'Web Development',
    ]),
    status: z.enum([
      'Featured',
      'Live',
      'Open Source',
      'Prototype',
      'In Development',
      'Client Project',
      'Private',
    ]),
    description: z.string(),
    tech: z.array(z.string()),
    codeUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    featured: z.boolean(),
    order: z.number(),
  }),
});

// Hobbies schema
const hobbiesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    highlights: z.array(z.string()),
    tools: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = {
  about: aboutCollection,
  projects: projectsCollection,
  hobbies: hobbiesCollection,
};