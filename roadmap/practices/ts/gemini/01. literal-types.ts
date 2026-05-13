/*
Задача: 
Создайте тип TrafficLight,
который может принимать строго одно из трех значений:
'red', 'yellow' или 'green'. 
Напишите функцию changeLight, 
которая принимает текущий свет и возвращает следующий.
*/
type TrafficLight = 'red' | 'yellow' | 'green';

function changeLight(current: TrafficLight): TrafficLight {
  return current; // Ваша реализация
}