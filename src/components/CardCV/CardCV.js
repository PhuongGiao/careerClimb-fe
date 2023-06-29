import React from "react";
import moment from "moment";
import styles from "./cardCV.module.scss";
import { EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
const CardCV = ({ mycv }) => {
  return (
    <div className={styles.card}>
      <div className={styles.title}>
        <h2 style={{ textTransform: "uppercase" }}>{mycv.cvName}</h2>
        <Button className={styles.button}>
          <EditOutlined />
        </Button>
      </div>
      <div className={styles.content}>
        <h4>Tên ứng viên</h4> <p>{mycv.name}</p>
      </div>
      <div className={styles.content}>
        <h4>Email ứng viên</h4> <p>{mycv.email}</p>
      </div>
      <div className={styles.content}>
        <h4>Số điện thoại</h4> <p>{mycv.phone}</p>
      </div>
      <div className={styles.content}>
        <h4>CV của bạn</h4> <a>{mycv.cv}</a>
      </div>
      <div className={styles.content}>
        <h4>Đã tạo lúc</h4>
        <p>{moment(mycv.updatedAt).format("DD-MM-YYYY")}</p>
      </div>
    </div>
  );
};

export default CardCV;
