import { defineCollection, z } from 'astro:content';

const languageEnum = z.enum(['en', 'es', 'ca']);

// About schema
const aboutCollection = defineCollection({
  type: 'content',
  schema: z.object({
    lang: languageEnum,
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
  type: 'content',
  schema: z.object({
    lang: languageEnum,
    projectId: z.string(),
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
    featured: z.boolean().default(false),
    order: z.number(),
  }),
});

// Hobbies schema
const hobbiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    lang: languageEnum,
    title: z.string(),
    description: z.string(),
    highlights: z.array(z.string()),
    tools: z.array(z.string()),
    order: z.number(),
    icon: z.string().optional(),
  }),
});

// Contact schema
const contactCollection = defineCollection({
  type: 'content',
  schema: z.object({
    lang: languageEnum,
    title: z.string(),
    subtitle: z.string(),
    primaryCards: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        value: z.string(),
        action: z.object({
          label: z.string(),
          href: z.string(),
          variant: z.enum(['primary', 'outline']),
        }),
      })
    ),
    secondaryCards: z.array(
      z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        action: z.object({
          label: z.string(),
          href: z.string(),
          variant: z.enum(['primary', 'outline']),
        }),
      })
    ),
    status: z.object({
      heading: z.string(),
      description: z.string(),
      availabilityLabel: z.string(),
      availabilityState: z.enum(['open', 'busy', 'unavailable']).default('open'),
    }),
  }),
});

// Home metadata schema
const homeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()),
    type: z.enum(['website', 'article', 'profile']).default('profile'),
  }),
});

export const collections = {
  about: aboutCollection,
  projects: projectsCollection,
  hobbies: hobbiesCollection,
  contact: contactCollection,
  home: homeCollection,
};
