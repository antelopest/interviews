/* primitive literal union type */
type ID = string | number;

/* union for literals */
type Status = 'loading' | 'success' | 'error';

/* union in objects */
type User = {
  id: string | number;
  status: "active" | "blocked";
}

type Admin = {
  type: 'admin';
  role: string;
}

type Person = User | Admin;

/* Narrowing */

/* TS не дает доступ ко всем полям сразу, он должен понять с каким именно типом ты работаешь */

type ID = string | number;

function printId(id: ID) {
  // id: string | number
}

/* нужно сузить тип */

/* 1 typeof */

function printId(id: string | number) {
  if (typeof id === "string") {
    return id.toUpperCase(); // type string
  }

  return id.toFixed(2); // type number
}

/* 2 in проверяет есть ли ключ в object */
type User = {
  name: string;
}

type Admin = {
  name: string;
  permissions: string[];
}

type Person = User | Admin;

function printPerson(person: Person) {
  if ("pesmissions" in person) {
    return person.permissions.join(", ");
  }

  return person.name;
}

/* 3 instanceof - проверка классов */
class Dog {
  bark() { }
}

class Cat {
  meow() { }
}

type Animal = Dog | Cat;

function makeSound(animal: Animal) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

/* 4 discriminated union */

type User = {
  type: "user";
  name: string;
};

type Admin = {
  type: "admin";
  name: string;
  permissions: string[];
};

type Person = User | Admin;

function printPerson(person: Person) {
  if (person.type === "admin") {
    return person.permissions.join(", ");
  }

  return person.name;
}