module.exports = {
  ci: {
    collect: {
      // Build the site before running Lighthouse
      startServerCommand: 'pnpm build && pnpm preview',
      startServerReadyPattern: 'Local:',
      startServerReadyTimeout: 30000,
      url: [
        'http://localhost:4321/en',
        'http://localhost:4321/es',
        'http://localhost:4321/ca'
      ],
      numberOfRuns: 3
    },
    assert: {
      assertions: {
        // Performance budgets
        'categories:performance': ['error', {minScore: 0.9}],
        'categories:accessibility': ['error', {minScore: 0.95}],
        'categories:best-practices': ['error', {minScore: 0.9}],
        'categories:seo': ['error', {minScore: 0.95}],

        // Core Web Vitals
        'first-contentful-paint': ['error', {maxNumericValue: 2500}],
        'largest-contentful-paint': ['error', {maxNumericValue: 4000}],
        'cumulative-layout-shift': ['error', {maxNumericValue: 0.1}],
        'total-blocking-time': ['error', {maxNumericValue: 600}],

        // Resource budgets
        'resource-summary:document:size': ['error', {maxNumericValue: 50000}],
        'resource-summary:stylesheet:size': ['error', {maxNumericValue: 100000}],
        'resource-summary:script:size': ['error', {maxNumericValue: 200000}],
        'resource-summary:image:size': ['error', {maxNumericValue: 500000}],
        'resource-summary:total:size': ['error', {maxNumericValue: 1000000}],

        // Network requests
        'resource-summary:total:count': ['error', {maxNumericValue: 50}],

        // Specific audit checks
        'uses-webp-images': 'off', // We'll implement this later
        'offscreen-images': 'off', // We'll implement lazy loading
        'unused-css-rules': ['warn', {maxLength: 0}],
        'render-blocking-resources': ['warn', {maxLength: 0}],

        // Security and best practices
        'is-on-https': 'error',
        'uses-http2': 'error',
        'no-vulnerable-libraries': 'error',
        'csp-xss': 'warn' // We have CSP in Vercel config
      }
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
};