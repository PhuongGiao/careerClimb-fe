import {
  BranchesOutlined,
  FieldTimeOutlined,
  LineChartOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import { Col, Divider, Row } from "antd";
import React from "react";
import styles from "./benefits.module.scss";

const Benefits = () => {
  return (
    <div className={styles.benefits}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.intro}>
            <h4>FEATURED SERVICES</h4>
            <Divider className={styles.line} />
            <h1 style={{ color: "#572c0e" }}>
              THE SERVICES THAT WE ARE PROVIDING
            </h1>
            <p style={{ color: " #a9a9a9" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem
              temporibus blanditiis accusamus perferendis libero accusantium
              nisi itaque tempore, harum aliquid aut, sapiente dolor tenetur.
              Tempora corrupti suscipit delectus perspiciatis! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Nostrum, voluptatibus.
            </p>
          </div>
          <Row className={styles.content} gutter={[30, 30]}>
            <Col xs={24} sm={12}>
              <FieldTimeOutlined className={styles.icon} />
              <p className={styles.mainText}>Time-saving</p>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias id volume amet.
              </p>
            </Col>
            <Col xs={24} sm={12}>
              <LineChartOutlined className={styles.icon} />
              <p className={styles.mainText}>Time-saving</p>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias id volume amet.
              </p>
            </Col>
            <Col xs={24} sm={12}>
              <ScheduleOutlined className={styles.icon} />
              <p className={styles.mainText}>Time-saving</p>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias id volume amet.
              </p>
            </Col>
            <Col xs={24} sm={12}>
              <BranchesOutlined className={styles.icon} />
              <p className={styles.mainText}>Time-saving</p>
              <p className={styles.text}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias id volume amet.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
