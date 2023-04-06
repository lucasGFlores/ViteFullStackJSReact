import React, {useState, useEffect} from 'react';
import AddTask from "./AddTask";
import Tasks from "./Tasks"
import "./ListaDeAfazeres.css"
import { v4 as uuidv4 } from "uuid";
import api from '../../api'
function ListaDeAfazeres()  {
  const [tasks, setTasks] = useState([
  ]);
useEffect(() =>{
getTaskInDB()
},[])
const getTaskInDB = async () => {
  api.get("/listaDeAfazeres").then(res => {
    setTasks(res.data)
  }).catch(err =>{console.log(err)})
}
  const enterTaskInDB = async (task) => {
    try{
      await api.post("/listaDeAfazeres",task)
    }catch (err){
      console.log(err)
    }
  }
     
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