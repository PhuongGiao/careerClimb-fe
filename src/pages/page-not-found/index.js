import React from "react";
import styles from "./pageNotFound.module.scss";
import { Col, Row } from "antd";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <section className={styles.page_404}>
      <div className={styles.container}>
        <Row>
          <Col sm={24}>
            <div className={styles.textCenter}>
              <div className={styles.four_zero_four_bg}>
                <h1
                  className={styles.textCenter}
                  style={{ textAlign: "center" }}
                >
                  404
                </h1>
              </div>

              <div className={styles.contant_box_404}>
                <h3 className={styles.h2}>Look like you&apos;re lost</h3>

                <p>the page you are looking for not avaible!</p>
                <Link href="/" className={styles.link_404}>
                  Go to Home
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default PageNotFound;
