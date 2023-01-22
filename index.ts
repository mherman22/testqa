import { enable } from 'colors';
import { describe, expect, it } from './src/functions';

console.log();
console.log("<----------------------------- First Test----------------------------->");
console.log();

describe('Passing Test Suite', () => {
  it('Passing Test Case #1', () => {
    expect('foo').toExist();
    expect(1 + 1).toBe(2);
  });

  it('Passing Test Case #2', () => {
    expect({}).toBeType('object');
  });
});

console.log();
console.log("<----------------------------- Second Test----------------------------->");
console.log();

describe('Failing Test Suite', () => {
  it('Passing Test Case', () => {
    expect(0).toBe(0);
  });

  it('Failing Test Case', () => {
    expect(true).toBe(true);
    expect(true).toBe(false);
  });

  it('Unreachable Test Case', () => {
    expect('foo').toBe('bar');
  });
});

console.log();
