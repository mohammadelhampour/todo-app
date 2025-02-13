import "./TaskItem.scss"
import {FaTrashAlt} from "react-icons/fa"

const TaskItem = () => {
    return (
        <li className="task-item active">
            <input type="checkbox" />
            <h2>Build This App</h2>
            <button><FaTrashAlt /></button>
        </li>
    )
}

export default TaskItem