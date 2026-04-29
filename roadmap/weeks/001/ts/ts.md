# TS

## Why TS

TypeScript - это надстройка над JavaScript, которая добавляет статическую типизацию.

JS сам по себе динамический:

```ts

let value = "hello";

value = 42;
value = true;
```

Для JS это нормально.
Для больших приложений - это источник багов.

Что дает TS:

* ловит ошибки до запуска
* делает код предсказуемым
* улучшает autocomplete
* помогает рефакторить
* делает код безопаснее в больших проектах

```js
function add(a, b) {
  return a + b;
}

add(2, "3"); // "23"
```

```ts
function add(a: number, b: number): number {
  return a + b;  
}
add(2, "3"); // type error
```

TS ловит проблему сразу.

## Basic Types

Базовые типы: string, number, boolean, null, undefined, array, tuple, object, union, literal types.

### string

```ts
const name: string = "Semyon";
```

### number

```ts
const age: number = 33;
```

boolean

```ts
const isAdmin: boolean = false;
```

### null / undefined

```ts
const value: null = null;
const data: undefined = undefined;
```

### array

```ts
const numbers: number[] = [1,2,3];
const names: string[] = ["a", "b", "c", "d"];
```

### tuple

Фиксированный массив

```ts
const user: [string, number] = ["Semyon", 33];
```

### object

```ts
const person: { name: string; age: number } = {
  name: "Semyon", age: 33
};
```

### union

Переменная может быть одним из нескольких типов.

```ts
let id: string | number = 1;
id = "abc";
```

### literal types

Конкретные значения:

```ts
let status = "success" | "error" | "loading";
```

## Type inference

TS умеет сам выводить тип.

Это называется type inference. Нет необходимости писать тип везде вручную.

```ts
const name = "Semyon";

// TS сам понимает, что name: string
```

## any

any отключает TypeScript.

```ts
let value: any = "hello";
value = 42;
value = "string";
value = true;
value.toUpperCase(); // без ошибок
```

Проблема: TS больше ничего не проверяет.

any = "делай что хочешь".

Опасный тип.

## unknown

unknown - безопасная версия any.

```ts
let value: unknown = "hello";

// нельзя использовать значение, пока не проверить тип
value.toUpperCase(); // error

if (typeof value === "string") {
  value.toUpperCase();
}
// это делает код безопасным.
```

## never

never - тип, который никогда не возвращает значение.

Обычно:

* Функция кидает ошибку
* Бесконечный цикл

```ts
function throwError(message: string): never {
  throw new Error(message);
}

// Эта функция ничего не вернет.

function infinite(): never {
  while(true) {}
}
```

## Practice

Типизируй:

* Пользователя
* Массив строк
* Статус ("loaging", "success", "error)
* Функцию sum
* Переменную unknown с проверкой через typeof
