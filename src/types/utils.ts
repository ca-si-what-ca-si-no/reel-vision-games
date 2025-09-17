/**
 * Utility types for better TypeScript type safety and developer experience
 */

/**
 * Make all properties of T optional recursively
 */
export type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

/**
 * Make all properties of T required recursively
 */
export type DeepRequired<T> = T extends object
  ? {
      [P in keyof T]-?: DeepRequired<T[P]>;
    }
  : T;

/**
 * Make all properties of T readonly recursively
 */
export type DeepReadonly<T> = T extends object
  ? {
      readonly [P in keyof T]: DeepReadonly<T[P]>;
    }
  : T;

/**
 * Extract the type of array elements
 */
export type ArrayElement<ArrayType extends readonly unknown[]> =
  ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

/**
 * Make specified keys of T optional
 */
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Make specified keys of T required
 */
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

/**
 * Exclude null and undefined from T
 */
export type NonNullable<T> = T extends null | undefined ? never : T;

/**
 * Extract keys from T that have values of type V
 */
export type KeysOfType<T, V> = {
  [K in keyof T]: T[K] extends V ? K : never;
}[keyof T];

/**
 * Create a type with a single property K of type T
 */
export type SingleProperty<K extends string, T> = {
  [P in K]: T;
};

/**
 * Merge two types, with properties from B overwriting those in A
 */
export type Merge<A, B> = Omit<A, keyof B> & B;

/**
 * Create a discriminated union type
 */
export type DiscriminatedUnion<
  T extends Record<string, unknown>,
  K extends keyof T
> = T[K] extends string | number | boolean
  ? {
      [V in T[K] as string]: T & { [P in K]: V };
    }[string]
  : never;

/**
 * Await the type of a Promise
 */
export type Awaited<T> = T extends Promise<infer U> ? U : T;

/**
 * Get the return type of an async function
 */
export type AsyncReturnType<T extends (...args: any[]) => Promise<any>> =
  T extends (...args: any[]) => Promise<infer R> ? R : never;

/**
 * Prettify complex types for better IDE display
 */
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

/**
 * Create a type-safe builder pattern
 */
export type Builder<T> = {
  [K in keyof T as `set${Capitalize<string & K>}`]: (value: T[K]) => Builder<T>;
} & {
  build: () => T;
};