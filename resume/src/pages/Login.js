import React, { useState, useEffect } from "react";
import { Button, Form, Input, message, Spin } from "antd";
import "../resources/authentication.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const onFinish = async (values) => {
    setLoading(true);
    console.log(values);
    try {
      const user = await axios.post("api/user/Login", values);
      message.success("Login successfull...");
      localStorage.setItem("Resume-app", JSON.stringify(user.data));
      setLoading(false);
      navigate("/home");
    } catch (error) {
      console.log(error.response);
      setLoading(false);
      message.error("Login failed!!!");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("Resume-app")) {
      navigate("/home");
    }
  });
  return (
    <>
      <div className="auth-parent">
        {loading && <Spin size="large" />}
        <Form layout="vertical" onFinish={onFinish}>
          <h1>Login</h1>
          <hr />
          <Form.Item name="username" label="Username:">
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password:">
            <Input type="password" />
          </Form.Item>
          <div className="d-flex align-items-center justify-content-between">
            <Link to="/register" style={{ color: "white" }}>
              Yet to Register??
              <br />
              Click here to Register...
            </Link>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </div>
          
        </Form>
        <div
            className="link "
          >
            <p>
              <b>
               <strong>Note : </strong> First go to the{" "}<br/>
                <Link to="/">
                  <strong style={{color:"white",textDecoration:"underline",fontWeight:"bolder"}}>info page </strong>
                </Link>
                 to Know the procedure to download your resume then Login.
              </b>
            </p>
          </div>
      </div>
      
    </>
  );
}

export default Login;
