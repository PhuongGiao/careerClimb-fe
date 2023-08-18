import { openNotification } from "@/components/Notification";
import SmCardCom from "@/components/SmCardCom/SmCardCom";
import MainLayout from "@/layout/main";
import {
  DollarOutlined,
  HeartFilled,
  HeartOutlined,
  StarOutlined,
  TeamOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { Button, Col, Divider, Row, Space, Tag } from "antd";
import moment from "moment";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { jobService } from "../../../services/jobService";
import styles from "./jobDetail.module.scss";
import ApplyModal from "@/components/ApplyModal/ApplyModal";
import { useSelector } from "react-redux";

const JobDetail = () => {
  let user = useSelector((state) => state.userReducer.user);
  const router = useRouter();
  const id = router.query.id;
  const [job, setJob] = useState();
  const [isSaved, setisSaved] = useState(false);
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  useEffect(() => {
    id &&
      (async () => {
        try {
          const { data } = await jobService.getDetail(id);
          setJob(data);
        } catch (error) {
          openNotification("error", "Please try again!!!");
        }
      })();
  }, [id]);
  return (
    <div className={styles.jobDetail}>
      <div className={styles.container}>
        <div className={styles.main}>
          <Row gutter={[50, 0]}>
            <Col lg={8}>
              <div className={styles.infoCompany}>
                <SmCardCom data={job} />
                <div className={styles.comments}>
                  {/* <div className={styles.title}>Bình luận</div> */}
                </div>
              </div>
            </Col>
            <Col
              lg={16}
              style={{
                lineHeight: 2.2,
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                padding: "25px 30px",
              }}
            >
              <div className={styles.head}>
                <div className={styles.button}>
                  <h2 style={{ textTransform: "uppercase" }}>{job?.name}</h2>
                  <div style={{ display: "flex" }}>
                    <Button
                      type="primary"
                      onClick={showModal}
                      className={styles.highlightBut}
                      disabled={user?.isCandidate === false}
                    >
                      Ứng tuyển ngay
                    </Button>
                    <Button
                      type="link"
                      danger
                      style={{
                        border: 0,
                        boxShadow: "none",
                        width: "150px !important",
                      }}
                      onClick={() => (user ? setSaved(!saved) : setOpen(true))}
                      disabled={user?.isCandidate === false}
                    >
                      {saved ? <HeartFilled /> : <HeartOutlined />}
                    </Button>

                    {/* <Button
                      type="link"
                      danger
                      style={{
                        border: 0,
                        boxShadow: "none",
                        width: "150px !important",
                      }}
                      onClick={() => setisSaved(!isSaved)}
                    >
                      {isSaved ? <HeartFilled /> : <HeartOutlined />}
                    </Button> */}
                  </div>
                </div>
                <span
                  style={{ color: "#a9a9a9" }}
                  onClick={() => router.push(`/careers/${job?.Category?.id}`)}
                >
                  Ngành {job?.Category?.name}
                </span>
              </div>
              <div className={styles.infoJob}>
                <h3
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                  className={styles.titleInfo}
                >
                  Thông tin về việc làm
                </h3>
                <div>
                  <Row style={{ padding: "16px 0" }}>
                    {job?.Locations?.length !== 0 && (
                      <Col
                        span={12}
                        className={styles.infoDiv}
                        style={{ display: "flex" }}
                      >
                        <StarOutlined className={styles.circle} />
                        <div style={{ display: "block" }}>
                          <p className={styles.titleInfo}>Vị trí</p>
                          <Space>
                            {job?.Locations.map((value, idx) => (
                              <Tag
                                className={styles.tags}
                                color="green"
                                key={idx}
                              >
                                {value?.name}
                              </Tag>
                            ))}
                          </Space>
                        </div>
                      </Col>
                    )}
                    <Col span={12} className={styles.infoDiv}>
                      <TrophyOutlined className={styles.circle} />
                      <div>
                        <p className={styles.titleInfo}>Kinh nghiệm </p>
                        <span>{job?.Experience?.name}</span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={12} className={styles.infoDiv}>
                      <TeamOutlined className={styles.circle} />
                      <div>
                        <p className={styles.titleInfo}>Cấp bậc </p>
                        <span>{job?.Level?.name}</span>
                      </div>
                    </Col>
                    <Col span={12} className={styles.infoDiv}>
                      <DollarOutlined className={styles.circle} />
                      <div>
                        <p className={styles.titleInfo}>Mức lương</p>
                        <span>{job?.Salary?.name || "Thương lượng"}</span>
                      </div>
                    </Col>
                  </Row>
                </div>

                <Divider />
                <p className={styles.titleInfo}>Tóm tắt</p>
                <ul style={{ listStyleType: "circle", whiteSpace: "pre-line" }}>
                  <li>{job?.description}</li>
                </ul>
                {/* <span>{job?.description}</span> */}
                <p className={styles.titleInfo}>Yêu cầu</p>
                <ul style={{ listStyleType: "circle", whiteSpace: "pre-line" }}>
                  <li>{job?.requirement}</li>
                </ul>
                {/* <span style={{ listStyleType: "circle" }}>
                  {job?.requirement}
                </span> */}
              </div>
            </Col>
          </Row>
        </div>
        <ApplyModal
          open={open}
          handleOk={handleOk}
          handleCancel={handleCancel}
          loading={loading}
          job={job}
          user={user}
        />
      </div>
    </div>
  );
};
JobDetail.Layout = MainLayout;
export default JobDetail;
