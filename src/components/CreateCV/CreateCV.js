import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import styles from "./createCV.module.scss";
import ImageUploadForm from "../FormImage/FormImage";
import { cvService } from "../../../services/cvService";
import { openNotification } from "../Notification";
import { ArrowLeftOutlined } from "@ant-design/icons";

const CreateCV = ({
  isCreateOpen,
  loadingCreate,
  setIsCreateOpen,
  setLoadingCreate,
}) => {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const [imageUrl, setImageUrl] = useState();

  const onFinish = async (values) => {
    setLoadingCreate(true);
    try {
      await cvService.create(values);
      openNotification("success", "Bạn đã tạo CV thành công");
      setIsCreateOpen(false);
    } catch (error) {
      openNotification("error", "Please try again !!!");
    }
    setLoadingCreate(false);
  };

  return (
    <Form
      form={form}
      name="basic"
      onFinish={onFinish}
      autoComplete="off"
      className={styles.form}
      loading={loadingCreate}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
    >
      <Form.Item
        label="Tên CV"
        name="cvName"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Họ và tên"
        name="name"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Số điện thoại"
        name="phone"
        rules={[{ required: true, message: "Please input your phone!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Lời giới thiệu"
        name="introduction"
        rules={[{ required: true, message: "Please input your phone!" }]}
      >
        <TextArea rows={4} />
      </Form.Item>
      <Form.Item
        label="CV của tôi"
        name="cv"
        rules={[{ required: true, message: "Please input your phone!" }]}
      >
        <ImageUploadForm
          onChange={(value) => {
            setImageUrl(value);
            form.setFieldsValue({ cv: value });
          }}
          value={imageUrl}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Tạo
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateCV;
