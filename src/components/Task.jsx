import cross from "../assets/icon-cross.svg";

const Task = ({ task, onCompleteTask, onDeleteTask }) => {
  return (
    <li className="task">
      <span onClick={() => onCompleteTask(task.id)}>
        <p className={task.status ? "complete" : ""}>
          <span className={`radio ${task.status ? "done" : ""}`}></span>
          {task.task}
        </p>
      </span>
      <span
        className={`delete ${task.status ? "hide" : ""}`}
        onClick={() => onDeleteTask(task.id)}
      >
        <img src={cross} alt="Delete" className="link" />
      </span>
    </li>
  );
};

export default Task;
