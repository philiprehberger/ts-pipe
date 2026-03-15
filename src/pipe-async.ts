export function pipeAsync<A>(value: A): Promise<A>;
export function pipeAsync<A, B>(value: A, fn1: (a: A) => B | Promise<B>): Promise<B>;
export function pipeAsync<A, B, C>(value: A, fn1: (a: A) => B | Promise<B>, fn2: (b: B) => C | Promise<C>): Promise<C>;
export function pipeAsync<A, B, C, D>(value: A, fn1: (a: A) => B | Promise<B>, fn2: (b: B) => C | Promise<C>, fn3: (c: C) => D | Promise<D>): Promise<D>;
export function pipeAsync<A, B, C, D, E>(value: A, fn1: (a: A) => B | Promise<B>, fn2: (b: B) => C | Promise<C>, fn3: (c: C) => D | Promise<D>, fn4: (d: D) => E | Promise<E>): Promise<E>;
export function pipeAsync<A, B, C, D, E, F>(value: A, fn1: (a: A) => B | Promise<B>, fn2: (b: B) => C | Promise<C>, fn3: (c: C) => D | Promise<D>, fn4: (d: D) => E | Promise<E>, fn5: (e: E) => F | Promise<F>): Promise<F>;
export async function pipeAsync(value: unknown, ...fns: ((arg: unknown) => unknown | Promise<unknown>)[]): Promise<unknown> {
  let result = value;
  for (const fn of fns) {
    result = await fn(result);
  }
  return result;
}
