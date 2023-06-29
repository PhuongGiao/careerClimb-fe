import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";
import { blogService } from "../../../services/blogService";
import ImageUploadForm from "../FormImage/FormImage";
import { openNotification } from "../Notification";

const ModalBlog = ({ open, handleCancel, setOpen, loading, setLoading }) => {
  const { TextArea } = Input;
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await blogService.create(values);
      openNotification("success", "Bạn đã tạo bài viết thành công !!!");
      setOpen(false);
    } catch (error) {
      openNotification("error", "Please try again !!!");
    }
    setLoading(false);
  };

  return (
    <Modal
      title={open ? "Tạo việc làm" : "Sửa việc làm"}
      open={open}
      onCancel={handleCancel}
      footer={[]}
    >
      <Form
        //   disabled={isLoading}
        form={form}
        onFinish={onFinish}
        // initialValues={}
      >
        <Form.Item
          label="Tiêu đề"
          name="title"
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
          label="Hình ảnh"
          name="image"
          rules={[
            {
              required: true,
              message: "Please input your password!",
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
          label="Nội dung bài viết"
          name="content"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <TextArea rows={5} placeholder="Nội dung bài viết..." />
        </Form.Item>

        <Form.Item
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Button
            // className={styles.submitButton}
            type="primary"
            htmlType="submit"
          >
            Hoàn tất
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalBlog;
