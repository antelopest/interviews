import { create } from 'zustand';

import type { Todo } from './todo.type';

type TodoStore = {
  todos: Todo[];

  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

export const useTodoStore = create<TodoStore>((set) => (
  {
    todos: [],

    addTodo: (text) => {
      set((state) => (
        {
          todos: [
            ...state.todos,
            {
              id: crypto.randomUUID(),
              text,
              completed: false,
            }
          ]
        })
      )
    },

    toggleTodo: (id: string) => {
      set((state) => ({
        todos: state.todos.map((todo) => {
          return todo.id === id ? { ...todo, completed: !todo.completed } : todo
        })
      }))
    },

    deleteTodo: (id: string) => {
      set((state) => ({
        todos: state.todos.filter((todo) => todo.id !== id)
      }));
    },
  }
));