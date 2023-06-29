import { PieChartOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { jobService } from "../../../services/jobService";
import { openNotification } from "../Notification";
import styles from "./cardCategory.module.scss";

const CardCategory = ({ value }) => {
  const router = useRouter();
  return (
    <div
      className={styles.cardCategory}
      onClick={() => router.push(`careers/${value?.id}`)}
    >
      <div>
        <PieChartOutlined className={styles.icon} />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{value?.name}</h3>
        <p className={styles.amount}>
          {value?.jobs?.length !== 0
            ? `Có ${value?.jobs?.length} công việc`
            : "Chưa có công việc nào"}
        </p>
      </div>
    </div>
  );
};

export default CardCategory;
