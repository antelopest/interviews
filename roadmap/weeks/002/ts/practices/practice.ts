
/* Типизировать функцию */
function sum(a: number, b: number): number {
  return a + b;
}

/* Типизировать callback */
type UserProcessor = (name: string) => void;

function processUser(fn: UserProcessor): void {
  fn("Semyon");
}

/* Функция логирования */
function log(message: string): void {
  console.log(message);
}

/* Функция, которая кидает ошибку */
function error(message: string): never {
  throw new Error(message);
}

function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`;
}

function greet(name?: string): string {
  return `Hello, ${name || "Guest"}`;
}

function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, number) => acc + number, 0);
}

const multiply = (a: number, b: number): number => {
  return a * b;
};

function process(callback: (s: string) => void): void {
  callback("done");
}

function logMessage(message: string): void {
  console.log(message);
}

function throwError(message: string): never {
  throw new Error(message);
}

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

type ID = string;

type User = {
  id: ID;
  name: string;
  email: string;
  age?: number;
};

type Admin = User & {
  role: string;
  permissions: string[];
};

type SumFn = (a: number, b: number) => number;

type Point = [number, number];

type Status = "loading" | "success" | "error";

type Nullable<T> = {
  [K in keyof T]: T[K] | null;
};