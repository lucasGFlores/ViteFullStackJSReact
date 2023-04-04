import React from "react";
import Task from "./Task";

const Tasks = ({ tasks,handleTaskClickCompleted,handleTaskRemove }) => {
 
  return (
    <>
      {tasks.map((task) => (
        <Task task={task} handleTaskClickCompleted={handleTaskClickCompleted} handleTaskRemove={handleTaskRemove} />
      ))}
    </>
  );
};
export default Tasks;
