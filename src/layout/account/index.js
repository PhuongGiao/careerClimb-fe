import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";
import styles from "./accountLayout.module.scss";

const AccountLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div style={{ minHeight: "80vh" }}>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export default AccountLayout;
