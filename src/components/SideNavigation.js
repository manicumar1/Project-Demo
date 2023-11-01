import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaGem, FaHeart, FaList, FaMastodon } from "react-icons/fa";
import {
  Menu,
  MenuItem,
  ProSidebar,
  SidebarHeader,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { NavLink } from "reactstrap";
import "./Header.css";

const SideNavigation = () => {
  const [collapsed, setCollapsed] = useState(false);
  
  const styles = {
    sideBarHeight: {
      height: "200%",

    },
    menuIcon: {
      float: "right",
      margin: "10px",
      cursor: "pointer",
    },
    customButton: {
      cursor: "pointer",
      padding: "10px",
      backgroundColor: "#2c2828",
      color: "#ffc107",
      display: "flex",
      // justifyContent: "end",
    }
  };


  const onClickMenuIcon = (e) => {
    // e.preventDefault(); // Prevent the link from navigating
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <div
        style={{
          ...styles.customButton,
          justifyContent: collapsed ? "center" : "end",
        }}
        onClick={onClickMenuIcon}
      >
        <AiOutlineMenu />
      </div>
      <ProSidebar
        style={{
          ...styles.sideBarHeight,
          width: collapsed ? "80px" : "250px",
        }}
        collapsed={collapsed}
      >
        <SidebarHeader>{/* Empty SidebarHeader */}</SidebarHeader>

        <Menu iconShape="square" style={{ color: "#ffc107" }}>
          <MenuItem icon={<FaList />} >
            <NavLink
              href="/dashboard"
            className="dash-label"
            >
              Dashboard
            </NavLink>
          </MenuItem>
          <SubMenu title="Todolist" icon={<FaMastodon />}>
            <MenuItem>
              <NavLink href="/todolist" className="dash-label">Todolist</NavLink>
            </MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </div>
  );
};

export default SideNavigation;
