import { Task } from "../model/task.model";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.scss";

interface TaskListProps {
  tasks: Task[],
  deleteTask: (id: string) => void,
  updateTask: (id: string) => void
}

const TaskList = ({ tasks, deleteTask, updateTask }: TaskListProps) => {
  return (
    <div className="task-list">
      {tasks.length ? <ul>
        {tasks.map((task: Task) => (
          <TaskItem key={task.id} task={task} deleteTask={deleteTask} updateTask={updateTask} />
        ))}
      </ul> : (<div style={{textAlign: "center"}}>You dont have any task!</div>
      )}
    </div>
  )
}

export default TaskList