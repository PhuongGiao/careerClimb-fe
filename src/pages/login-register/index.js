import FacebookButton from "@/components/FbButton/FacebookButton";
import GoogleButton from "@/components/GoogleButton/GoogleButton";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Space,
  Typography,
} from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import login from "../../../public/login.jpg";
import logo from "../../../public/logo.png";
import FloatLabel from "../../components/FloatLabel/FloatLabel";
import styles from "./login.module.scss";
import UserInformation from "../user-information";
import { userService } from "../../../services/userServices";
import { signInWithPopup } from "firebase/auth";
import { useSelector } from "react-redux";

const Login = () => {
  const router = useRouter();
  const user = useSelector((state) => state.userReducer.user);
  const [formLayout, setFormLayout] = useState("horizontal");

  const formItemLayout = () => {
    formLayout === "horizontal"
      ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } }
      : null;
  };

  const buttonItemLayout = () => {
    formLayout === "horizontal"
      ? { wrapperCol: { span: 14, offset: 4 } }
      : null;
  };
  useEffect(() => {
    if (user) {
      if (!user?.address && !user?.employerDetail) {
        router.push("/user-information");
      } else if (!user?.address && !user?.employerDetail?.address) {
        router.push("/user-information");
      } else {
        router.push("/");
      }
    }
  }, [user]);

  return (
    <div className={styles.login}>
      <div className={styles.container}>
        <Row
          style={{
            width: "100%",
            height: "70vh",
            background: "#8080801c",
            borderRadius: "10px",
            overflow: "hidden",
          }}
        >
          <Col lg={12} md={12} sm={0} xs={0}>
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              src={login.src}
              alt=""
            />
          </Col>
          <Col
            lg={12}
            md={12}
            sm={24}
            xs={24}
            style={{
              padding: "0 50px",
              alignItems: "center",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{ width: "50%", padding: "0 0 50px 0" }}
              onClick={() => router.push("/")}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                }}
                src={logo.src}
                alt=""
              />
            </div>

            {/* <Form style={{ width: "100%" }} form={form}>
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
                          style={{ backgroundColor: "#f1f1f1" }}
                        />
                      </FloatLabel>
                    </Form.Item>
                    <Typography
                      onClick={() => router.push("/register")}
                      className={styles.link}
                      style={{
                        variant: "p",
                      }}
                    >
                      Not a member?
                    </Typography>
                    <Form.Item
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Button className={styles.submitButton} type="primary">
                        login
                      </Button>
                    </Form.Item>
                  </Form> */}
            {/* <Divider style={{ color: "#572c0e" }}>OR</Divider> */}
            <Space
              style={{
                display: "block",
                // justifyContent: "center",
                color: "#572c0e",
              }}
            >
              {/* <FacebookButton /> */}
              <GoogleButton />
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
