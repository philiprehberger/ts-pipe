import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

const mod = await import('../../dist/index.js');

describe('ts-pipe', () => {
  it('should export pipe', () => {
    assert.ok(mod.pipe);
  });

  it('should export compose', () => {
    assert.ok(mod.compose);
  });

  it('should export pipeline', () => {
    assert.ok(mod.pipeline);
  });

  it('should export pipeAsync', () => {
    assert.ok(mod.pipeAsync);
  });

  it('should export tap', () => {
    assert.ok(mod.tap);
  });
});

describe('tap', () => {
  it('returns the original value unchanged', () => {
    const result = mod.tap(() => {})(42);
    assert.equal(result, 42);
  });

  it('returns the original object reference unchanged', () => {
    const obj = { a: 1 };
    const result = mod.tap(() => {})(obj);
    assert.equal(result, obj);
  });

  it('invokes fn with the value', () => {
    let seen: unknown = null;
    const result = mod.tap((v: number) => { seen = v; })(7);
    assert.equal(seen, 7);
    assert.equal(result, 7);
  });

  it('works inside pipe as a side-effect step', () => {
    let seen: number | null = null;
    const result = mod.pipe(
      1,
      (x: number) => x + 1,
      mod.tap((x: number) => { seen = x; }),
      (x: number) => x + 1,
    );
    assert.equal(seen, 2);
    assert.equal(result, 3);
  });
});
