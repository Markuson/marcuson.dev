I want to build my personal website called maruson.dev. the main goal is to use it as a portfolio with focus on the profesional side but also mentioning some of my passions and hobbies that can be related to my work. I'm an ex industrial engineer especialized in industrial automation that has turned into a web and app and web developer, i've been working on react native apps oriented to IOT and control of products via cloud/bluetooth. And i've also done some projects using next.js. Actually, I'm also exploring AI related to development and increase of productivity.
I'm also pasionate about the maker world, electronics and 3d printing. And I'm also very interested on AI as a developer and as a team lead.
Here it is a detailed description of the website structure:

# Hero

- **Goal:** present value proposition and primary CTAs.
- **Structure:**
  - Top navbar:
    - Left: “YourName.dev” logo.
    - Center-right: links “About”, “Projects”, “Hobbies”, “Contact”.
    - Language selector “English”.
    - Highlighted button “Download CV”.
  - Centered hero:
    - H1: “Full-Stack Developer & AI Enthusiast”.
    - Subtitle 1: “Building intelligent applications with React, React Native, IoT and emerging AI technologies”.
    - Subtitle 2: “Combining traditional development with AI and hands-on making to push the boundaries of digital and physical innovation.”
    - CTAs:
      - Primary solid “Download CV” with download icon.
      - Secondary outline “View Projects”.
    - Social icons: GitHub, LinkedIn, email.
    - Scroll indicator centered at the bottom.
  - Background: isometric tech illustration with purple accents.
- **Interactions/States:**
  - Optional sticky navbar; highlight active section.
  - Visible hover and focus on links and buttons; “Download CV” adds shadow and slight scale.
  - Social icons have tooltips and open in new tab.
- **Responsive:**
  - ≥lg: centered layout, H1 in two lines.
  - <lg: stacked layout, collapsible nav; CTAs full width.
- **Accessibility:**
  - Single H1, `nav` with `role="navigation"`.
  - Buttons with `aria-label`. High contrast.
- **Variable data:** links to CV, GitHub, LinkedIn, email.

---

# About Me

- **Goal:** present credentials, skills, and work history.
- **Structure:**
  - Title: “About Me”.
  - Subtitle: “A passionate developer who bridges the digital and physical worlds through code, AI, and hands-on making.”
  - Two-column grid:
    - **Left — Skills & Technologies:** grouped chips
      - _Frontend:_ React, TypeScript, Tailwind CSS, Next.js.
      - _Mobile:_ React Native, IoT Integration, Bluetooth/WiFi, Native Modules.
      - _Backend:_ Node.js, Python, PostgreSQL, APIs.
      - _AI/ML:_ OpenAI, LangChain, TensorFlow, Hugging Face.
      - _Making:_ 3D Printing, Arduino, Electronics, Robotics.
    - **Right — Experience:** chronological cards
      - **Senior Full-Stack Developer — Tech Innovations Inc. — 2022–Present.**
        - Leading AI-powered web apps and vibecoding methodologies.
      - **Mobile IoT Developer — Digital Solutions Ltd. — 2019–2022.**
        - React Native with hardware devices and sensors.
      - **React Native Developer — Self-Employed — 2018–2019.**
        - Custom mobile solutions connecting IoT to intuitive UIs.
  - Bottom block **My Philosophy** with icon and highlighted paragraph.
- **Interactions/States:**
  - Company and role links in accent color.
  - Chips have hover. Cards elevate on hover.
- **Responsive:** <lg stacks to one column; cards full width.
- **Accessibility:**
  - Skills list uses `role="list"`, chips use `role="listitem"`.
  - Timeline as `<section>` per job with `h3` headings.
- **Variable data:** role texts, dates, companies, philosophy.

---

# Featured Projects

