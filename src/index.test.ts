/*
 * Project:    ci-test-ts-simple
 * File:       src/index.test.ts
 * License:    FSL-1.1-ALv2
 * Copyright:  (c) 2026 HYPERI PTY LIMITED
 */

import { describe, it, expect } from 'vitest';
import { add, greet, isPalindrome } from './index.js';

describe('add', () => {
  it('should add two positive numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  it('should handle negative numbers', () => {
    expect(add(-1, 1)).toBe(0);
  });

  it('should handle zero', () => {
    expect(add(0, 0)).toBe(0);
  });
});

describe('greet', () => {
  it('should return a greeting with the given name', () => {
    expect(greet('World')).toBe('Hello, World!');
  });

  it('should handle an empty string', () => {
    expect(greet('')).toBe('Hello, !');
  });
});

describe('isPalindrome', () => {
  it('should return true for a palindrome', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  it('should return true for a mixed-case palindrome', () => {
    expect(isPalindrome('RaceCar')).toBe(true);
  });

  it('should return true for a palindrome with spaces and punctuation', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });

  it('should return false for a non-palindrome', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  it('should return true for an empty string', () => {
    expect(isPalindrome('')).toBe(true);
  });
});
