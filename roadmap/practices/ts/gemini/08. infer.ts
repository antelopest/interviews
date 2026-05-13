/* 

Условные типы и выведение (Infer)
 
Задача: 
Создайте условный тип ReturnTypeOfFunction<T>, 
который принимает тип функции и возвращает тип значения, которое она возвращает. 
Если T не функция, верните never. Использовать встроенный ReturnType нельзя.
*/

type ReturnTypeOfFunction<T> = T extends (...args: any[]) => infer R ? R : never;

// Проверка:
type Test = ReturnTypeOfFunction<() => string>; // Ожидается: string