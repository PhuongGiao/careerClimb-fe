import { StepBackwardOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { jobService } from "../../../services/jobService";
import Card from "../Card/Card";
import styles from "./jobList.module.scss";

const JobList = ({ data }) => {
  const router = useRouter();
  return (
    <div className={styles.jobList}>
      <div className={styles.container}>
        <div className={styles.main}>
          <Row gutter={[30, 30]} style={{ marginBottom: "50px" }}>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                color: "#a9a9a9",
              }}
            >
              {data?.length === 0 && "Không có công việc nào liên quan"}
            </p>
            {data?.length !== 0 &&
              data?.slice(0, 7).map((val) => (
                <Col key={val?.id} xs={24} sm={12} lg={8}>
                  <Card value={val} />
                </Col>
              ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default JobList;
