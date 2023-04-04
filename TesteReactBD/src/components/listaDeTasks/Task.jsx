import React from "react";
import {Link} from 'react-router-dom';
import "./Button";
import Button from "./Button";
import "./Task.css";
import { CgClose, CgInfo } from "react-icons/cg";

const Task = ({ task, handleTaskClickCompleted, handleTaskRemove }) => {
  return (
    <>
      <div
        className="task-container"
        style={
          task.completed
            ? { borderLeft: "6px solid white", transition: "140ms ease-in-out" }
            : { borderLeft: "0px solid white", transition: "85ms ease-in-out" }
        }
      >
        <div
          className="task-tittle"
          onClick={() => handleTaskClickCompleted(task.id)}
        >
          {task.tittle}
        </div>
        <div className="boxButton">
          <Button className onClick={() => handleTaskRemove(task.id)}>
            <CgClose />
          </Button>

          <Link to={`/listaDeAfazeres/${task.id}`}><Button> <CgInfo /> </Button></Link> 
        </div>
      </div>
    </>
  );
};

export default Task;
