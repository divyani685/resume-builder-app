import React from 'react'
import {Form, Input} from "antd"
const {TextArea}=Input
function Personalinfo() {
  return (
    <div style={{padding:"5px"}}>
      <div className="row">
        <div className="col-md-4">
            <Form.Item name="firstname" label="First Name:" rules={[{required:true}]}>
                <Input/>
            </Form.Item>
        </div>
        <div className="col-md-4">
            <Form.Item name="lastname" label="Last Name:" >
                <Input/>
            </Form.Item>
        </div>
        <div className="col-md-4">
            <Form.Item name="email" label="Email id:" rules={[{required:true}]}>
                <Input/>
            </Form.Item>
        </div>
        <div className="col-md-4">
            <Form.Item name="mobile" label="Mobile Number:" rules={[{required:true}]}>
                <Input/>
            </Form.Item>
        </div>
        <div className="col-md-4">
            <Form.Item name="protfolio" label="Portfolio:" >
                <Input/>
            </Form.Item>
        </div>
        <div className="col-md-12">
            <Form.Item name="carrier" label="Carrier Objective:"rules={[{required:true}]}>
                <TextArea/>
            </Form.Item>
        </div>
        <div className="col-md-12">
            <Form.Item name="address" label="Address:"rules={[{required:true}]}>
                <TextArea/>
            </Form.Item>
        </div>
      </div>
    </div>
  )
}

export default Personalinfo
