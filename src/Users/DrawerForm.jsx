import {
    Drawer,
    Form,
    Button,
    Col,
    Row,
    Input,
    Select,
    DatePicker,
    Space,
    Switch,
  } from "antd";
  import { PlusOutlined } from "@ant-design/icons";
  import { useContext, useState } from "react";
  import { UserState } from "./model";
  
  const DrawerForm = () => {
    const { data, visible, setVisible } = useContext(UserState);
    const [toggle, setToggle] = useState(false);

    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };
    const toggler = () =>{
      toggle ? setToggle(false) : setToggle(true);
    };
    
    return (
      <div>
        <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
          New account
        </Button>
        ;
        <Drawer
          title="Create a new account"
          width={720}
          onClose={onClose}
          visible={visible}
          bodyStyle={{ paddingBottom: 80 }}
          extra={
            <Space>
              <Button onClick={onClose}>Cancel</Button>
              <Button onClick={onClose} type="primary">
                Submit
              </Button>
            </Space>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Name"
                  rules={[{ required: true, message: "Please enter First Name" }]}
                >
                  <Input placeholder="Please enter First Name" />
                </Form.Item>
              </Col>
            </Row>
  
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="Last Name"
                  label="Last Name"
                  rules={[{ required: true, message: "Please enter Last Name" }]}
                >
                  <Input placeholder="Please enter Last Name" />
                </Form.Item>
              </Col>
            </Row>
  
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="MobileNo"
                  label="Mobile"
                  rules={[{ required: true, message: "Please enter Mobile Number" }]}
                >
                  <Input placeholder="Please enter Mobile Number" />
                </Form.Item>
              </Col>
            </Row>
            <Space>
              <Switch/>
              {toggler ? <span>ACTIVE</span> : <span>INACTIVE</span>}
              
            </Space>
            
            
          </Form>
        </Drawer>
      </div>
    );
  };
  
  export default DrawerForm;