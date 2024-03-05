import { openNotification } from "@/components/Notification";
import MainLayout from "@/layout/main";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { mbtiService } from "../../../services/mbtiService";
import styles from "./result.module.scss";
import { mbti } from "../../../public/mbti";
import { Col, Divider, Radio, Row, Tabs } from "antd";
import { SafetyOutlined, StarFilled } from "@ant-design/icons";
import { categoryService } from "../../../services/categoryService";
import Card from "@/components/Card/Card";

const Result = () => {
  const router = useRouter();
  const id = router.query.id;
  const [result, setResult] = useState();
  const [category, setCategory] = useState();

  useEffect(() => {
    id &&
      (async () => {
        try {
          // const { data } = await mbtiService.getResult(id);
          // const { data } = await categoryService.getAll("");
          const [{ data: mbti }, { data: jobs }] = await Promise.all([
            mbtiService.getResult(id),
            categoryService.getDetail("1"),
          ]);
          setResult(mbti);
          setCategory(jobs);
        } catch (error) {
          console.log("🚀 ~ file: [id].js:32 ~ error:", error);

          if (error.response.status === 404 || 401) {
            router.push("/page-not-found");
            // openNotification("error", "Page Not Found!!!");
          }
          openNotification("error", "Please try again!!!");
        }
      })();
  }, [id]);
  const infoPersonality = mbti?.find(
    (val) => val.label === result?.Personality
  );

  const otherTypes = mbti?.filter((val) => {
    if (val.label === result?.Personality) {
      return false;
    }
    return val.role === infoPersonality?.role;
  });
  console.log(
    "🚀 ~ file: [id].js:51 ~ otherTypes ~ infoPersonality:",
    category
  );

  return (
    <>
      <div className={styles.result}>
        <div className={styles.container}>
          <div className={styles.title}>
            <div className={styles.personality}>
              <h2>Personality Types</h2>
              <h1>{infoPersonality?.label}</h1>
            </div>
            <div className={styles.bigImg}>
              <img src={infoPersonality?.imageBg.src} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <Row gutter={20} className={styles.info}>
          <Col span={18} className={styles.info}>
            <div className={styles.description}>
              <Divider orientation="left" orientationMargin="0">
                <h2>Introduction</h2>
              </Divider>
              <p>{infoPersonality?.description}</p>
            </div>
            <div className={styles.description}>
              <Divider orientation="left" orientationMargin="0">
                <h2>Strengths</h2>
              </Divider>
              {infoPersonality?.strengths?.map((value) => (
                <ol className={styles.circle}>
                  <li>{value}</li>
                </ol>
                // <p>{infoPersonality?.strengths}</p>
              ))}
            </div>
            <div className={styles.description}>
              <Divider orientation="left" orientationMargin="0">
                <h2>Weaknesses</h2>
              </Divider>
              {infoPersonality?.weaknesses?.map((value) => (
                <ol className={styles.circle}>
                  <li>{value}</li>
                </ol>
                // <p>{infoPersonality?.strengths}</p>
              ))}
              {/* <p>{infoPersonality?.weaknesses}</p> */}
            </div>
            <div className={styles.description}>
              <Divider orientation="left" orientationMargin="0">
                <h2>Leadership Style</h2>
              </Divider>
              <p>{infoPersonality?.leadership_style}</p>
            </div>
            <div className={styles.description}>
              <Divider orientation="left" orientationMargin="0">
                <h2>Communication Style</h2>
              </Divider>
              <p>{infoPersonality?.communication_style}</p>
            </div>
            <div className={styles.description}>
              <Divider orientation="left" orientationMargin="0">
                <h2>Hobbies</h2>
              </Divider>
              {infoPersonality?.hobbies_interests?.map((value) => (
                <ol className={styles.circle}>
                  <li>{value}</li>
                </ol>
                // <p>{infoPersonality?.strengths}</p>
              ))}
              {/* <p>{infoPersonality?.hobbies_interests}</p> */}
            </div>
            <div className={styles.description}>
              <Divider orientation="left" orientationMargin="0">
                <h2>Stress Response</h2>
              </Divider>
              <p>{infoPersonality?.stress_response}</p>
            </div>
            <div className={styles.description}>
              <Divider orientation="left" orientationMargin="0">
                <h2>Reasonable Jobs</h2>
              </Divider>
              <p>{infoPersonality?.reasonable_job}</p>
            </div>
          </Col>
          <Col span={6} className={styles.summary}>
            <div className={styles.box}>
              <img
                style={{ width: "100%" }}
                src={infoPersonality?.avatar.src}
                alt=""
              />
              <h3>{infoPersonality?.label}</h3>
              <p>
                <SafetyOutlined style={{ color: "green", padding: "0 5px" }} />
                <b>{infoPersonality?.role}</b> Role
              </p>
            </div>
            <h4>
              <b>{infoPersonality?.role}</b> Personalities
            </h4>
            {otherTypes?.map((val, idx) => (
              <div className={styles.otherPersonality} key={idx}>
                <img style={{ width: "100%" }} src={val?.avatar.src} alt="" />
                <h3>{val?.label}</h3>
                <p>
                  <SafetyOutlined
                    style={{ color: "green", padding: "0 5px" }}
                  />
                  <b style={{ color: "#572c0e" }}>{val?.role}</b> Role
                </p>
              </div>
            ))}
          </Col>
        </Row>
        <Divider />
        <div className={styles.recommendJob}>
          <p>
            <StarFilled style={{ color: "#ffd800", paddingBottom: "25px" }} />{" "}
            {category?.name}
          </p>
          <Row gutter={10} style={{ paddingBottom: "25px" }}>
            {category?.jobs !== 0 &&
              category?.jobs.slice(0, 3).map((val) => (
                <Col span={8} key={val?.id}>
                  <Card value={val} />
                </Col>
              ))}
          </Row>
          <p>
            <StarFilled style={{ color: "#ffd800", paddingBottom: "25px" }} />{" "}
            {category?.name}
          </p>
          <Row gutter={10}>
            {category?.jobs !== 0 &&
              category?.jobs.slice(0, 3).map((val) => (
                <Col span={8} key={val?.id}>
                  <Card value={val} />
                </Col>
              ))}
          </Row>
        </div>
      </div>
    </>
  );
};

Result.Layout = MainLayout;
export default Result;
