import { Task } from "../model/task.model"
import "./TaskItem.scss"
import { FaTrashAlt } from "react-icons/fa"

interface TaskItemProps {
    task: Task,
    deleteTask: (id: string) => void,
    updateTask: (id: string) => void
}

const TaskItem = ({ task, deleteTask, updateTask }: TaskItemProps) => {
    return (
        <li className={`task-item ${task.status ? "" : "active"}`}>
            <input type="checkbox" checked={task.status} onChange={() => updateTask(task.id)} />
            <h2>{task.title}</h2>
            <button onClick={() => deleteTask(task.id)}><FaTrashAlt /></button>
        </li>
    )
}

export default TaskItem