import CardCompany from "@/components/CardCompany/CardCompany";
import SearchInput from "@/components/SearchInput/SearchInput";
import MainLayout from "@/layout/main";
import { Col, Input, Row } from "antd";
import React, { useEffect, useState } from "react";
import { employerService } from "../../../services/employerService";
import styles from "./topEmployers.module.scss";

const TopEmployers = () => {
  const [employerList, setEmployerList] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await employerService.getAll();
        setEmployerList(data.data);
      } catch (error) {}
    })();
  }, []);
  return (
    <div className={styles.topEmployers}>
      <div className={styles.container}>
        <div className={styles.main}>
          <SearchInput placeholder=" Tìm kiếm nhà tuyển dụng..." />
          <Row gutter={[25, 35]} className={styles.list}>
            {employerList?.map((value) => (
              <Col key={value.id} xs={24} sm={12} lg={8}>
                <CardCompany data={value} />
              </Col>
            ))}
            {/* <Col xs={24} sm={12} lg={8}>
              <CardCompany />
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <CardCompany />
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <CardCompany />
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <CardCompany />
            </Col>
            <Col xs={24} sm={12} lg={8}>
              <CardCompany />
            </Col> */}
          </Row>
        </div>
      </div>
    </div>
  );
};

TopEmployers.Layout = MainLayout;
export default TopEmployers;
