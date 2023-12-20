import React, { useEffect, useState } from "react";
import { cvService } from "../../../services/cvService";
import { openNotification } from "../Notification";
import Card from "../Card/Card";
import AppliedCard from "../AppliedCard/AppliedCard";
import { Col, Row } from "antd";
import styles from "./appliedHistory.module.scss";
import moment from "moment";
import { applicationService } from "../../../services/applicationService";

const AppliedHistory = () => {
  const [appliedListByMonth, setAppliedListByMonth] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await applicationService.getMyCVs();
        const dayList = [
          ...new Set(
            data?.applications?.map((application) =>
              moment(application.createdAt).format("MM-YYYY")
            )
          ),
        ];
        const renderList = dayList.map((value) => {
          return {
            monthYear: value,
            data: data?.applications.filter(
              (val) => moment(val.createdAt).format("MM-YYYY") === value
            ),
          };
        });
        setAppliedListByMonth(renderList);
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
      {appliedListByMonth ? (
        <>
          {appliedListByMonth?.map((itemByMonth) => (
            <div style={{ margin: "24px 0" }} key={itemByMonth}>
              <h2 style={{ margin: " 10px 0" }}>{itemByMonth.monthYear}</h2>
              <Row gutter={[25, 25]}>
                {itemByMonth?.data.map((applied, idx) => (
                  <AppliedCard value={applied} key={idx} />
                ))}
              </Row>
            </div>
          ))}
        </>
      ) : (
        <p>Bạn chưa có công việc nào !!!</p>
      )}
    </div>
  );
};

export default AppliedHistory;
