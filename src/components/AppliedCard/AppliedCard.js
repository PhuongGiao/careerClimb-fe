import React, { useState } from "react";
import styles from "./appliedCard.module.scss";
import { Button, Col, Modal, Row, Tag } from "antd";
import { useRouter } from "next/router";
import accImg from "./../../../public/accImg.jpeg";
// import error from "../../../public/error.png";
import happy from "../../../public/happy.jpeg";
import unhappy from "../../../public/unhappy.jpeg";
import moment from "moment";

const AppliedCard = ({ value }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resultOpen, setResultOpen] = useState(false);
  const [cv, setCv] = useState();
  const [result, setResult] = useState();
  const router = useRouter();
  const showModal = (val) => {
    setIsModalOpen(true);
    setCv(val.CV);
  };
  const showResult = (val) => {
    setResultOpen(true);
    setResult(val);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleOkResult = () => {
    setResultOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleCancelResult = () => {
    setResultOpen(false);
  };
  const statusSwitch = (param) => {
    console.log("🚀 ~ file: AppliedCard.js:38 ~ statusSwitch ~ param:", param);
    switch (param?.status) {
      case 2:
        // return "Đã xem";
        return (
          <div className={styles.button}>
            <div style={{ background: "blue" }} className={styles.circle}></div>
            <p className={styles.highlightBut} disabled>
              Đã xem
            </p>
          </div>
        );
      case 3:
        // return "Đã trúng tuyển";
        return (
          <div className={styles.button}>
            {/* <div
              style={{ background: "green" }}
              className={styles.circle}
            ></div> */}
            <Button
              onClick={() => showResult(param)}
              className={styles.highlightBut}
              type="primary"
              style={{
                color: "#ffffff",
                padding: "0 20px",
                background: "green",
              }}
            >
              Đã trúng tuyển
            </Button>
          </div>
        );
      case 5:
        // return "Đã trúng tuyển";
        return (
          <div className={styles.button}>
            {/* <div
              style={{ background: "green" }}
              className={styles.circle}
            ></div> */}
            <Button
              onClick={() => showResult(param)}
              className={styles.highlightBut}
              type="primary"
              style={{
                color: "#ffffff",
                padding: "0 20px",
                background: "green",
              }}
            >
              Đã trúng tuyển
            </Button>
          </div>
        );
      case 4:
        // return "Đã từ chối";
        return (
          <div className={styles.button}>
            {/* <div
            style={{ background: "green" }}
            className={styles.circle}
          ></div> */}
            <Button
              onClick={() => showResult(param)}
              className={styles.highlightBut}
              type="primary"
              style={{
                color: "red",
                padding: "0 20px",
                background: "#ffffff",
                border: "1px solid red",
              }}
            >
              Đã bị từ chối
            </Button>
          </div>
        );
      default:
        // return "Đang đợi";
        return (
          <div className={styles.button}>
            <div style={{ background: "red" }} className={styles.circle}></div>
            <p className={styles.highlightBut} disabled>
              Đang đợi
            </p>
          </div>
        );
    }
  };

  return (
    <>
      <Col key={value.id} span={8}>
        <div className={styles.card}>
          <div
            className={styles.image}
            onClick={() => router.push(`jobs-list/${value?.id}`)}
          >
            <img
              src={value?.Job?.User?.employerDetail?.image || accImg.src}
              alt=""
            />
          </div>
          <div className={styles.content}>
            <h4 onClick={() => router.push(`jobs-list/${value?.Job?.id}`)}>
              {value?.Job?.name}
            </h4>
            <p
              onClick={() =>
                router.push(`top-employers/${value?.Job?.User?.id}`)
              }
            >
              {value?.Job?.User?.employerDetail?.name}
            </p>
            <p onClick={() => showModal(value)}>Mẫu CV: {value?.CV?.cvName}</p>
            {statusSwitch(value)}
          </div>
        </div>
      </Col>

      {/* </Col> */}
      <Modal
        title="HỒ SƠ CỦA BẠN"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <div style={{ lineHeight: 2 }}>
          <div className={styles.info}>
            <b className={styles.title}>Tên ứng viên</b> <p>{cv?.name}</p>
          </div>
          <div className={styles.info}>
            <b className={styles.title}>Tên CV</b> <p>{cv?.cvName}</p>
          </div>
          <div className={styles.info}>
            <b className={styles.title}>Email</b> <p>{cv?.email}</p>
          </div>
          <div className={styles.info}>
            <b className={styles.title}>Số điện thoại </b>
            <p>{cv?.phone}</p>
          </div>
          <div className={styles.info}>
            <b className={styles.title}>Lời giới thiệu</b>
            <p>{cv?.introduction || "Không có lời giới thiệu"}</p>
          </div>
          <div className={styles.info}>
            <b className={styles.title}>CV của ứng viên </b>
            <Button
              type="primary"
              className={styles.button}
              target="_blank"
              href={cv?.cv}
            >
              Xem CV
            </Button>
          </div>
        </div>
      </Modal>
      <Modal
        open={resultOpen}
        onOk={handleOkResult}
        onCancel={handleCancelResult}
        footer={[]}
      >
        {result?.status === 3 || result?.status === 5 ? (
          <div className={styles.notification}>
            {/* <img src={success.src} /> */}
            <div className={styles.imgNoti}>
              <img src={happy.src} alt="" />
            </div>
            <h4 style={{ color: "green" }}>
              Chúc mừng bạn đã trúng tuyển !!!{" "}
            </h4>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
              }}
            >
              <p>Thông tin của người hướng dẫn phỏng vấn</p>
              <p>
                <b>Họ và tên:</b> {result?.intructorName}
              </p>
              <p>
                <b>Email:</b> {result?.intructorEmail}
              </p>
              <p>
                <b>Số điện thoại:</b> {result?.intructorPhone}
              </p>
            </div>
          </div>
        ) : (
          <div className={styles.notification}>
            <div className={styles.imgNoti}>
              <img src={unhappy.src} alt="" />
            </div>
            <h4 style={{ color: "red" }}>Uh Oh</h4>
            <p>Bạn không được ứng tuyển công việc này...</p>
            <div>
              <Button type="primary">Khám phá công việc mới</Button>
            </div>
          </div>
        )}
        {}
      </Modal>
    </>
    // <></>
  );
};

export default AppliedCard;
