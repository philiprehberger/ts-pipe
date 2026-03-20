# @philiprehberger/ts-pipe

[![CI](https://github.com/philiprehberger/ts-pipe/actions/workflows/ci.yml/badge.svg)](https://github.com/philiprehberger/ts-pipe/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@philiprehberger/ts-pipe.svg)](https://www.npmjs.com/package/@philiprehberger/ts-pipe)
[![License](https://img.shields.io/github/license/philiprehberger/ts-pipe)](LICENSE)

Typed functional pipe and compose for TypeScript

## Installation

```bash
npm install @philiprehberger/ts-pipe
```

## Usage

```ts
import { pipe, pipeline, pipeAsync } from '@philiprehberger/ts-pipe';

const result = pipe(" Hello ", s => s.trim(), s => s.split(" "));
// string[] — fully inferred

const transform = pipeline(s => s.trim(), s => s.toLowerCase());
transform(" HELLO "); // "hello"

const data = await pipeAsync(userId, fetchUser, extractProfile, validate);
```

### Compose (right-to-left)

```ts
import { compose } from '@philiprehberger/ts-pipe';

const format = compose(
  (s: string) => `[${s}]`,
  (s: string) => s.toUpperCase(),
  (s: string) => s.trim(),
);
format("  hello  "); // "[HELLO]"
```

## API

| Function | Description |
|----------|-------------|
| `pipe(value, ...fns)` | Data-first pipeline, returns final result |
| `compose(...fns)` | Right-to-left function composition |
| `pipeline(...fns)` | Left-to-right composition, returns reusable function |
| `pipeAsync(value, ...fns)` | Async-aware pipeline with await between steps |


## Development

```bash
npm install
npm run build
npm test
```

## License

MIT
