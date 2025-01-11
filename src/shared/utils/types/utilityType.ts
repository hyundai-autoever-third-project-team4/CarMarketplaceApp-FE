export type StyleProps<T> = {
  [K in keyof T as `$${string & K}`]: T[K];
};
