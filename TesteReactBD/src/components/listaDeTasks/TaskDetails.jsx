import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "./Button";
import "./TaskDetails.css";
// import { useHistory } from "react-router-dom";
const TaskDetails = () => {
  
  const {idDaTask} = useParams();
  // const history = useHistory();
  // const handleBackButtonClick = () => {
  //   history.goBack();
  // };

  // const TaskModel = require("../models/task.model")
  // const app = express();
  // app.use(express.json());
  // const port = 8080;

  const [details, setDetails] = useState([""]);
  const handleInputChange = (e) => {
    setDetails(e.target.value);
  };


  // textArea.addEventListener("input",adjust);
  // function adjust() {
  //   textArea.style.height = "auto";
  //   textArea.style.height = this.scrollHeight + "px";
  // }
  let textarea = document.querySelector("textarea") 
  return (
    <>
      <div className="task-details-container">
        <h2 style={{color:"white",paddingBottom:"30px",width:"300px"}}>{idDaTask}</h2>
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
        />
      </div>
      <div className="back-button-container">
        <Button >Voltar</Button>
      </div>
    </>
  );
};

export default TaskDetails;
