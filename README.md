# marcuson.dev

A high-performance portfolio website showcasing full-stack development expertise, AI enthusiasm, and maker projects. Built with modern web technologies for optimal user experience and developer productivity.

## 🚀 Tech Stack

- **Framework**: [Astro 5](https://astro.build) - Static Site Generator with React islands
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) - Utility-first CSS framework
- **Language**: [TypeScript](https://www.typescriptlang.org) - Strict mode with comprehensive type safety
- **Content**: [Astro Content Collections](https://docs.astro.build/en/guides/content-collections/) - Type-safe Markdown with Zod validation
- **Icons**: Custom SVG icon system with TypeScript definitions
- **Deployment**: [Vercel](https://vercel.com) - Edge-optimized hosting

## ⚡ Performance Features

- **Zero JavaScript by default** - React islands only where interaction is required
- **Static Site Generation** - Pre-rendered HTML for maximum performance
- **Type-safe content management** - Zod schemas for all content validation
- **Optimized assets** - Responsive images and font subsetting
- **Critical CSS inlining** - Automated by Astro for faster rendering
- **Bundle size optimization** - Tree-shaking and minimal runtime

## 🌍 Internationalization

Full i18n support with:
- **Languages**: English (en), Spanish (es), Catalan (ca)
- **Auto-detection**: Browser language preference with manual override
- **Localized routing**: `/en/`, `/es/`, `/ca/` URL structure
- **Content Collections**: Multilingual Markdown files with fallbacks

## 🎨 Design System

- **Dark theme** with custom color tokens
- **Responsive design** - Mobile-first approach
- **Accessibility-focused** - WCAG 2.1 AA compliance
- **Custom icon system** - 17 optimized SVG icons with TypeScript safety
- **Component architecture** - Reusable Astro components

## 📁 Project Structure

```
src/
├── components/
│   ├── data-display/     # Badge, Chip, SectionHeader
│   ├── layout/          # Container wrapper
│   ├── navigation/      # Navigation component
│   └── ui/             # Icon system
├── content/            # Content Collections
│   ├── about/          # About section content (ca.md, en.md, es.md)
│   ├── contact/        # Contact information
│   ├── hobbies/        # Maker projects and hobbies
│   ├── home/           # Homepage content
│   └── projects/       # Portfolio projects
├── layouts/            # Page layouts
├── pages/             # Route definitions
│   ├── ca/           # Catalan routes
│   ├── en/           # English routes
│   └── es/           # Spanish routes
├── sections/          # Page sections (Hero, About, Projects, etc.)
└── utils/            # Utilities (i18n, icons, types)
```

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or pnpm

### Setup

```bash
# Clone the repository
git clone https://github.com/Markuson/marcuson.dev.git
cd marcuson.dev

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run typecheck    # TypeScript type checking
npm run lint         # ESLint code analysis
npm run lint:fix     # Fix ESLint issues
npm run format       # Prettier code formatting
npm run lighthouse   # Performance auditing
```

## 📝 Content Management

Content is managed through Astro Content Collections with TypeScript schemas:

### Adding New Content

1. **Projects**: Add Markdown files to `src/content/projects/`
2. **Hobbies**: Add Markdown files to `src/content/hobbies/`
3. **About**: Edit `src/content/about/{lang}.md`
4. **Contact**: Edit `src/content/contact/{lang}.md`

### Content Schema

All content follows strict TypeScript schemas defined in `src/content/config.ts`:

```typescript
// Example project schema
const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  tech: z.array(z.string()),
  status: z.enum(['active', 'completed', 'archived']),
  featured: z.boolean(),
  // ... more fields
});
```

## 🎯 Performance Metrics

The site is optimized for exceptional performance:

- **Lighthouse Score**: 95+ across all metrics
- **Build Time**: ~2.5 seconds
- **Bundle Size**: 187KB total
- **First Contentful Paint**: <1.5s
- **Cumulative Layout Shift**: <0.02

## 🔧 Technical Highlights

### Icon System
- **17 optimized SVG icons** stored in `/src/assets/icons/`
- **Type-safe usage** with `IconName` union types
- **Consistent sizing** with `sm`, `md`, `lg`, `xl` size variants
- **Centralized management** through `/src/utils/icons.ts`

### Type Safety
- **Strict TypeScript** configuration with comprehensive compiler options
- **Content validation** with Zod schemas
- **Build-time type checking** prevents runtime errors
- **No `any` types** - fully typed codebase

### Accessibility
- **Semantic HTML** structure
- **ARIA labels** and landmarks
- **Keyboard navigation** support
- **Focus management** with visible indicators
- **Screen reader** compatibility

## 🚀 Deployment

The site is deployed on Vercel with:

- **Automatic deployments** from `main` branch
- **Preview deployments** for pull requests
- **Edge optimization** for global performance
- **Custom domain** configuration
- **HTTPS enforcement**

## 📊 Quality Assurance

- **TypeScript**: Strict type checking
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **Lighthouse CI**: Performance budgets
- **Responsive testing**: Cross-device compatibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Marc Uson** - Full-Stack Developer & AI Enthusiast

- 🌐 Website: [marcuson.dev](https://marcuson.dev)
- 💼 LinkedIn: [marc-uson](https://linkedin.com/in/marc-uson)
- 🐙 GitHub: [Markuson](https://github.com/Markuson)
- 📧 Email: [hi@marcuson.dev](mailto:hi@marcuson.dev)

---

*Built with ❤️ using Astro, TypeScript, and modern web technologies*