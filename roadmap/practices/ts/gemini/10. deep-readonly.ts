/*
Глубокая заморозка (DeepReadonly)

Задача:

Встроенный Readonly<T> делает свойства объекта доступными
только для чтения только на первом уровне вложенности.

Напишите рекурсивный тип DeepReadonly<T>, который сделает
readonly абсолютно все вложенные свойства и объекты.
*/

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};