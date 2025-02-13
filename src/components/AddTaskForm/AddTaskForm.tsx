import "./AddTaskForm.scss";

const AddTaskForm = () => {
  return (
    <div className="task-form">
      <form>
        <input type="text" placeholder="What needs to be done?" />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddTaskForm