import React, { useEffect, useMemo, useState } from "react";
import { Col, Row } from "reactstrap";
import SideNavigation from "./components/SideNavigation";
import Header from "./components/Header";
import "./Dashboard.css";
import DataTable from "./DataTable";
import TaskTable from "./components/TaskTable";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import ModalComponents from "./components/modalComponents";
import AddTaskList from "./components/AddTaskList";
import EditTaskList from "./components/EditTaskList";
//import axios from 'axios';

const TodoList = () => {
  const [data, setData] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginLeft: "10px",
      width: "98%",
      marginTop: "25px",
    },
    welcomeText: {
      fontWeight: 700,
      fontSize: "24px",
    },
  };

  const EditCAllFunction = () => {
    // alert("Edit clicked");
    setShowEditModal(true);
  };

  const hideEditModal = () => {
    setShowEditModal(false);
  };

  const DeleteCAllFunction = () => {
    setShowDeleteModal(true);
  };

  const hidedeleteModal = () => {
    setShowDeleteModal(false);
  };

  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Description",
        accessor: "body",
      },
      {
        Header: "TargetDate",
        accessor: "userId",
      },
      {
        Header: "Action",
        accessor: "show.status",
        Cell: (Action) => {
          const rowData = Action.row.original;
          // console.log("rowData", rowData);
          return (
            <div className="action-section">
              <FaEdit onClick={EditCAllFunction} style={{ color: "#0eb90e" }} />

              <FaTrash
                onClick={DeleteCAllFunction}
                style={{ color: "#cb4242" }}
              />
            </div>
          );
        },
      },
    ],
    []
  );

  // Using useEffect to call the API once mounted and set the data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log("res", response);
        // if(response.data.length == 10){
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const addFunctionCall = () => {
    setShowAddModal(true);
    // alert("clicked");
  };
  const hideAddModal = () => {
    setShowAddModal(false);
  };
  return (
    <>
      <div className="main-section">
        <Row>
          <Col>
            <Header></Header>
          </Col>
        </Row>
        <div style={styles.contentDiv}>
          <SideNavigation></SideNavigation>

          <div style={styles.contentMargin}>
            <div className="add-btn-section">
              <button className="add-btn" onClick={addFunctionCall}>
                + Add Tasks
              </button>
            </div>
            <TaskTable columns={columns} data={data} />
          </div>
        </div>
      </div>
      <div style={{ borderColor: "white" }}>
        <ModalComponents
          show={showAddModal}
          onHide={hideAddModal}
          title="Add Task"
          modalBody={
            <AddTaskList
              // skillCoinData={skillCoinData}
              hideAddModal={hideAddModal}
            />
          }
          className="modal-md"
        />

        <ModalComponents
          show={showEditModal}
          onHide={hideEditModal}
          title="Edit Task"
          modalBody={
            <EditTaskList
              // skillCoinData={skillCoinData}
              hideEditModal={hideEditModal}
            />
          }
          className="modal-md"
        />

        <ModalComponents
          show={showDeleteModal}
          onHide={hidedeleteModal}
          title="Delete Task"
          modalBody={
            <>
              <h5 style={{ textAlign: "center" }}>
                {" "}
                Are you sure want to delete
              </h5>
              <div className="add-task-button-section">
                <button
                  className="add-task-cancel-btn"
                  onClick={hidedeleteModal}
                >
                  Cancel
                </button>

                <button
                  className="add-task-submit-btn"
                  //  onClick={handleAllocateSkillCoins}
                >
                  Submit
                </button>
              </div>
            </>
          }
          className="modal-md"
        />
      </div>
    </>
  );
};

export default TodoList;
