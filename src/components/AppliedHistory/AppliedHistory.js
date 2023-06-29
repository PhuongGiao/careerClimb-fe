import React, { useEffect, useState } from "react";
import { cvService } from "../../../services/cvService";
import { openNotification } from "../Notification";
import Card from "../Card/Card";
import AppliedCard from "../AppliedCard/AppliedCard";
import { Col, Row } from "antd";
import styles from "./appliedHistory.module.scss";

const AppliedHistory = () => {
  const [appliedList, setAppliedList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await cvService.getMyCVs();
        setAppliedList(data.data);
      } catch (error) {
        openNotification("error", "Something went wrong !!!");
      }
    })();
  }, []);
  return (
    <div>
      <div className={styles.flex}>
        <div className={styles.flex}>
          <div style={{ background: "red" }} className={styles.circle}></div>
          Đang đợi
        </div>
        <div className={styles.flex}>
          <div style={{ background: "blue" }} className={styles.circle}></div>
          Đã xem
        </div>
        <div className={styles.flex}>
          <div style={{ background: "green" }} className={styles.circle}></div>
          Đã có kết quả - Vui lòng check gmail
        </div>
      </div>
      <Row gutter={[25, 35]}>
        {appliedList &&
          appliedList.map((value, idx) => (
            <AppliedCard value={value} key={idx} />
          ))}
      </Row>
    </div>
  );
};

export default AppliedHistory;
