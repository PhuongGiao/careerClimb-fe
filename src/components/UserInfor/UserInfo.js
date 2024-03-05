import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  Tabs,
} from "antd";
import React, { useState } from "react";
import styles from "./userInfo.module.scss";
import UploadImage from "../UploadImage/UploadImage";
import { userService } from "../../../services/userServices";
import { openNotification } from "../Notification";

const UserInfo = ({ next, setRole, user }) => {
  const [value, setValue] = useState(true);
  const onFinish = async (values) => {
    try {
      await userService.update(values);
      openNotification("success", "Successfully !!!");
    } catch (error) {
      openNotification("error", "Please try again !!!");
    }
    next();
  };
  const onChange = (e) => {
    setRole(e.target.value);
  };
  return (
    <div>
      {user && (
        <Form
          name="candidate"
          onFinish={onFinish}
          className={styles.form}
          initialValues={user}
        >
          <Form.Item
            label="Bạn là "
            name="isCandidate"
            // rules={[
            //   {
            //     // required: true,
            //     message: "Please input your username!",
            //   },
            // ]}
          >
            <Radio.Group onChange={onChange} value={value}>
              <Radio value={true}>Ứng viên</Radio>
              <Radio value={false}>Nhà tuyển dụng</Radio>
            </Radio.Group>
          </Form.Item>
          {/* <Form.Item
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
          </Form.Item> */}
          <Form.Item
            label="Email"
            name="email"
            // rules={[
            //   {
            //     required: true,
            //     type: "email",
            //     message: "Please input your username!",
            //   },
            // ]}
          >
            <Input disabled />
          </Form.Item>
          {/* <Form.Item
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
          </Form.Item> */}
          {/* <Form.Item
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
            <InputNumber min={16} max={55} itialvalues={16} />
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
          </Form.Item> */}
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
              Bước tiếp theo
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default UserInfo;
