export const languages = {
  en: 'English',
  es: 'Español',
  ca: 'Català',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'en';

export const ui = {
  en: {
    'nav.about': 'About',
    'nav.projects': 'Projects',
    'nav.hobbies': 'Hobbies',
    'nav.contact': 'Contact',
    'nav.downloadCV': 'Download CV',
    'hero.title': 'Full-Stack Developer & AI Enthusiast',
    'hero.subtitle1':
      'Building intelligent applications with React, React Native, IoT and emerging AI technologies',
    'hero.subtitle2':
      'Combining traditional development with AI and hands-on making to push the boundaries of digital and physical innovation.',
    'hero.downloadCV': 'Download CV',
    'hero.viewProjects': 'View Projects',
    'about.title': 'About Me',
    'about.subtitle':
      'A passionate developer who bridges the digital and physical worlds through code, AI, and hands-on making.',
    'projects.title': 'Featured Projects',
    'projects.subtitle':
      'A selection of my recent projects showcasing my expertise in full-stack development, IoT mobile applications, and AI integration.',
    'hobbies.title': 'Hobbies & Making',
    'hobbies.subtitle':
      'Beyond coding, I enjoy exploring the intersection of technology and physical creation.',
    'contact.title': "Let's Work Together",
    'contact.subtitle': 'Ready to bring your ideas to life? Get in touch!',
    'contact.status': 'Uppsala, Sweden • Open to new opportunities',
  },
  es: {
    'nav.about': 'Acerca de',
    'nav.projects': 'Proyectos',
    'nav.hobbies': 'Aficiones',
    'nav.contact': 'Contacto',
    'nav.downloadCV': 'Descargar CV',
    'hero.title': 'Desarrollador Full-Stack y Entusiasta de la IA',
    'hero.subtitle1':
      'Construyendo aplicaciones inteligentes con React, React Native, IoT y tecnologías emergentes de IA',
    'hero.subtitle2':
      'Combinando desarrollo tradicional con IA y creación práctica para superar los límites de la innovación digital y física.',
    'hero.downloadCV': 'Descargar CV',
    'hero.viewProjects': 'Ver Proyectos',
    'about.title': 'Acerca de Mí',
    'about.subtitle':
      'Un desarrollador apasionado que conecta los mundos digital y físico a través del código, la IA y la creación práctica.',
    'projects.title': 'Proyectos Destacados',
    'projects.subtitle':
      'Una selección de mis proyectos recientes que muestran mi experiencia en desarrollo full-stack, aplicaciones móviles IoT e integración de IA.',
    'hobbies.title': 'Aficiones y Creación',
    'hobbies.subtitle':
      'Más allá del código, disfruto explorando la intersección entre tecnología y creación física.',
    'contact.title': 'Trabajemos Juntos',
    'contact.subtitle': '¿Listo para dar vida a tus ideas? ¡Ponte en contacto!',
    'contact.status': 'Uppsala, Suecia • Abierto a nuevas oportunidades',
  },
  ca: {
    'nav.about': 'Sobre mi',
    'nav.projects': 'Projectes',
    'nav.hobbies': 'Aficions',
    'nav.contact': 'Contacte',
    'nav.downloadCV': 'Descarregar CV',
    'hero.title': 'Desenvolupador Full-Stack i Entusiasta de la IA',
    'hero.subtitle1':
      "Construint aplicacions intel·ligents amb React, React Native, IoT i tecnologies emergents d'IA",
    'hero.subtitle2':
      "Combinant desenvolupament tradicional amb IA i creació pràctica per superar els límits de la innovació digital i física.",
    'hero.downloadCV': 'Descarregar CV',
    'hero.viewProjects': 'Veure Projectes',
    'about.title': 'Sobre Mi',
    'about.subtitle':
      'Un desenvolupador apassionat que connecta els mons digital i físic a través del codi, la IA i la creació pràctica.',
    'projects.title': 'Projectes Destacats',
    'projects.subtitle':
      'Una selecció dels meus projectes recents que mostren la meva experiència en desenvolupament full-stack, aplicacions mòbils IoT i integració d\'IA.',
    'hobbies.title': 'Aficions i Creació',
    'hobbies.subtitle':
      'Més enllà del codi, gaudeixo explorant la intersecció entre tecnologia i creació física.',
    'contact.title': 'Treballem Junts',
    'contact.subtitle': 'Preparat per donar vida a les teves idees? Posa\'t en contacte!',
    'contact.status': 'Uppsala, Suècia • Obert a noves oportunitats',
  },
} as const;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in ui) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang]?.[key] || ui[defaultLang][key] || key;
  };
}

export function getStaticPaths() {
  return Object.keys(languages).map((lang) => ({
    params: { lang },
  }));
}