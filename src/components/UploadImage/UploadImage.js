import { InboxOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import styles from "./uploadImage.module.scss";
import {
  Button,
  Form,
  Input,
  InputNumber,
  message,
  Modal,
  Select,
  Upload,
} from "antd";
import { userService } from "../../../services/userServices";
import { useSelector } from "react-redux";
import { uploadImage } from "@/utils/imageUpload";
import { openNotification } from "../Notification";
import { employerService } from "../../../services/employerService";
import ImageUploadForm from "../FormImage/FormImage";

const { TextArea } = Input;
const UploadImage = ({
  next,
  prev,
  setInformation,
  information,
  role,
  user,
}) => {
  const [form] = Form.useForm();
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");
  const [fileList, setFileList] = useState([]);
  // const [imgUrl, setImgUrl] = useState("");
  const [imageUrl, setImageUrl] = useState();
  const handleCancel = () => setPreviewOpen(false);
  console.log(user);
  const onFinish = async (values) => {
    try {
      if (user?.isCandidate) {
        await userService.update(user.id, { ...values, image: imageUrl });
      } else {
        await employerService.create(values);
      }
      openNotification("success", "Bạn đã cung cấp thông tin thành công !!!");
      next();
    } catch (error) {
      openNotification("error", "Please try again !!!");
    }
  };
  return (
    <div className={styles.fillInfomation}>
      {user?.isCandidate === true ? (
        <Form
          form={form}
          name="candidate"
          onFinish={onFinish}
          autoComplete="off"
          className={styles.form}
          initialValues={user}
        >
          <Form.Item
            label="Tên "
            name="fullName"
            rules={[
              {
                // required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Tuổi"
            name="age"
            style={{ display: "flex" }}
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <InputNumber min={16} max={55} initialvalues={16} />
          </Form.Item>
          <Form.Item
            label="Giới tính"
            name="sex"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Select
              showSearch
              style={{
                width: "50%",
                display: "flex",
              }}
              placeholder="Chọn giới tính..."
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "female",
                  label: "Nữ",
                },
                {
                  value: "male",
                  label: "Nam",
                },
              ]}
            />
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
            <Input placeholder="" />
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
            <Input placeholder="" />
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
            <ImageUploadForm
              onChange={(value) => {
                setImageUrl(value);
                form.setFieldsValue({ cv: value });
              }}
              value={imageUrl}
            />
          </Form.Item>
          <Form.Item
            style={{ width: "100%", display: "flex", justifyContent: "end" }}
          >
            <Button
              className={styles.submitButton}
              type="primary"
              htmlType="submit"
            >
              Hoàn tất
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <Form
          form={form}
          name="employers"
          onFinish={onFinish}
          // autoComplete="off"
          className={styles.form}
          initialValues={user.employerDetail}
        >
          <Form.Item
            label="Tên "
            name="name"
            rules={[
              {
                // required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
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
            <Input placeholder="" />
          </Form.Item>
          <Form.Item
            label="Lời giới thiệu"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <TextArea rows={4} placeholder="" />
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
            <ImageUploadForm
              onChange={(value) => {
                setImageUrl(value);
                form.setFieldsValue({ cv: value });
              }}
              value={imageUrl}
            />
          </Form.Item>
          <Form.Item
            style={{ width: "100%", display: "flex", justifyContent: "end" }}
          >
            <Button
              className={styles.submitButton}
              type="primary"
              htmlType="submit"
            >
              Hoàn tất
            </Button>
          </Form.Item>
        </Form>
      )}
      <Modal
        open={previewOpen}
        title={previewTitle}
        footer={null}
        onCancel={handleCancel}
      >
        <img
          alt="example"
          style={{
            width: "100%",
          }}
          src={previewImage}
        />
      </Modal>
    </div>
  );
};

export default UploadImage;
