import FloatLabel from "@/components/FloatLabel/FloatLabel";
import { Button, Form, Input, Typography } from "antd";
import { useRouter } from "next/router";
import styles from "./admin.module.scss";
import React from "react";
import logo from "../../../public/logo.png";

const Login = () => {
  const [form] = Form.useForm();
  const router = useRouter();
  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.logo}>
            <img src={logo.src} alt="" />
          </div>
          <Form style={{ width: "100%", padding: "40px 0" }} form={form}>
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <FloatLabel label="Username" name="username">
                <Input
                  size="large"
                  className="inputField"
                  style={{ width: "100%", backgroundColor: "#f1f1f1" }}
                />
              </FloatLabel>
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <FloatLabel label="Password" name="password">
                <Input
                  size="large"
                  className="inputField"
                  style={{ width: "100%", backgroundColor: "#f1f1f1" }}
                />
              </FloatLabel>
            </Form.Item>
            {/* <Typography
        onClick={() => router.push("/register")}
        className={styles.link}
        style={{
          variant: "p",
        }}
      >
        Not a member?
      </Typography> */}
            <Form.Item
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                margin: 0,
              }}
            >
              <Button className={styles.submitButton} type="primary">
                login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
