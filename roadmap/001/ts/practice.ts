/*
Типизируй:

* Пользователя
* Массив строк
* Статус ("loaging", "success", "error)
* Функцию sum
* Переменную unknown с проверкой через typeof
*/

type Job = {
  id: number;
  title: string;
}

type User = {
  username: string;
  firstName: string;
  lastName: string;
  age: number;
  job: Job[];
  role: "admin" | "user";
  status: "active" | "inactive";
}

const user: User = {
  username: "antelope",
  firstName: "Semyon",
  lastName: "Belenko",
  age: 33,
  job: [
    { id: 1, title: "Frontend Engineer" }
  ],
  role: "admin",
  status: "active"
}

const types: string[] = ['union types', 'literal types'];
const bundler: Array<string> = ['webpack'];

type Status = "loading" | "success" | "error";
const currentStatus: Status = "loading";

function sum(a: number, b: number): number {
  return a + b;
}

const unknownStatus: unknown = "loading";

if (typeof unknownStatus === 'string') {
  unknownStatus.toUpperCase();
}