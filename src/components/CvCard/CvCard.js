import { Radio, Space } from "antd";
import React from "react";
import styles from "./cvCard.module.scss";

const CvCard = ({ cv }) => {
  return (
    <div className={styles.card}>
      <Radio value={cv.id}>
        <div>
          <p>
            <b>{cv.name}</b>
          </p>
          <b>{cv.cvName}</b>
          <p>{cv?.email}</p>
          <p>{cv?.phone}</p>
        </div>
      </Radio>
    </div>
  );
};

export default CvCard;
