/*
Преобразование ключей (Template Literal Types)

Задача:

Дан интерфейс с обычными ключами.
Создайте тип-утилиту, 
который автоматически добавляет префикс get и 
переводит первую букву свойства в верхний регистр (CamelCase)
для всех ключей объекта.
*/

type AddGetterPrefix<T> = {
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K]
};

// Проверка:
interface Person { name: string; age: number; }
type PersonGetters = AddGetterPrefix<Person>; 
// Ожидается объект с методами: getName(): string; getAge(): number;