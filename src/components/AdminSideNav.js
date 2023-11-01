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
import {
  NavLink,
} from "reactstrap";

const AdminSideNav = () => {
  const [collapsed, setCollapsed] = useState(false);

  const styles = {
    sideBarHeight: {
      height: "100vh",
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
      color: "white",
      display: "flex",
      // justifyContent: "end",
    },
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

        <Menu iconShape="square">
          <MenuItem icon={<FaList />}>
            <NavLink href="/dashboard">Dashboard</NavLink>
          </MenuItem>
          <SubMenu title="Available User list" icon={<FaMastodon />}>
            <MenuItem>
              <NavLink href="/userlist">User task list</NavLink>
            </MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
    </div>
  );
};

export default AdminSideNav;
