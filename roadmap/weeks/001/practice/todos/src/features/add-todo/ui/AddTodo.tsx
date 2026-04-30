import { useState } from "react";

import { useTodoStore } from "@entities/todo";

const AddTodo = () => {
  const [text, setText] = useState<string>('');

  const addTodo = useTodoStore((state) => state.addTodo);

  const isSubmitDisabled = text.trim().length === 0;

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  }

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trim = text.trim();

    if (trim.length > 0) {
      addTodo(trim);
      setText("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="pt-2 pb-2">
      <label htmlFor="todo" className="block text-md font-medium">
        New task:
        <input
          className="block
                    mt-2
                    mb-2
                    rounded-lg
                    border
                    border-slate-300
                    bg-white
                    px-4
                    py-2
                    text-sm
                    text-slate-900
                    placeholder:text-slate-400
                    outline-none
                    transition
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-200"
          id="todo"
          type="text"
          value={text}
          placeholder="Your task"
          onChange={onChangeText}
        ></input>
      </label>

      <button type="submit"
        disabled={isSubmitDisabled}
        className="
                inline-flex
                cursor-pointer
                items-center
                justify-center
                rounded-lg
                bg-blue-600
                px-4
                py-2
                text-sm
                font-medium
                text-white
                transition
                hover:bg-blue-700
                focus:outline-none
                focus:ring-2
                focus:ring-blue-200
                disabled:cursor-not-allowed
                disabled:opacity-50
              ">
        Add task
      </button>
    </form>
  )
}

export default AddTodo;