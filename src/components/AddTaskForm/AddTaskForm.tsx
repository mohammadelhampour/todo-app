import { ChangeEvent, useState } from "react";
import "./AddTaskForm.scss";

interface AddTaskFormProps {
  addTask: (taskTitle: string) => void
}
const AddTaskForm = ({ addTask }: AddTaskFormProps) => {
  const [taskTitle, setTaskTitle] = useState<string>("")

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    setTaskTitle(event.target.value)
  }

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!taskTitle) return;
    addTask(taskTitle)
    setTaskTitle("")
  }

  return (
    <div className="task-form">
      <form onSubmit={handleOnSubmit}>
        <input type="text" placeholder="What needs to be done?" value={taskTitle} name="title" onChange={handleOnChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddTaskForm