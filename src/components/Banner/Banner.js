import React, { useState } from "react";
import styles from "./banner.module.scss";
import banner from "./../../../public/banner.jpg";
import { Divider, Typography } from "antd";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.bannerContent}>
            <div className={styles.title}>
              <Divider
                style={{
                  minWidth: "15%",
                  width: "15%",
                  background: "#572c0e",
                  height: "5px",
                }}
              />
              <Typography
                // className={styles.titleBanner}
                style={{ fontSize: "20px", margin: "0 5px" }}
              >
                Discover new Oppertinies
              </Typography>
            </div>
            <div className={styles.content}>
              <Typography className={styles.text}>
                Stablished since 2023
              </Typography>
              <div>
                <Typography
                  className={styles.introText}
                  style={{
                    fontWeight: 300,
                    // fontSize: "25px",
                    fontFamily: "Tilt Neon",
                    marginBottom: "20px",
                  }}
                >
                  Find Your Dream Job <br />{" "}
                  <b>Explore New Career Opportunities</b>
                </Typography>
                <Typography
                  style={{
                    fontWeight: 500,
                    color: "#d3d3d3",
                    fontSize: "12px",
                  }}
                >
                  Say goodbye to endless job applications and hello to targeted
                  job search - save time and effort to find job opportunities
                  that match your skills, experience, and career goals.
                </Typography>
              </div>
            </div>
          </div>
          <div className={styles.imageBanner}></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
