import {
  FacebookOutlined,
  HomeOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  MailOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Button, Tag } from "antd";
import React from "react";
import styles from "./smCardCom.module.scss";
import { useRouter } from "next/router";
import accImg from "./../../../public/accImg.jpeg";

const SmCardCom = ({ data }) => {
  const router = useRouter();
  return (
    <div className={styles.smCardCom}>
      <div className={styles.cardCompany}>
        <div className={styles.infoImage}>
          <div className={styles.logo}>
            <img src={data?.employerDetail?.image || accImg.src} alt="" />
          </div>
        </div>
        <div className={styles.info}>
          <h4 style={{ fontSize: "14px" }}>
            {data?.User?.employerDetail?.name || data?.employerDetail?.name}
          </h4>
        </div>
      </div>
      <div className={styles.location}>
        <p>
          <HomeOutlined style={{ fontSize: "24px", padding: "0 10px" }} />
          {data?.User?.employerDetail?.address || data?.employerDetail?.address}
        </p>
      </div>
      <div className={styles.location}>
        <p>
          <MailOutlined style={{ fontSize: "24px", padding: "0 10px" }} />
          {data?.User?.email || data?.email}
        </p>
      </div>
      {/* <div className={styles.socialMedia}>
        <h4>Liên hệ</h4>
        <div>
          <Button shape="square">
            <FacebookOutlined />
          </Button>
          <Button shape="square">
            <InstagramOutlined />
          </Button>
          <Button shape="square">
            <LinkedinOutlined />
          </Button>
          <Button shape="square">
            <YoutubeOutlined />
          </Button>
        </div>
      </div> */}
    </div>
  );
};

export default SmCardCom;
