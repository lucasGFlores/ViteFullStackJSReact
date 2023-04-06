import React, { useState,useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import Button from "./Button";
import "./TaskDetails.css";
import api from '../../api'
// import { useHistory } from "react-router-dom";
const TaskDetails = () => {
 
  const {idDaTask} = useParams();
  const [task, setTask] = useState([]); 
  const [details, setDetails] = useState("");
  let textarea = document.querySelector("textarea") 

 const handleTeaxtAreaSize = () =>{
  textarea.style.height = "auto"
  textarea.style.height = `${textarea.scrollHeight}px`
 } 
useEffect(() => {
  api.get(`listaDeAfazeres/${idDaTask}`).then( res =>{
   setTask(res.data)
   setDetails(res.data.description)
  //  console.log(res.data.description)

  })
 
},[])

 

const handleSendDB = async () => {
  task['description'] = details
  console.log("entrou aqui para ser mandano no db")
  let res = await api.patch(`listaDeAfazeres/${idDaTask}`,task)
  console.log(res)
}  
  const handleInputChange = (e) => {
    setDetails(e.target.value);
  };

   
  return (
    <>
      <div className="task-details-container">
        <h2 style={{color:"white",paddingBottom:"30px",width:"300px"}}>{task.tittle}</h2>
        <textarea

          type="text"
          className="add-details-task"
          wrap="hard"
          onChange={handleInputChange}
          value={details}
          
          onKeyUp={(e) =>{
            textarea.style.height = "auto"
            textarea.style.height = `${e.target.scrollHeight}px`
    
          }}
          style={{height : `${details.length ? "38" :details.length }px`}}
        />
      </div>
      <div className="back-button-container">
        <Link to={"/listaDeAfazeres/"}><Button onClick={handleSendDB} >Voltar</Button></Link>
      </div>
    </>
  );
};

export default TaskDetails;
