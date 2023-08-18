import { Button, DatePicker, Form, Input, Modal, TimePicker } from "antd";
import React, { useState } from "react";
import { applicationService } from "../../../services/applicationService";
import { openNotification } from "../Notification";

const ConfirmModal = ({
  appliedUser,
  openConfirm,
  setOpenConfirm,
  setOpen,
  disabledButton,
  setDisabledButton,
}) => {
  const applicationId = appliedUser.id;
  const [value, setValue] = useState(null);
  const [form] = Form.useForm();
  const [description, setDescription] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const onChange = (time) => {
    setValue(time);
  };
  // setKey((key) => ({ ...key, category: JSON.stringify(value) }));

  const onFinish = async (values) => {
    try {
      await applicationService.updateIntructor(applicationId, values);
      openNotification("success", "Bạn đã ứng tuyển ứng viên này !!!");
      form.resetFields();
      setDisabledButton(true);
      setOpenConfirm(false);
    } catch (error) {
      openNotification("error", "Something went wrong !!!");
    }
  };

  const handleOk = () => {
    setOpenConfirm(false);
  };

  const handleCancel = () => {
    setOpenConfirm(false);
  };
  return (
    <Modal
      open={openConfirm}
      onOk={handleOk}
      onCancel={handleCancel}
      // onFinish={onFinish}
      // onChange={handleChange}
      footer={[]}
    >
      <span>Điền thông tin phỏng vấn</span>
      <Form form={form} onFinish={onFinish}>
        <Form.Item
          label="Tên người hướng dẫn"
          name="intructorName"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          label={<label style={{ whiteSpace: "normal" }}>Số điện thoại</label>}
          name="intructorPhone"
          rules={[{ required: true, message: "Please input your phone!" }]}
        >
          <Input type="text" placeholder="Nhập số điện thoại người hướng dẫn" />
        </Form.Item>
        <Form.Item
          label={<label style={{ whiteSpace: "normal" }}>Email</label>}
          name="intructorEmail"
          rules={[{ required: true, message: "Please input your phone!" }]}
        >
          <Input type="text" placeholder="Nhập email của người hướng dẫn" />
        </Form.Item>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Form.Item>
            <Button onClick={handleCancel}>Huỷ</Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Ứng tuyển
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};

export default ConfirmModal;
