# Layout Structure

* Pages/sections: Hero, About, Featured Projects, Hobbies & Making, Contact.
* Container: centered, max width \~7xl, uniform horizontal padding.
* Grid: cards use 3/2/1 cols at ≥1280/≥768/<768 px.
* Navbar: invisible at top. Fades in after \~16 px scroll. Glass background on reveal. Sticky after reveal.
* Hero: centered stack. H1, two subtitles, primary and secondary CTAs, social icons row, scroll indicator. Monochrome isometric background.
* About: two-column grid. Left skills chips. Right experience timeline cards. Bottom “My Philosophy” highlight card.
* Projects: 3×2 card grid. Each card = badges, title, description, tech chips, Code/Demo footer.
* Hobbies: 2×2 cards with highlights list and tool chips.
* Contact: three small cards (Email, GitHub, LinkedIn). Two wide cards (Start a Project, Download CV). Status bar at bottom: “Uppsala, Sweden • Open to new opportunities”.

# Core Components

* **NavBar**: text logo “marcuson.dev”; links About/Projects/Hobbies/Contact; LanguageSelector; “Download CV” button; ThemeToggle.
* **LanguageSelector**: CA/EN/ES labels. Tooltip: “Change language”.
* **ThemeToggle**: system default. User override persists.
* **CTA Button Primary**: label “Download CV”, leading download icon. Emphasis.
* **CTA Button Secondary**: outline “View Projects”.
* **SocialIconGroup**: GitHub, LinkedIn, email. Tooltips. New tab except email.
* **SectionHeader**: title + optional subtitle.
* **Chip**: pill with tech/tool text.
* **TimelineCard**: role, company, dates, 1–2 bullets.
* **ProjectCard**: badges (category, status), title link, short description, tech chips, footer Code/Demo.
* **HobbyCard**: title, short intro, “Recent Projects & Highlights” list, “Tools & Technologies” chips.
* **ContactCard**: icon, label, detail, action button.
* **StatusIndicator**: green dot + text.

# Interaction Patterns

* Nav fade-in: triggers after \~16 px scroll. Duration \~200 ms. Ease-out.
* Glass on Nav: background rgba(17,17,17,0.6); border rgba(255,255,255,0.08); backdrop-blur \~12px.
* Hover/focus: visible focus ring on links, buttons, cards. Cards lift by \~2–4 px and show subtle border.
* Active section link: accent underline.
* Primary CTA hover: slight scale \~1.02 and shadow.
* External links: new tab + `rel="noopener"`.
* Prefers-reduced-motion: disable lifts and scale.
* Tooltips on social and language items.

# Visual Design Elements & Color Scheme

* Theme: dark. Soft corners and shadows.
* Accent: **Lime `#84CC16`** for CTAs, active links, badges.
* Neutrals: text `#E5E7EB`, muted `#9CA3AF`, surfaces `#0B0F14` / `#111827` / `#1F2937`.
* Borders: `rgba(255,255,255,0.08)`. Focus ring: accent or white at 2 px min.
* Hero background: monochrome isometric tech illustration. Low contrast behind text.
* Icons: outline style. Email icon filled when hover.
* Elevation: shadow at rest subtle, on hover medium.

# Mobile, Web App, Desktop

* Mobile (<768 px): stacked nav with hamburger; language and theme inside sheet; CTAs full width; grids 1 col; larger tap targets.
* Tablet (≥768 px): 2-col grids; inline language selector; theme toggle in navbar.
* Desktop (≥1280 px): 3-col projects; hobbies 2×2; hero H1 split into two lines.
* Sticky nav only after reveal on all breakpoints.

# Typography

* UI: Inter or Manrope (ASSUMPTION).
* Code/Chips: JetBrains Mono (ASSUMPTION).
* Hierarchy: h1 44–56 px, h2 28–32 px, h3 20–22 px, body 16–18 px, chips 12–14 px.
* Line lengths: 60–80 chars body.
* Numerals: tabular in metrics and badges.

# Accessibility

* Landmarks: `<header>`, `<nav role="navigation">`, `<main>`, `<section>`, `<footer>`.
* Single H1 per page. Section headings are h2/h3.
* Buttons and icons with `aria-label`. Icons with `aria-hidden="true"` when decorative.
* Keyboard: visible focus, logical tab order, skip-to-content link.
* Contrast: ≥4.5:1 for text and interactive elements.
* Cards as `<article>` with h3. Project buttons include project name in `aria-label`.
* Lists: skills chips use `role="list"` and `role="listitem"`. Jobs as `<section>` with h3.
* Motion: respect `prefers-reduced-motion`.
* Images: descriptive `alt`. Hero background marked decorative if not essential.

# Content & i18n

* Locales: ca, en, es. Auto-select by browser. If not ca/es then fallback to en. Manual override persists.
* Variable data: CV `/assets/cv/marcuson.pdf`; GitHub `Markuson`; LinkedIn `marc-uson`; email `hi@marcuson.dev`.
* Copy slots: Hero titles and subtitles, About subtitle and philosophy, project metadata, hobby lists, contact texts.

# Responsive Specs

* Breakpoints: sm 640, md 768, lg 1024, xl 1280, 2xl 1536.
* Projects grid: xl 3 cols, md 2, sm 1.
* Hobbies grid: md 2, sm 1.
* Hero: CTAs full width on \<lg.

# States & Empty/Error

* If a project link is missing, hide Code/Demo button and show “Private” badge.
* If CV missing, disable primary CTA with tooltip “CV coming soon”.

---

Confirm to proceed to Architecture (SRS).
