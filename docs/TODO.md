# TODO - marcuson.dev Implementation

## Foundation & Setup
- [ ] Set up project foundation with TypeScript, ESLint, and build tools
- [ ] Configure Astro for multi-language SSG with strict TypeScript
- [ ] Set up Tailwind CSS with custom design tokens and dark theme
- [ ] Create Astro Content Collections schemas for i18n content
- [ ] Implement language routing structure (/en, /es, /ca)

## Core Layout & Components
- [ ] Create base layout with responsive container and navigation structure
- [ ] Implement Hero section with CTAs and social links
- [ ] Add placeholder hero background SVG and isometric design *(requires PO assets)*
- [ ] Implement About section with skills chips and experience timeline
- [ ] Create Featured Projects section with 3x2 card grid
- [ ] Implement Hobbies & Making section with 2x2 card layout
- [ ] Create Contact section with email, social, and availability cards

## Interactions & Behavior
- [ ] Add navbar scroll behavior (fade-in with glass background)
- [ ] Implement responsive design for mobile, tablet, and desktop
- [ ] Add accessibility features (ARIA labels, keyboard navigation, focus states)
- [ ] Implement theme toggle with system preference detection

## Deployment & Infrastructure
- [ ] Create Edge Middleware for language detection and redirection
- [ ] Add placeholder CV PDF and configure download functionality *(requires PO CV PDF)*
- [ ] Implement SEO meta tags, Open Graph, and sitemap generation
- [ ] Configure Vercel deployment with proper redirects and caching

## Quality & Performance
- [ ] Set up Lighthouse CI with performance budgets
- [ ] Add performance optimizations (lazy loading, image optimization, code splitting)
- [ ] Add security headers and Content Security Policy

## Required Assets from PO
- [ ] Actual CV PDF (`/assets/cv/marcuson.pdf`)
- [ ] Hero background SVG (isometric tech illustration)
- [ ] Professional headshot/profile image
- [ ] Project screenshots/mockups for portfolio
- [ ] Google Analytics 4 Measurement ID

## Content Requirements
All sections will use mock data initially with proper Content Collections structure:
- Personal information (GitHub: Markuson, LinkedIn: marc-uson, Email: hi@marcuson.dev)
- Skills and experience timeline
- Featured projects with descriptions, tech stacks, and links
- Hobbies & making projects and tools
- Location: Uppsala, Sweden

## Implementation Strategy
- **Approach**: One section at a time to completion
- **Styling**: Tailwind CSS only, no custom CSS files
- **Components**: Astro components first, React islands only when necessary
- **Performance**: Functionality first, optimizations later
- **Languages**: Full i18n implementation from start (ca, en, es)
- **Content**: Astro Content Collections with mock data