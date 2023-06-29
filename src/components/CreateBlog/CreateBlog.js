import { Button, Form, Input, Select } from "antd";
import React from "react";

const { TextArea } = Input;
const CreateBlog = () => {
  const [form] = Form.useForm();
  return (
    <Form form={form} name="basic">
      <Form.Item
        label="Tên công việc"
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder="Basic usage" />
      </Form.Item>

      <Form.Item
        label="Miêu tả"
        name="description"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <TextArea placeholder="Miêu tả công việc..." autoSize />
      </Form.Item>

      <Form.Item
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "end",
        }}
      >
        <Button
          //   className={styles.submitButton}
          type="primary"
          htmlType="submit"
        >
          Hoàn tất
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateBlog;
