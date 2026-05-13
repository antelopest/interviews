/*
 Задача:
 Опишите тип для объекта UserPermissions, 
 где ключами являются строки (названия модулей, например, 'admin', 'billing'), 
 а значениями — логические флаги true/false.
 
 Используйте встроенную утилиту Record.
 */


const permissions: UserPermissions = {
  admin: true,
  billing: false
}