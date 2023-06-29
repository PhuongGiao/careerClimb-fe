import { Button, Form, Input, Modal } from "antd";
import React, { useState } from "react";
import styles from "./createcvModal.module.scss";
import ImageUploadForm from "../FormImage/FormImage";
import { cvService } from "../../../services/cvService";
import { openNotification } from "../Notification";
import { ArrowLeftOutlined } from "@ant-design/icons";
import CreateCV from "../CreateCV/CreateCV";

const CreateCVModal = ({
  isCreateOpen,
  loadingCreate,
  setIsCreateOpen,
  setLoadingCreate,
}) => {
  const handleOk = () => {
    setIsCreateOpen(false);
  };

  const handleCancel = () => {
    setIsCreateOpen(false);
  };

  return (
    <Modal
      open={isCreateOpen}
      title="TẠO CV"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={
        [
          // <Button disabled={loadingCreate} type="primary">
          //   Ứng tuyển
          // </Button>,
        ]
      }
    >
      {/* <Form
        //   form={form}
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
        className={styles.form}
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
      </Form> */}
      <CreateCV
        setLoadingCreate={setLoadingCreate}
        setIsCreateOpen={setIsCreateOpen}
        loadingCreate={loadingCreate}
      />
    </Modal>
  );
};

export default CreateCVModal;
