export function pipeline<A, B>(fn1: (a: A) => B): (a: A) => B;
export function pipeline<A, B, C>(fn1: (a: A) => B, fn2: (b: B) => C): (a: A) => C;
export function pipeline<A, B, C, D>(fn1: (a: A) => B, fn2: (b: B) => C, fn3: (c: C) => D): (a: A) => D;
export function pipeline<A, B, C, D, E>(fn1: (a: A) => B, fn2: (b: B) => C, fn3: (c: C) => D, fn4: (d: D) => E): (a: A) => E;
export function pipeline<A, B, C, D, E, F>(fn1: (a: A) => B, fn2: (b: B) => C, fn3: (c: C) => D, fn4: (d: D) => E, fn5: (e: E) => F): (a: A) => F;
export function pipeline(...fns: ((arg: unknown) => unknown)[]): (arg: unknown) => unknown {
  return (arg: unknown) => fns.reduce((acc, fn) => fn(acc), arg);
}
