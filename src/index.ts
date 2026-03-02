/*
 * Project:    ci-test-ts-simple
 * File:       src/index.ts
 * License:    FSL-1.1-ALv2
 * Copyright:  (c) 2026 HYPERI PTY LIMITED
 */

/**
 * Add two numbers together.
 */
export function add(a: number, b: number): number {
  return a + b;
}

/**
 * Return a greeting string for the given name.
 */
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

/**
 * Check whether a string is a palindrome (case-insensitive).
 */
export function isPalindrome(s: string): boolean {
  const normalised = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  return normalised === normalised.split('').reverse().join('');
}
