import React, { useEffect } from "react";
import { Col, Row } from "reactstrap";
import SideNavigation from "./components/SideNavigation";
import Header from "./components/Header";
import "./Dashboard.css";
import AdminSideNav from "./components/AdminSideNav";
//import axios from 'axios';

const Dashboard = () => {

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


  const UserName = localStorage.getItem("name");
  const roles = localStorage.getItem("roles")
  return (
    <>
      <div className="main-section">
        <Row>
          <Col>
            <Header></Header>
          </Col>
        </Row>
        <div style={styles.contentDiv}>
      {roles === "auth_user" ? (
       <SideNavigation></SideNavigation> 
      ) : roles === "auth_admin" ? (
        <AdminSideNav />
      
      ) : (
        <div>Loading...</div>
      )}
          <div style={styles.contentMargin}>
            <p>
              Welcome, <span style={styles.welcomeText}>{UserName}</span>
            </p>
            <img
              src="https://www.proofhub.com/articles/wp-content/uploads/2020/09/best-to-do-list-apps-for-better-task-management.jpg"
              height="70%"
              width="99%"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
