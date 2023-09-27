import { useState } from "react";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import initialData from "./data";
import Controller from "./components/Controller";

function App() {
  const [tasks, setTasks] = useState(initialData);

  function handleClearComplete() {
    setTasks(tasks.filter((task) => !task.status));
  }

  function handleAddTask(newTask) {
    setTasks((tasks) => [...tasks, newTask]);
  }

  function handleCompleteTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  }

  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <>
      <div className="app">
        <div className="content">
          <Header />
          <AddTaskForm onAddTask={handleAddTask} />
          <TaskList
            tasks={tasks}
            onCompleteTask={handleCompleteTask}
            onDeleteTask={handleDeleteTask}
          />
          <Controller tasks={tasks} onClearComplete={handleClearComplete} />
        </div>
      </div>
    </>
  );
}

export default App;
