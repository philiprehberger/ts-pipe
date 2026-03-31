# @philiprehberger/pipe

[![CI](https://github.com/philiprehberger/ts-pipe/actions/workflows/ci.yml/badge.svg)](https://github.com/philiprehberger/ts-pipe/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@philiprehberger/pipe.svg)](https://www.npmjs.com/package/@philiprehberger/pipe)
[![Last updated](https://img.shields.io/github/last-commit/philiprehberger/ts-pipe)](https://github.com/philiprehberger/ts-pipe/commits/main)

Typed functional pipe and compose for TypeScript

## Installation

```bash
npm install @philiprehberger/pipe
```

## Usage

```ts
import { pipe, pipeline, pipeAsync } from '@philiprehberger/pipe';

const result = pipe(" Hello ", s => s.trim(), s => s.split(" "));
// string[] — fully inferred

const transform = pipeline(s => s.trim(), s => s.toLowerCase());
transform(" HELLO "); // "hello"

const data = await pipeAsync(userId, fetchUser, extractProfile, validate);
```

### Compose (right-to-left)

```ts
import { compose } from '@philiprehberger/pipe';

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

## Support

If you find this project useful:

⭐ [Star the repo](https://github.com/philiprehberger/ts-pipe)

🐛 [Report issues](https://github.com/philiprehberger/ts-pipe/issues?q=is%3Aissue+is%3Aopen+label%3Abug)

💡 [Suggest features](https://github.com/philiprehberger/ts-pipe/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement)

❤️ [Sponsor development](https://github.com/sponsors/philiprehberger)

🌐 [All Open Source Projects](https://philiprehberger.com/open-source-packages)

💻 [GitHub Profile](https://github.com/philiprehberger)

🔗 [LinkedIn Profile](https://www.linkedin.com/in/philiprehberger)

## License

[MIT](LICENSE)
