import CardCompany from "@/components/CardCompany/CardCompany";
import { openNotification } from "@/components/Notification";
import SmCardCom from "@/components/SmCardCom/SmCardCom";
import MainLayout from "@/layout/main";
import { Col, Row } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { blogService } from "../../../services/blogService";
import styles from "./id.module.scss";
import CardWithEmployer from "@/components/CardWithEmployer/CardWithEmployer";

const BlogDetail = () => {
  const router = useRouter();
  const id = router.query.id;
  const [detail, setDetail] = useState({});

  useEffect(() => {
    id &&
      (async () => {
        try {
          const { data } = await blogService.getDetail(id);
          setDetail(data);
        } catch (error) {
          openNotification("error", "Please try again!!!");
        }
      })();
  }, [id]);

  return (
    <div className={styles.id}>
      <div className={styles.container}>
        <div className={styles.main}>
          <Row gutter={[20, 0]}>
            <Col lg={16} style={{ lineHeight: 2.2 }}>
              <h2>{detail?.title}</h2>
              <span style={{ color: "#a9a9a9" }}>
                {moment(detail?.createdAt).format("DD MMMM YYYY")}
              </span>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  margin: "10px 0",
                }}
              >
                <img src={detail?.image} />
              </div>
              <p>{detail?.content}</p>
            </Col>
            <Col lg={8}>
              <div className={styles.infoCompany}>
                {/* <SmCardCom data={detail} /> */}
                <CardWithEmployer value={detail} />
                <div className={styles.comments}>
                  <div className={styles.title}>Bình luận</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
BlogDetail.Layout = MainLayout;
export default BlogDetail;
