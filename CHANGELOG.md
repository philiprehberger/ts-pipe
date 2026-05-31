# Changelog

## 0.2.0

- Add `tap(fn)` utility for inspection / side-effect steps in pipelines (`pipe(data, parse, tap(log), transform)`)
- CI: publish workflow now runs `npm test` before publishing
- README: add package card image

## 0.1.5

- Standardize README to 3-badge format with emoji Support section
- Update CI actions to v5 for Node.js 24 compatibility
- Add GitHub issue templates, dependabot config, and PR template

## 0.1.4

- Republish under new npm package name

## 0.1.3

- Add Development section to README
- Fix CI badge to reference publish.yml
- Add test script to package.json

## 0.1.0 (2026-03-15)

- Initial release
- `pipe()` data-first pipeline with full type inference
- `compose()` right-to-left function composition
- `pipeline()` lazy left-to-right composition
- `pipeAsync()` for mixed sync/async pipelines
