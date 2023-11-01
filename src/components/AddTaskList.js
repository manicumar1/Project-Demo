import React, { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import axios from 'axios';

const AddTaskList = (props) => {
    const {hideAddModal} = props

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.post(
              "https://jsonplaceholder.typicode.com/todos",{
                
              }
            );
            console.log("res", response);
           
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);
  return (
    <div>
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputName4" className="form-label">
            Title
          </label>

          <input
            type="text"
            className="form-control"
          
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">TargetDate</label>

          <input
            type="Date"
            className="form-control"
            max={new Date().toISOString().split("T")[0]}
           
          />
        </div>

        <div className="col-md-12" style={{ marginTop: "10px" }}>
          <label className="form-label">Description</label>

          <input
            type="text"
            className="form-control"
         
          />
        </div>

        <div className="add-task-button-section">
          <button
            className="add-task-cancel-btn"
              onClick={hideAddModal}
          >
            Cancel
          </button>

          <button
            className="add-task-submit-btn"
             onClick={alert("added")}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskList;
