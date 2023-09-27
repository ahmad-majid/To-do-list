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
        <footer
        className="attribution"
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <p style={{ fontSize: "14px", wordSpacing: "6px" }}>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io/profile/ahmad-majid"
            target="noopener"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.linkedin.com/in/ahmad-majid-957ba9200"
            target="noopener"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Ahmad Majid
          </a>
        </p>
      </footer>
      </div>
    </>
  );
}

export default App;
