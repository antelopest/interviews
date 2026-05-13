/*
Безопасное приведение типов (Type Guards)

Задача: 
Напишите функцию-защитник (Type Guard) isString, 
которая проверяет, является ли переданное значение строкой, 
чтобы внутри блока if TypeScript точно знал тип переменной.
*/

function isString(value: unknown): value is string {
  // Ваша реализация
}

function process(input: unknown) {
  if (isString(input)) {
    console.log(input.toUpperCase()); // Не должно быть ошибки компиляции
  }
}