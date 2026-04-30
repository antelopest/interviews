import { TodoList } from "@widgets/todo-list/ui/todo-list";
import { AddTodo } from "@features/add-todo";

const TodosPage = () => {
  return (
    <div className="page">
      <main className="container mx-auto">
        <h1 className="text-2xl
                      font-bold
                      tracking-tight
                      text-slate-900">
          Task management
        </h1>

        <AddTodo />

        <TodoList />
      </main>
    </div>
  )
}

export default TodosPage;