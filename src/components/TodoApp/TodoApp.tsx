import AddTaskForm from "../AddTaskForm/AddTaskForm"
import FilterFooter from "../FilterFooter/FilterFooter"
import TaskList from "../TaskList/TaskList"
import "./TodoApp.scss"

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