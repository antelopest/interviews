// alias for primitives
type ID = string;
type Age = number;
type IsAdmin = boolean;

// alias for objects
type User = {
  id: string;
  name: string;
  email: string;
  age?: number;
};

const user: User = {
  id: "1",
  name: "Semyon",
  email: "test@mail.com",
};

// alias for function
type SumFn = (a: number, b: number) => number;

// alias for union literal type
type Status = "loading" | "success" | "error";

// alias for union type
type ID = string | number;
const userId: ID = "123";
const orderId: ID = 999;
type Nullable<T> = T | null;

// alias for mapped structures
type User = {
  name: string;
  age: number;
};

type NullableUser = {
  [K in keyof User]: User[K] | null;
};

{
  name: string | null;
  age: number | null;
}

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};

type User = {
  name: string;
  age: number;
};

type NullableUser = Nullable<User>;

type ReadonlyUser<T> = {
  readonly [K in keyof T]: T[K];
};