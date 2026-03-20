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
});
