import React, { useEffect, useState } from "react";
import styles from "./successForm.module.scss";
import { Button } from "antd";
import { useRouter } from "next/router";
import { ArrowRightOutlined, CheckOutlined } from "@ant-design/icons";
import { openNotification } from "../Notification";
import { userService } from "../../../services/userServices";

const SuccessForm = ({}) => {
  const router = useRouter();

  return (
    <div
      className={styles.successForm}
      style={{ color: "green", textAlign: "center", lineHeight: 2 }}
    >
      <CheckOutlined
        style={{
          fontSize: "50px",
          border: "5px solid green",
          borderRadius: "50%",
          padding: "20px",
        }}
      />
      <h1 style={{ textTransform: "uppercase" }}>Thành công</h1>
      <h4>Bạn đã cập nhập thông tin !!!</h4>
      <Button
        onClick={() => router.push("/")}
        style={{
          alignItems: "center",
          border: "1px solid green",
          margin: "20px 0",
          color: "green",
          textTransform: "uppercase",
          fontWeight: "bold",
        }}
      >
        Trải nghiệm ngay <ArrowRightOutlined style={{ fontSize: "10px" }} />
      </Button>
    </div>
  );
};

export default SuccessForm;
