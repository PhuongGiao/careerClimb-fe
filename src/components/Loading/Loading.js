import React from "react";
import styles from "./loading.module.scss";
import MainLayout from "@/layout/main";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles.customLoader}></div>
    </div>
  );
};
Loading.Layout = MainLayout;
export default Loading;
