/*
 * Project:    ci-test-ts-app
 * File:       vite.config.ts
 * License:    FSL-1.1-ALv2
 * Copyright:  (c) 2026 HYPERI PTY LIMITED
 */

import { defineConfig } from 'vite-plus';

export default defineConfig({
  lint: {
    categories: { correctness: 'error' },
    ignorePatterns: ['dist/', 'coverage/', 'node_modules/'],
  },
  fmt: {
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    ignorePatterns: ['dist/', 'coverage/', 'node_modules/', 'package-lock.json'],
  },
});
