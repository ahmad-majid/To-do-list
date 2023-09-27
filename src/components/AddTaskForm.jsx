import { useState } from "react";

const AddTaskForm = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    // random id
    const id = crypto.randomUUID();

    const newTask = {
      id,
      task,
      status: false,
    };

    onAddTask(newTask);

    setTask("");
  }
  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        placeholder="Add a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
    </form>
  );
};

export default AddTaskForm;
