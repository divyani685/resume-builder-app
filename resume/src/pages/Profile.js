import React ,{useState} from "react";

import DefaultLayout from "../components/DefaultLayout";
import { Button, Form, Tabs ,message,Spin} from "antd";
import Personalinfo from "../components/Personalinfo";
import Skills from "../components/Skills";
import Project from "../components/Project";
import axios from "axios"
const { TabPane } = Tabs;
export default function Profile() {
  const [loading,setLoading]=useState(false)
  const user=JSON.parse(localStorage.getItem("Resume-app"))
  const onFinish = async(values) => {
    setLoading(true)
    console.log(values);
    try {
       
     const result= await axios.post("/api/user/update", 
      {...values,_id:user._id});
      localStorage.setItem("Resume-app",JSON.stringify(result.data));
      setLoading(false)
      message.success("Profile updated successfull...");
    } catch (error) {
      // console.log(error.response);
      setLoading(false)
      message.error("Profile updation failed!!!");
    }
  };
  return (
    <DefaultLayout>
      {loading && (<Spin size="large"/>)}
      <div className="update-profile">
        <h4 style={{padding:"2px",marginLeft:"5px",marginTop:"10px" }}><b>Update Profile</b></h4>
        <hr/>
        <Form layout="vertical" onFinish={onFinish} initialValues={user}>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Personal info" key="1">
              <Personalinfo />
            </TabPane>
            <TabPane tab="Skills and Education" key="2">
              <Skills/>
            </TabPane>
            <TabPane tab="Experience/Projects" key="3">
              <Project/>
            </TabPane>
          </Tabs>
          <Button htmlType="submit" id="q123">
            Update
          </Button>
        </Form>
      </div>
    </DefaultLayout>
  );
}