- **Goal:** showcase portfolio with code and demo access.
- **Structure:**
  - Title: “Featured Projects”.
  - Subtitle: “A selection of my recent projects showcasing my expertise in full-stack development, IoT mobile applications, and AI integration.”
  - 3×2 grid of project cards. Each card includes:
    - Top badges: category and status.
    - Clickable title.
    - Short description.
    - Tech chips.
    - Footer actions: **Code** and **Demo** buttons.
  - Visible projects:
    - **AI Code Assistant** — category _AI Development_, status _Featured_. Tech: TypeScript, OpenAI API, VS Code Extensions, React.
    - **IoT Dashboard** — category _Full-Stack_, status _Live_. Tech: React, Node.js, WebSocket, Arduino, MQTT.
    - **3D Print Optimizer** — category _AI/ML_, status _Open Source_. Tech: Python, TensorFlow, OpenCV, Flask.
    - **Smart Home Hub** — category _Hardware_, status _Prototype_. Tech: React Native, Raspberry Pi, KiCad, Python.
    - **VibeCoding Toolkit** — category _Research_, status _In Development_. Tech: Electron, Machine Learning, Node.js, Real-time Analytics.
    - **E-commerce Platform** — category _Web Development_, status _Client Project_. Tech: Next.js, Stripe, PostgreSQL, Tailwind CSS.
  - Bottom CTA: “View All Projects on GitHub”.
- **Interactions/States:**
  - Cards elevate and color border on hover.
  - **Demo** opens in new tab; **Code** goes to repository.
- **Responsive:** ≥xl 3 columns, md 2 columns, <sm 1 column.
- **Accessibility:** each card is an `article` with `h3`; buttons have `aria-label` with project name.

---

# Contact

- **Goal:** enable contact, CV download, and availability.
- **Structure:**
  - Title: “Let’s Work Together” and short subtitle.
  - Row of three cards:
    - **Email** with icon. Text: `hello@yourname.dev`. Button: **Send Email**.
    - **GitHub** with `@yourusername`. Button: **View Repos**.
    - **LinkedIn**. Button: **View Profile**.
  - Second row of two wide cards:
    - **Start a Project** with copy and **Get In Touch** button.
    - **Download CV** with short copy and **Download PDF** button.
  - Bottom **Current Status** block:
    - “Based in [Your Location] • Available for remote collaboration worldwide”.
    - Green indicator: “Open to new opportunities”.
- **Interactions/States:** buttons have hover and focus. Email uses `mailto:`. Others open new tab.
- **Responsive:** three cards stack on mobile; buttons full width.
- **Accessibility:** icons `aria-hidden="true"`. Cards have proper roles and `h3` titles.

---

# Hobbies & Making

- **Goal:** humanize profile by showing maker skills.
- **Structure:**
  - Title: “Hobbies & Making”.
  - Subtitle: “Beyond coding, I enjoy exploring the intersection of technology and physical creation.”
  - 2×2 grid of cards. Each card includes:
    - Title and brief description.
    - **Recent Projects & Highlights** list with four items.
    - **Tools & Technologies** chips.
  - Cards:
    - **3D Printing**
      - Highlights: custom enclosures for electronics; miniatures and artistic sculptures; functional parts for IoT; parametric design in Fusion 360.
      - Tools: Ender 3 Pro; Elegoo Mars; PLA/PETG/Resin; Fusion 360.
    - **Electronics**
      - Highlights: Arduino shields; ESP32-based IoT networks; LED matrix controllers and drivers; power management circuits.
      - Tools: KiCad; Arduino IDE; Multimeter; Oscilloscope.
    - **Robotics**
      - Highlights: line-following and obstacle-avoidance robots; home automation with custom sensors; robotic arm with computer vision; modified drones.
      - Tools: Raspberry Pi; Arduino; ROS; OpenCV.
    - **AI Vibecoding**
      - Highlights: GPT models for code generation; mood-based development environment tools; AI-assisted 3D model generation; automated testing with LLMs.
      - Tools: OpenAI API; Hugging Face; LangChain; Custom Models.
  - Final banner: “Let’s Build Something Together” with collaboration copy.
- **Interactions/States:** subtle hover on cards. Optional interactive chips as filters.
- **Responsive:** md two columns, <sm one column.
- **Accessibility:** semantic lists and `h3` headings per card.

---

## Common Design Notes

- Dark theme. Rounded corners and soft shadows. minimalistic and modern aspect
- Centered container, max width ≈7xl, uniform horizontal padding.
- Sans typography. Hierarchy: `h1` > `h2` > `h3` > `p` > chips.
- Visible focus, contrast ≥4.5:1, full keyboard navigation.
- i18n via language selector. External links use `rel="noopener"`.
