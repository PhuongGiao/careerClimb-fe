import {
  HeartFilled,
  HeartOutlined,
  HeartTwoTone,
  HomeOutlined,
} from "@ant-design/icons";
import { Button, Tag } from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import styles from "./cardWithEmployer.module.scss";
import ApplyModal from "../ApplyModal/ApplyModal";
import WarningModal from "../WarningModal/WarningModal";
import { useSelector } from "react-redux";
import accImg from "./../../../public/accImg.jpeg";

const CardWithEmployer = ({ value }) => {
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

  return (
    <div className={styles.smCardCom}>
      <div className={styles.cardCompany}>
        <div className={styles.infoImage}>
          <div className={styles.logo}>
            <img
              src={value?.User?.employerDetail?.image || accImg.src}
              alt=""
            />
          </div>
        </div>
        <div className={styles.info}>
          <h4
            onClick={() =>
              router.push(`/top-employers/${value?.User?.employerDetail?.id}`)
            }
            style={{ fontSize: "14px" }}
          >
            {value?.User?.employerDetail?.name}
          </h4>
        </div>
      </div>
      <div className={styles.location}>
        <h4>Địa chỉ</h4>
        <p>
          <HomeOutlined />
          {value?.address || value?.User?.employerDetail?.address}
        </p>
      </div>
      <div className={styles.category} style={{ margin: "15px 0" }}>
        <h4>Địa chỉ email</h4>
        <div>
          <h4>{value?.User?.email}</h4>
        </div>
      </div>
    </div>
  );
};

export default CardWithEmployer;
