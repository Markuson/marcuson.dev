# 1) Elevator Pitch

marcuson.dev is a portfolio by an ex–industrial-automation engineer turned full-stack and mobile developer. It showcases React, Next.js, and Astro websites, React Native IoT apps, and practical AI work. The site highlights how AI is embedded in day-to-day development and explored as a maker hobby, connecting code, devices, and cloud. **source:** PO 2025-09-18

# 2) Who is this app for

* Hiring managers and recruiters validating skills and history. **source:** user
* Potential clients and collaborators in IoT, AI, and product teams. **source:** user
* Maker and developer peers interested in electronics, robotics, and 3D printing. **source:** user

# 3) Functional Requirements

R-001. Global nav with text logo “marcuson.dev”, links: About, Projects, Hobbies, Contact; highlighted “Download CV.” Priority: Must. **source:** user/Hero + PO
R-002. Hero with H1 “Full-Stack Developer & AI Enthusiast”, two subtitles, primary “Download CV”, secondary “View Projects”, social icons (GitHub, LinkedIn, email), scroll indicator. Priority: Must. **source:** user/Hero
R-003. Hover/focus states; active section highlight; external links open new tab; social tooltips. Priority: Should. **source:** user/Common
R-004. Accessibility: single H1, semantic `nav`, aria-labels, focus visible, keyboard nav, contrast ≥4.5:1. Priority: Must. **source:** user/Common
R-005. About: skills chips by domain; experience timeline (3 roles); “My Philosophy” highlight. Priority: Must. **source:** user/About
R-006. Featured Projects: 3×2 card grid with badges, title, description, tech chips, Code and Demo buttons, “View All Projects on GitHub.” Use six mock items now. Priority: Must. **source:** user/Projects + PO
R-007. Contact: cards for Email, GitHub, LinkedIn; Start a Project card; Download CV card; Current Status with location and availability indicator. Email uses `mailto:` only. Priority: Must. **source:** user/Contact + PO
R-008. Hobbies & Making: 2×2 cards (3D Printing, Electronics, Robotics, AI Vibecoding) with highlights and tools; final collaboration banner. Priority: Should. **source:** user/Hobbies
R-009. Responsive: ≥xl 3 cols, md 2, \<sm 1; hero stacks; collapsible mobile nav; mobile CTAs full width. Priority: Must. **source:** user/Responsive
R-010. Theme: dark, rounded corners, soft shadows, centered container (\~7xl), sans hierarchy. No purple accent for now. Priority: Must. **source:** user/Common + PO
R-011. i18n: locales ca, en, es. Auto-detect by browser. If browser language is not ca/es, fall back to en. Manual language switcher in navbar as override. Priority: Must. **source:** PO
R-012. SEO/meta: domain `marcuson.dev`, OG/Twitter tags, sitemap, robots, canonical, 404, schema.org Person/Website. Priority: Should. **source:** (ASSUMPTION)
R-013. Content source: local Markdown via Astro Collections for About, Projects, Hobbies, Contact copy, i18n strings. Priority: Must. **source:** PO
R-014. Assets: CV PDF at `/assets/cv/marcuson.pdf`; social/email variables. Priority: Must. **source:** PO
R-015. Performance: lazy images, optimized assets, prefetch key routes, Lighthouse ≥90. Priority: Should. **source:** (ASSUMPTION)
R-016. Analytics: Google Analytics (GA4). Measurement ID (TO COMPLETE). No extra cookies beyond GA requirements. Priority: Should. **source:** PO
R-017. Deployment: Vercel hosting with HTTPS, www→root redirects, preview deploys. Priority: Must. **source:** PO
R-018. Security & privacy: `rel="noopener"`, baseline CSP, no third-party trackers beyond GA, email obfuscation. Priority: Should. **source:** user/Common + (ASSUMPTION)
R-019. Nav behavior: navbar invisible at page top, fades in on scroll with glass (blurred translucent) background; optional sticky after reveal. Priority: Must. **source:** PO
R-020. System theme toggle: follow OS by default with user override (light/dark). Persist preference. Priority: Should. **source:** PO

# 4) User Stories

* As a hiring manager, I can scan skills and history, then download a CV PDF. **links:** R-002, R-005, R-014
* As a collaborator, I can open live demos and repos for featured projects. **links:** R-006
* As a visitor, I can contact via email or LinkedIn and see availability “Uppsala, Sweden • Open to new opportunities.” **links:** R-007
* As a multilingual user, I get content in my browser language with a manual override. **links:** R-011
* As the site owner, I can update content via Markdown in Astro Collections. **links:** R-013
* As an accessibility-focused user, I can fully navigate with keyboard and screen readers. **links:** R-004
* As a mobile user, I can use a collapsible menu and large tap targets. **links:** R-009

# 5) User Interface — high-level view

* Sections: Hero, About, Featured Projects, Hobbies & Making, Contact. **links:** R-001–R-008
* Global: dark theme, text logo, neutral accent TBD, consistent spacing, chips, cards. **links:** R-010
* Nav: transparent at top, fade-in on scroll with glass background, sticky after reveal. **links:** R-019
* States: hover, focus, active, tooltips. **links:** R-003
* Responsive grids and breakpoints. **links:** R-009
* i18n selector visible in navbar; auto-detect on first load; override persists. **links:** R-011
* Theme toggle follows system with user override. **links:** R-020

Variables (TO COMPLETE where noted):

* GitHub: `Markuson` • LinkedIn slug: `marc-uson` • Email: `hi@marcuson.dev`. **source:** PO
* Location: Uppsala, Sweden. **source:** PO
* GA4 Measurement ID: (TO COMPLETE). **source:** PO