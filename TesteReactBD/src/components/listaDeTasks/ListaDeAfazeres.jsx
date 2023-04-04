import React, {useState} from 'react';
import AddTask from "./AddTask";
import Tasks from "./Tasks"
import "./ListaDeAfazeres.css"
import { v4 as uuidv4 } from "uuid";
import api from '../../api'
function ListaDeAfazeres()  {

  const enterTaskInDB = async (task) => {
    try{
      await api.post("/listaDeAfazeres",task)
    }catch (err){
      console.log(err)
    }
  }
      const [tasks, setTasks] = useState([
          {
            id: "1",
            tittle: "explodir a união soviética",
            completed: false,
          },
          {
            id: "2",
            tittle: "estudar programation",
            completed: false,
          },
        ]);
        const handleTaskAddition = (taskTittle) => {
          if (taskTittle === "") {
            taskTittle = "MAS NUM TEM NADA";
          }
          const newTask = [
            ...tasks,
            {
              tittle: taskTittle,
              id: uuidv4(),
              completed: false,
            },
          ];
          enterTaskInDB(newTask)
          setTasks(newTask);
        };
        const handleTaskClickCompleted = (taskId) => {
          const newTasks = tasks.map((task) => {
            if (task.id === taskId) {
              return { ...task, completed: !task.completed };
            }
            return task;
          });
          setTasks(newTasks);
        };
        const handleTaskRemove = (taskId) => {
          const newTasks = tasks.filter((task) => {
            return taskId !== task.id;
          });
          setTasks(newTasks);
        };
      return ( 
    
        <>
     
          <div className="container">
          
                <>
                <h1>rogerio</h1>
                  <AddTask handleTaskAddition={handleTaskAddition}></AddTask>
                  <Tasks
                    tasks={tasks}
                    handleTaskClickCompleted={handleTaskClickCompleted}
                    handleTaskRemove={handleTaskRemove}
                  />
                </>
          </div>
        </>


      );
}
 
export default ListaDeAfazeres;