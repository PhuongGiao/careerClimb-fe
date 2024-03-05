import FloatLabel from "@/components/FloatLabel/FloatLabel";
import { Button, Form, Input, Modal, Typography } from "antd";
import { useRouter } from "next/router";
import styles from "./employerPage.module.scss";
import React from "react";
import { useSelector } from "react-redux";
import JobsListEmployer from "./jobs-list";
import EmployerLayout from "@/layout/employer";

const LoginEmployer = () => {
  const router = useRouter();
  const user = useSelector((state) => state.userReducer.user);
  const role = user?.isCandidate;

  return (
    // <div className={styles.login}>
    //   <div className={styles.container}>
    //     <div className={styles.main}>
    //       <div className={styles.logo}>
    //         <img src={logo.src} alt="" />
    //       </div>
    //       <Form style={{ width: "100%", padding: "40px 0" }} form={form}>
    //         <Form.Item
    //           name="username"
    //           rules={[
    //             { required: true, message: "Please input your username!" },
    //           ]}
    //         >
    //           <FloatLabel label="Username" name="username">
    //             <Input
    //               size="large"
    //               className="inputField"
    //               style={{ width: "100%", backgroundColor: "#f1f1f1" }}
    //             />
    //           </FloatLabel>
    //         </Form.Item>
    //         <Form.Item
    //           name="password"
    //           rules={[
    //             { required: true, message: "Please input your username!" },
    //           ]}
    //         >
    //           <FloatLabel label="Password" name="password">
    //             <Input
    //               size="large"
    //               className="inputField"
    //               style={{ width: "100%", backgroundColor: "#f1f1f1" }}
    //             />
    //           </FloatLabel>
    //         </Form.Item>
    //         <Form.Item
    //           style={{
    //             width: "100%",
    //             display: "flex",
    //             justifyContent: "center",
    //             margin: 0,
    //           }}
    //         >
    //           <Button className={styles.submitButton} type="primary">
    //             login
    //           </Button>
    //         </Form.Item>
    //       </Form>
    //     </div>
    //   </div>
    // </div>

    <>
      {user ? (
        !role ? (
          <JobsListEmployer />
        ) : (
          <div>
            <h1 onClick={() => router.push("/")}>PAGE NOT FOUND</h1>
            <Button type="primary" onClick={() => router.push("/")}>
              Trang chủ
            </Button>
          </div>
        )
      ) : (
        <div
          style={{
            display: "flex",
            alignContent: "center",
            flexDirection: "column",
            flexWrap: "wrap",
          }}
        >
          <h1 onClick={() => router.push("/")}>Vui lòng đăng nhập lại !!!</h1>
          <Button type="primary" onClick={() => router.push("/login-register")}>
            Đăng nhập
          </Button>
        </div>
      )}
    </>
  );
};
LoginEmployer.Layout = EmployerLayout;
export default LoginEmployer;
