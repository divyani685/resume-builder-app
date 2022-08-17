import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input} from "antd";

function Skills() {
  return (
    <div style={{ padding: "5px" }}>
      <Form.List name="education">
        {(fields, { add, remove }) => (
          <>
          <h6><b>Education </b></h6>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-3">
                  <Form.Item
                    {...restField}
                    name={[name, "qualification"]}
                    label={["Qualification"]}
                    rules={[{ required: true, message: "Missing qualification" }]}
                  >
                    <Input />
                  </Form.Item>
                  </div>
                  <div className="col-md-2">
                  <Form.Item
                    {...restField}
                    name={[name, "percentage"]}
                    label={["Percentage"]}
                    rules={[{ required: true, message: "Missing percentage" }]}
                  >
                    <Input  />
                  </Form.Item>
                  </div>
                  <div className="col-md-3">
                  <Form.Item
                    {...restField}
                    name={[name, "institution"]}
                    label={["Institute Name"]}
                    rules={[{ required: true, message: "Missing Institution name" }]}
                  >
                    <Input  />
                  </Form.Item>
                  </div>
                  <div className="col-md-2">
                  <Form.Item
                    {...restField}
                    name={[name, "range"]}
                    label={["Year Range"]}
                    rules={[{ required: true, message: "Missing Year range" }]}
                  >
                    <Input  />
                  </Form.Item>
                  </div>
                  <div className="col-md-2">
                  <MinusCircleOutlined style={{fontSize:15,color:"red"}} onClick={() => remove(name)} />
                  </div>
               </>
              ))}
            </div>
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Education
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.List name="skills">
        {(fields, { add, remove }) => (
          <>
          <h6><b>Skills</b></h6>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-4">
                  <Form.Item
                    {...restField}
                    label={["Technology"]}
                    name={[name, "technology"]}
                    rules={[{ required: true, message: "Missing technology" }]}
                  >
                    <Input />
                  </Form.Item>
                  </div>
                  <div className="col-md-4">
                  <Form.Item
                    {...restField}
                    name={[name, "Ranking "]}
                    label={["Ranking out of 10"]}
                    rules={[{ required: true, message: "Missing ranking" }]}
                  >
                    <Input  />
                  </Form.Item>
                  </div>
                  
                  <div className="col-md-2">
                  <MinusCircleOutlined style={{fontSize:15,color:"red"}} onClick={() => remove(name)} />
                  </div>
               </>
              ))}
            </div>
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Skills
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
}

export default Skills;
