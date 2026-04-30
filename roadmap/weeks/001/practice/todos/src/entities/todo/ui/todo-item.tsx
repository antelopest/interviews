import { type Todo } from '@entities/todo';

type TodoItemProps = {
  todo: Todo,
  onToggle: (id: string) => void,
  onDelete: (id: string) => void
}

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <li className="flex mt-3 mb-3 items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-white px-4 py-3 shadow-sm">

      <label className="flex flex-1 items-center gap-3">
        <input className="h-4 w-4 rounded border-zinc-300 text-black focus:ring-2 focus:ring-zinc-400" type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
        <span className="text-sm font-medium text-zinc-800">{todo.text}</span>
      </label>


      <button className="cursor-pointer rounded-lg px-3 py-1.5 text-sm font-medium text-red-500 transition-colors hover:bg-red-50 hover:text-red-600" type="button" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
}

export default TodoItem;