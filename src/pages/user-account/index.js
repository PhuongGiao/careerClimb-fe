import AppliedHistory from "@/components/AppliedHistory/AppliedHistory";
import AccountLayout from "@/layout/account";
import { Button, Form, Input, Radio, Tabs } from "antd";
import React, { useState } from "react";
import styles from "./userAccount.module.scss";
import { useSelector } from "react-redux";
import ModalEditUser from "@/components/ModalEditUser/ModalEditUser";

const UserAccount = () => {
  const [form] = Form.useForm();
  let user = useSelector((state) => state.userReducer.user);
  const [isOpenAcc, setisOpenAcc] = useState(false);
  const onChange = (key) => {};
  const handleClick = () => {
    setisOpenAcc(true);
  };
  const items = [
    {
      key: "1",
      label: `Thông tin chi tiết`,
      children: user && (
        <Form
          form={form}
          key="form"
          name="candidate"
          autoComplete="off"
          className={styles.form}
          initialValues={user}
          style={{
            border: "1px solid grey",
            maxWidth: "800px",
            margin: "20px auto",
            padding: "50px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ width: "100px", height: "100px" }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={user?.image}
                />
              </div>
              <h1 style={{ padding: "0 20px" }}>{user?.fullName}</h1>
            </div>
            <Button type="primary" onClick={handleClick}>
              Chỉnh sửa thông tin
            </Button>
          </div>

          <Form.Item
            name="isCandidate"
            label="Bạn là "
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Radio.Group>
              <Radio value={true}>Ứng viên</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input your username!",
              },
            ]}
          >
            <Input value={1} disabled />
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
            <Input placeholder="" disabled />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Số điện thoại"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="" disabled />
          </Form.Item>
        </Form>
      ),
    },
    {
      key: "2",
      label: `Lịch sử ứng tuyển`,
      children: <AppliedHistory />,
    },
    {
      key: "3",
      label: `Công việc đã lưu`,
      children: `Chưa có công việc nào được lưu`,
    },
  ];
  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />{" "}
      <ModalEditUser
        user={user}
        isOpenAcc={isOpenAcc}
        setisOpenAcc={setisOpenAcc}
      />
    </div>
  );
};
UserAccount.Layout = AccountLayout;
export default UserAccount;
