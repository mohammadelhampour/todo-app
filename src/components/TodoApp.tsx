import AddTaskForm from "./AddTaskForm"
import FilterFooter from "./FilterFooter"
import TaskList from "./TaskList"

const TodoApp = () => {
  return (
    <div className="todo-app">
      <AddTaskForm />
      <TaskList />
      <FilterFooter />
    </div>
  )
}

export default TodoApp