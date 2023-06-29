import { FrownOutlined } from "@ant-design/icons";
import React from "react";
import styles from "./noData.module.scss";

const NoData = () => {
  return (
    <div className={styles.noData}>
      <FrownOutlined />
      <p>Chưa có công việc liên quan</p>
    </div>
  );
};

export default NoData;
