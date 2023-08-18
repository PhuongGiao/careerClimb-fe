import {
  HeartFilled,
  HeartOutlined,
  HeartTwoTone,
  HomeOutlined,
} from "@ant-design/icons";
import { Button, Tag } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./card.module.scss";
import ApplyModal from "../ApplyModal/ApplyModal";
import WarningModal from "../WarningModal/WarningModal";
import { useSelector } from "react-redux";
import accImg from "./../../../public/accImg.jpeg";

const Card = ({ value }) => {
  let user = useSelector((state) => state.userReducer.user);
  const router = useRouter();
  const [isSaved, setisSaved] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState(false);

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
  console.log(value);
  return (
    <div className={styles.card}>
      <div
        className={styles.image}
        onClick={() => router.push(`/jobs-list/${value?.id}`)}
      >
        <img src={value?.User?.employerDetail?.image || accImg.src} alt="" />
      </div>
      <div className={styles.content}>
        <h4 onClick={() => router.push(`/jobs-list/${value?.id}`)}>
          {value?.name}
        </h4>
        <p onClick={() => router.push(`/top-employers/${value?.User?.id}`)}>
          {value?.User.employerDetail?.name}
        </p>
        <div className={styles.info}>
          <Tag className={styles.tag}>{value?.Experience?.name}</Tag>
          {value?.Locations?.length > 1 ? (
            <Tag className={styles.tag}>Nhiều khu vực</Tag>
          ) : (
            <Tag className={styles.tag}>{value?.Locations[0]?.name}</Tag>
          )}
          <Tag className={styles.tag}>
            {value?.Salary?.name || "Thương lượng"}
          </Tag>
        </div>
        <div className={styles.button}>
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
            style={{ border: 0, boxShadow: "none", width: "150px !important" }}
            onClick={() => (user ? setSaved(!saved) : setOpen(true))}
            disabled={user?.isCandidate === false}
          >
            {saved ? <HeartFilled /> : <HeartOutlined />}
          </Button>
        </div>
        <ApplyModal
          open={open}
          handleOk={handleOk}
          handleCancel={handleCancel}
          loading={loading}
          job={value}
          user={user}
        />
      </div>
    </div>
  );
};

export default Card;
