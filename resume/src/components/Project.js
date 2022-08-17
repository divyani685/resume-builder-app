import React from "react";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input} from "antd";
const {TextArea}=Input
function Project() {
  return (
    <div style={{ padding: "5px" }}>
      <Form.List name="experience">
        {(fields, { add, remove }) => (
          <>
          <h6><b>Experience</b></h6>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-3">
                  <Form.Item
                    {...restField}
                    name={[name, "company"]}
                    label={["Company"]}
                    rules={[{ required: true, message: "Missing company name" }]}
                  >
                    <Input />
                  </Form.Item>
                  </div>
                  <div className="col-md-2">
                  <Form.Item
                    {...restField}
                    name={[name, "years"]}
                    label={["Years"]}
                    rules={[{ required: true, message: "Missing Years" }]}
                  >
                    <Input  />
                  </Form.Item>
                  </div>
                  <div className="col-md-3">
                  <Form.Item
                    {...restField}
                    name={[name, "place"]}
                    label={["Place"]}
                    rules={[{ required: true, message: "Missing Place" }]}
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
                Add Experience
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.List name="projects">
        {(fields, { add, remove }) => (
          <>
          <h6><b>Projects</b></h6>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-md-3">
                  <Form.Item
                    {...restField}
                    label={["Title"]}
                    name={[name, "title"]}
                    rules={[{ required: true, message: "Missing title" }]}
                  >
                    <Input />
                  </Form.Item>
                  </div>
                  <div className="col-md-5">
                  <Form.Item
                    {...restField}
                    name={[name, "description"]}
                    label={["Decription"]}
                    rules={[{ required: true, message: "Missing description field" }]}
                  >
                  <TextArea/>
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
                Add Projects
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
}

export default Project;
