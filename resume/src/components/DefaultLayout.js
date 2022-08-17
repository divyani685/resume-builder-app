import { Button, Dropdown, Menu } from "antd";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./../resources/defaultLayout.css";
import {UserOutlined } from "@ant-design/icons";
function DefaultLayout(props) {
  const user = JSON.parse(localStorage.getItem("Resume-app"));
  const navigate = useNavigate();
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="/home">Home</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem("Resume-app");
          navigate("/login");
        }}
      >
        <span>LogOut</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className="layout">
        <div className="header" >
          <h2 style={{color:"white", cursor:"pointer"}} onClick={()=>{navigate("/home")}}>div-Resume</h2>
          <Dropdown overlay={menu} placement="bottomLeft">
            <Button icon={<UserOutlined/>}>{user.username}</Button>
          </Dropdown>
        </div>
        <div className="content" style={{overflow:"scroll"}}>{props.children}</div>
      </div>
    </>
  );
}

export default DefaultLayout;
