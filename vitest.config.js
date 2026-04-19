import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // Exclure le dossier où se trouve tests Playwright
    exclude: ['**/node_modules/**', '**/dist/**', '.github/workflows/tests/**',],
  },
})
