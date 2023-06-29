import React from "react";
import styles from "./smallBanner.module.scss";
import smallBanner1 from "../../../public/smallBanner1.webp";
import { Button, Typography } from "antd";
import { useRouter } from "next/router";

const SmallBanner = () => {
  const router = useRouter();
  return (
    <div className={styles.smallBanner}>
      <div className={styles.image}>
        <img src={smallBanner1.src} />
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.text}>Stablished since 2023</p>
          <div className={styles.intro}>
            <p
              style={{
                fontWeight: 300,
                fontSize: "20px",
                fontFamily: "Tilt Neon",
                // marginBottom: "20px",
              }}
            >
              Your next big career move is just a click away
            </p>
            <p className={styles.highlightText}>Discover it now!</p>
            <p
              className={styles.secondText}
              style={{
                fontWeight: 500,
                color: "#d3d3d3",
                fontSize: "12px",
              }}
            >
              Whether you&apos;re a recent graduate, a seasoned professional, or
              looking for a career change, these websites can connect you with
              the job of your dreams.
            </p>
          </div>
          <Button
            onClick={() => router.push("/jobs-list")}
            className={styles.button}
          >
            Khám phá việc làm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SmallBanner;
