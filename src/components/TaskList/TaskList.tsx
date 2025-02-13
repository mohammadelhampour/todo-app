import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.scss";

const TaskList = () => {
  return (
    <div className="task-list">
      <ul>
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </ul>
    </div>
  )
}

export default TaskList