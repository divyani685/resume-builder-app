import React, { useState,useEffect } from "react";
import { Button, Form, Input, message, Spin } from "antd";
import "../resources/authentication.css";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
function Register() {
  const [loading,setLoading]=useState(false)
  const navigate=useNavigate()
  const onFinish = async(values) => {
    setLoading(true)
    console.log(values);
    try {
      await axios.post("/api/user/register", values);
      setLoading(false)
      message.success("Registration successfull...");
      navigate("/login")
    } catch (error) {
      // console.log(error.response);
      setLoading(false)
      message.error("Registration failed!!!");
    }
  };
  useEffect(()=>{
    if(localStorage.getItem("Resume-app")){
      navigate("/home")
    }
  })
  return (
    <>
    
    <div className="auth-parent">
      {loading && (<Spin size="large"/>)}
      <Form layout="vertical" onFinish={onFinish}>
        <h1>Register</h1>
        <hr />
        <Form.Item name="username" label="Username:">
          <Input />
        </Form.Item>
        <Form.Item name="password" label="Password:">
          <Input type="password" />
        </Form.Item>
        <Form.Item name="cpassword" label="Confirm Password:">
          <Input type="password" />
        </Form.Item>
        <div className="d-flex align-items-center justify-content-between">
          <Link to="/login" style={{color:"white"}}>Existing User??<br/>Click here to Login...</Link>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </div>
      </Form>
    </div>
    </>
  );
}

export default Register;
