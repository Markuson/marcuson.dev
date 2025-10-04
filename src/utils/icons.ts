// === ICON TYPES & INTERFACES ===

export interface IconProps {
  class?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  'aria-hidden'?: boolean;
}

export interface IconDefinition {
  viewBox: string;
  fill?: string;
  stroke?: string;
  paths: string[];
}

// Icon name mapping for type safety
export type IconName =
  | 'arrow-circle-right'
  | 'check-circle'
  | 'chevron-down'
  | 'chevron-down-outline'
  | 'code'
  | 'cpu-chip'
  | 'download'
  | 'email'
  | 'external-link'
  | 'github'
  | 'lightbulb'
  | 'lightning-bolt'
  | 'linkedin'
  | 'location-marker'
  | 'menu'
  | 'printer-3d'
  | 'users';

// === ICON UTILITIES ===

export const iconSizes = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12',
} as const;

export const getIconClasses = (props: IconProps) => {
  const { class: customClass, size = 'md' } = props;
  const sizeClass = iconSizes[size];
  return customClass ? `${sizeClass} ${customClass}` : sizeClass;
};

// Move icon data to separate file for better organization
export const iconDefinitions: Record<IconName, IconDefinition> = {
  'arrow-circle-right': {
    viewBox: '0 0 20 20',
    fill: 'currentColor',
    paths: ['M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z']
  },
  'check-circle': {
    viewBox: '0 0 20 20',
    fill: 'currentColor',
    paths: ['M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z']
  },
  'chevron-down': {
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    paths: ['M19 9l-7 7-7-7']
  },
  'chevron-down-outline': {
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    paths: ['M19 14l-7 7m0 0l-7-7m7 7V3']
  },
  'code': {
    viewBox: '0 0 20 20',
    fill: 'currentColor',
    paths: ['M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z']
  },
  'cpu-chip': {
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    paths: ['M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z']
  },
  'download': {
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    paths: ['M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z']
  },
  'email': {
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    paths: ['M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z']
  },
  'external-link': {
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    paths: ['M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14']
  },
  'github': {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    paths: ['M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z']
  },
  'lightbulb': {
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    paths: ['M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z']
  },
  'lightning-bolt': {
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    paths: ['M13 10V3L4 14h7v7l9-11h-7z']
  },
  'linkedin': {
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    paths: ['M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z']
  },
  'location-marker': {
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    paths: ['M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z', 'M15 11a3 3 0 11-6 0 3 3 0 016 0z']
  },
  'menu': {
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    paths: ['M4 6h16M4 12h16M4 18h16']
  },
  'printer-3d': {
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    paths: ['M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10']
  },
  'users': {
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    paths: ['M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z']
  },
};