import React, { useState } from 'react';

const Controller = ({ tasks, onClearComplete }) => {
  const [filter, setFilter] = useState('All');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Active') {
      return !task.status;
    } else if (filter === 'Completed') {
      return task.status;
    }
    return true; // 'All' filter or no filter
  });

  const taskLeft = filteredTasks.filter((task) => !task.status).length;

  const handleFilterClick = (selectedFilter) => {
    setFilter(selectedFilter);
  };

  return (
    <div>
      <ul className="tasklist controller">
        <li>{taskLeft} tasks left</li>
        <li>
          <ul className="control">
            <li
              className={`link ${filter === 'All' ? 'active' : ''}`}
              onClick={() => handleFilterClick('All')}
            >
              All
            </li>
            <li
              className={`link ${filter === 'Active' ? 'active' : ''}`}
              onClick={() => handleFilterClick('Active')}
            >
              Active
            </li>
            <li
              className={`link ${filter === 'Completed' ? 'active' : ''}`}
              onClick={() => handleFilterClick('Completed')}
            >
              Completed
            </li>
          </ul>
        </li>
        <li onClick={onClearComplete} className="link">
          Clear Completed
        </li>
      </ul>
    </div>
  );
};

export default Controller;
