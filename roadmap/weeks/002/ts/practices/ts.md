# TS

## Function typing

* Типизация входных и выходных параметров
* Optional parameters
* Default parameters
* Rest Paremeters
* Function Expression
* Callback typing
* Void
* Never

```ts
function sum(a: number, b: number): number {}

function greet(name?: string): string {}

function multiply(a: number, b = 2): number {}

function sumAll(...numbers: number[]): number {}

const fn = (value: string): void => {};

type Callback = (id: string) => void;

function fail(message: string): never {
  throw new Error(message);
}
```

## Interfaces

* interface - это способ описывать форму объекта (это контракт)

Описывает какие поля есть, какие типы, какие методы есть у объекта.

* базовый interface
* readonly
* optional
* methods
* extending interfaces
* interface for functions
* interface merging отличие от type

```ts
/* Базовый interface */
interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Semyon",
  age: 33,
};

/* readonly parameters */
interface UserReadonly {
  readonly id: number;
  name: string;
}

const userReadonly: UserReadonly = {
  id: 1,
  name: "Semyon",
};

user.name = "Simon"; // OK
user.id = 2; // ошибка

/* optional parameters */
interface UserOptional {
  name: string;
  age?: number;
}

const userOptional: UserOptional = {
  name: "Semyon",
};

/* methods in interface */
interface UserMethods {
  name: string;
  greet(): string;
}

const userMethods: UserMethods = {
  name: "Semyon",
  greet() {
    return `Hello, ${this.name}`;
  },
};

/* extending interface */
interface User {
  name: string;
  age: number;
}

interface Admin extends User {
  role: string;
}

const admin: Admin = {
  name: "Semyon",
  age: 33,
  role: "superadmin",
};

/* interface for functions */
interface SumFn {
  (a: number, b: number): number;
}

const sum: SumFn = (a, b) => a + b;

/* interface merging - declaration merging */
interface User {
  name: string;
}

interface User {
  age: number;
}

interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "Semyon",
  age: 33,
};
```

Отличие interface от type

Оба описывают типы, но есть разница.

interface лучше подходит:

* объектов
* классов
* наследования (extends)
* публичных контрактов
* API моделей

type гибче, подходит для:

* union
* intersection
* primitivies
* tuples
* utility compositions

```ts

type status = "loading" | "success" | "error"; // union literal
type ID = string | number; // union type
type Point = [number, number]; // tuples

// Intersection &
type User = { name: string; }
type Admin = { role: string; }
type AdminUser = User & Admin;

type User = { name: string; age: number; }
type PartialUser = Partial<User>; // all fields optional
type RequiredUser = Required<User>; // all fields required
type ReadonlyUser = Readonly<User>; // all fields readonly
type UserPreview = Pick<User, "id" | "name">; // get fields: id, name
type UserSafe = Omit<User, "email">; // get all fields, expect email
```

## Type aliases

Type - это alias (псевдоним) для типа.

Он не создает новый тип на уровне runtime.

Он просто дает удобное имя для существующего type-shape.

Главная идея: type нужен там, где interface уже неудобен или не может быть.

```ts
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
```

Где type сильнее interface:

type лучше:

* primitive
* unions
* tuples
* mapped types
* utility compositions
* function aliases

interface:

* object contract
* extending
* declaration merging
* classes
* public API share


## Union / Intersection
