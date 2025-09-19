# marcuson.dev

Multi-language portfolio website for Marc Uson - Industrial Engineer turned Full-Stack Developer & AI Enthusiast.

## 🌐 Languages

- English (`/en`)
- Spanish (`/es`)
- Catalan (`/ca`)

## 🛠️ Tech Stack

- **Framework**: Astro 5 with React islands
- **Styling**: Tailwind CSS 4 with custom design tokens
- **TypeScript**: Strict mode with comprehensive type safety
- **Content**: Astro Content Collections with Zod schemas
- **Deployment**: Vercel with edge middleware

## 🚀 Commands

All commands are run from the root of the project:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm lint`            | Run ESLint for code quality                      |
| `pnpm typecheck`       | Run TypeScript type checking                     |

## 📁 Project Structure

```text
/
├── docs/                  # Project documentation
├── public/               # Static assets
├── src/
│   ├── assets/          # Design assets (SVGs, images)
│   ├── components/      # Astro components
│   ├── content/         # Content Collections (i18n)
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages (/en, /es, /ca)
│   ├── styles/          # Global styles
│   └── utils/           # Utilities (i18n, helpers)
└── package.json
```