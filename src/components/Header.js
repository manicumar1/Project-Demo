import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavItem,
  NavLink,
} from "reactstrap";
import "./Header.css";

const Header = () => {
  const [showUserDetails, setShowUserDetails] = useState(false);

  const userCall = () => {
  
    
    setShowUserDetails(true);
  };

  let userRole = ""; 

  const role = localStorage.getItem("roles");
  
  if (role === "auth_user") {
    userRole = "user"; 
  } else if (role === "auth_admin") {
    userRole = "admin"; 
  }
  
  return (
    <div>
      <Navbar color="warning" light expand="md">
        <NavbarBrand href="/" style={{color:"white",fontWeight:"700"}}>To Do List</NavbarBrand>
        <Nav className="mr-auto" navbar>
        </Nav>
        <NavbarText>
          <div onMouseOver={userCall} className="user-icon" data-role={userRole}>
            <AiOutlineUser></AiOutlineUser>
          </div>
        </NavbarText>
      </Navbar>
   
    </div>
  );
};

export default Header;
