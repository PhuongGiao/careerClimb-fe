import MainLayout from "@/layout/main";
import React from "react";
import styles from "./personalityTest.module.scss";
import personality1 from "./../../../public/personality1.png";
import { Button, Col, Divider, Row, Tooltip } from "antd";
import { ArrowRightOutlined, SearchOutlined } from "@ant-design/icons";
import CardMbti from "@/components/CardMbti/CardMbti";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
const PersonalityTest = () => {
  const router = useRouter();
  let user = useSelector((state) => state.userReducer.user);

  return (
    <div className={styles.personalityTest}>
      <div className={styles.container}>
        <h1
          style={{
            textTransform: "uppercase",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            margin: "30px 0",
          }}
        >
          Myers–Briggs Type Indicator
        </h1>
        <Row gutter={30}>
          <Col className={styles.bgContent} span={17}>
            <div>
              <div className={styles.content}>
                <div className={styles.textContent}>
                  <p>
                    It is a widely used psychological tool designed to measure
                    psychological preferences in how people perceive the world
                    and make decisions. The MBTI was developed by Katharine Cook
                    Briggs and her daughter Isabel Briggs Myers, based on the
                    theories of Swiss psychiatrist Carl Gustav Jung.
                  </p>
                  <Tooltip title="You have to login !!!">
                    <Button
                      type="primary"
                      className={styles.butContent}
                      icon={<ArrowRightOutlined />}
                      onClick={() => router.push(`personality-test/tests`)}
                      disabled={user ? false : true}
                      style={{ padding: "10px 26px", height: "fit-content" }}
                    >
                      <b>Search</b>
                    </Button>
                  </Tooltip>
                </div>
                <div className={styles.imgContent}>
                  <img src={personality1.src} />
                </div>
              </div>
            </div>
            <div>
              <h1>Types of MBTI</h1>
              <div style={{ display: "block", margin: "20px 0" }}>
                <Row gutter={[25, 20]}>
                  <Col span={12}>
                    <CardMbti />
                  </Col>
                  <Col span={12}>
                    <CardMbti />
                  </Col>
                  <Col span={12}>
                    <CardMbti />
                  </Col>
                  <Col span={12}>
                    <CardMbti />
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
          <Col span={1}>
            <Divider style={{ height: "100%" }} type="vertical" />
          </Col>
          <Col span={6}>
            <div className={styles.infUser}>
              <div className={styles.avaUser}>
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={personality1.src}
                />
              </div>
              <div className={styles.information}>
                <h4>Nguyen Van A</h4>
                <p>ádasdasdasd</p>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
PersonalityTest.Layout = MainLayout;
export default PersonalityTest;
