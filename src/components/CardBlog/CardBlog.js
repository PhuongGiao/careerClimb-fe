import React from "react";
import styles from "./cardBlog.module.scss";
import blog1 from "../../../public/blog1.jpg";
import { RightOutlined } from "@ant-design/icons";
import moment from "moment";
import { useRouter } from "next/router";

const CardBlog = ({ value }) => {
  const router = useRouter();
  return (
    <div className={styles.item}>
      <div className={styles.content}>
        <div className={styles.img}>
          <img src={value.image} />
        </div>
        <div className={styles.text}>
          <span style={{ fontSize: "10px", color: "grey" }}>
            {moment(value.createdAt).format("DD MMMM YYYY")}
          </span>
          <div className={styles.titleText}>{value.title}</div>
          <div className={styles.intro}>
            <p>{value.content}</p>
          </div>
        </div>
        <div
          className={styles.button}
          onClick={() => router.push(`/blog/${value.id}`)}
        >
          <span>
            Read more
            <RightOutlined style={{ fontSize: "5px", padding: "5px" }} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardBlog;
