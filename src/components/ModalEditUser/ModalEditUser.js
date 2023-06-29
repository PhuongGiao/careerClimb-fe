import React, { useEffect, useState } from "react";
import styles from "./modalEditUser.module.scss";
import { Button, Form, Input, Modal, Select } from "antd";
import ImageUploadForm from "../FormImage/FormImage";
import { SwapRightOutlined } from "@ant-design/icons";
import { userService } from "../../../services/userServices";
import { openNotification } from "../Notification";

const ModalEditUser = ({ user, isOpenAcc, setisOpenAcc }) => {
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState();
  const handleOk = () => {
    setisOpenAcc(false);
  };
  const handleCancel = () => {
    setisOpenAcc(false);
  };
  const onFinish = async (values) => {
    // console.log(values);
    try {
      await userService.update(user.id, { ...values, image: imageUrl });
      openNotification("success", "Bạn đã cập nhập thông tin !!!");
    } catch (error) {
      openNotification("error", "Something went wrong...");
    }
    form.resetFields();
    setisOpenAcc(false);
  };

  useEffect(() => {
    if (user) {
      form.setFieldsValue(user);
      // openNotification("success", "Bạn đã cập nhập thông tin !!!")
    } else {
      form.resetFields();
    }
  }, [user]);

  return (
    <Modal
      title="Sửa thông tin cá nhân"
      open={isOpenAcc}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[]}
    >
      <Form
        //   disabled={isLoading}
        form={form}
        name="basic"
        onFinish={onFinish}
        //   onFinishFailed={onFinishFailed}
        autoComplete="off"
        className={styles.form}
        // initialValues={}
      >
        <Form.Item
          label="Tên ứng viên"
          name="fullName"
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
          label="Email"
          name="email"
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
          label="Địa chỉ"
          name="address"
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
          label="Số điện thoại"
          name="phone"
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
          label="Ảnh đại diện"
          name="image"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <div className={styles.formImage}>
            <div className={styles.oldImg}>
              <img style={{ width: "100%" }} src={user?.image} />
            </div>
            <SwapRightOutlined style={{ fontSize: "20px" }} />
            <ImageUploadForm
              className={styles.newImg}
              onChange={(value) => {
                setImageUrl(value);
                // form.setFieldsValue({ cv: value });
                form.setFieldsValue({ image: value });
              }}
              value={imageUrl}
            />
          </div>
        </Form.Item>

        <Form.Item
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Button
            className={styles.submitButton}
            type="primary"
            htmlType="submit"
          >
            Sửa
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalEditUser;
