/*
Исключение свойств (Omit)

Задача:
У вас есть интерфейс User. 
Создайте новый тип UserWithoutId, используя утилиту Omit, 
который содержит все свойства User, кроме id.
*/

interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

// Создайте тип UserWithoutId