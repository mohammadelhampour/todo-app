import { useEffect, useState } from "react"
import AddTaskForm from "../AddTaskForm/AddTaskForm"
import FilterFooter from "../FilterFooter/FilterFooter"
import TaskList from "../TaskList/TaskList"
import "./TodoApp.scss"
import { Task } from "../model/task.model"
import { v4 as uuidv4 } from "uuid"
import { FilterType } from "../model/filter-type.enum"

const setItem = (key: string, value: string): void => localStorage.setItem(key, value)

const intialTasks: Task[] = JSON.parse(localStorage.getItem("tasks") || "{}") || []

const TodoApp = () => {
  const [tasks, setTasks] = useState<Task[]>(intialTasks)
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([])
  const [filter, setFilter] = useState<FilterType>(FilterType.ALL)
  
  useEffect(() => {
    switch (filter) {
      case FilterType.ALL:
        setFilteredTasks(tasks)
        break;

      case FilterType.ACTIVE:
        setFilteredTasks(tasks.filter((task: Task) => !task.status))
        break;

      case FilterType.COMPLETED:
        setFilteredTasks(tasks.filter((task: Task) => task.status))
        break;

      default:
        break;
    }
  }, [filter, tasks])

  const addTask = (taskTitle: string): void => {
    const newTasks = [...tasks, { id: uuidv4(), status: false, title: taskTitle }]
    setTasks(newTasks)
    setItem("tasks", JSON.stringify(newTasks))
  }

  const deleteTask = (id: string): void => {
    const updatedTasks = tasks.filter((task: Task) => task.id !== id)
    setTasks(updatedTasks)
    setItem("tasks", JSON.stringify(updatedTasks))
  }

  const updateTask = (id: string): void => {
    const updatedTasks = tasks.map((task: Task) => task.id === id ? { ...task, status: !task.status } : task)
    setTasks(updatedTasks)
    setItem("tasks", JSON.stringify(updatedTasks))
  }

  return (
    <div className="todo-app">
      <AddTaskForm addTask={addTask} />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} updateTask={updateTask} />
      <FilterFooter tasks={filteredTasks} setFilter={setFilter} filterType={filter} />
    </div>
  )
}

export default TodoApp