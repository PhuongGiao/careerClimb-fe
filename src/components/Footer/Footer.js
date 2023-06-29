import React from "react";
import styles from "./footer.module.scss";
import logo from "../../../public/logo.png";
import { Button, List, Space, Typography } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.image}>
            <img width="10%" src={logo.src} alt="" />
          </div>

          <div className={styles.listTitle}>
            <p href="">About</p>
            <p href="">Careers</p>
            <p href="">Employers</p>
            <p href="">Contact</p>
          </div>
          <Typography
            variant="h1"
            style={{ fontWeight: "600", fontSize: "80%" }}
          >
            Stay on touch
          </Typography>
          <Space
            size="large"
            style={{ justifyContent: "center", padding: "20px 0" }}
          >
            <Button shape="circle" size="large">
              <InstagramOutlined />
            </Button>
            <Button shape="circle" size="large">
              <FacebookOutlined />
            </Button>
            <Button shape="circle" size="large">
              <TwitterOutlined />
            </Button>
          </Space>
          <Typography
            variant="h1"
            style={{ fontWeight: "600", fontSize: "70%", color: "#b0b0b0" }}
          >
            Copyright © 2023 All rights reserved
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
