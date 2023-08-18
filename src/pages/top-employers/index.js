import CardCompany from "@/components/CardCompany/CardCompany";
import SearchInput from "@/components/SearchInput/SearchInput";
import MainLayout from "@/layout/main";
import { Col, Input, Row } from "antd";
import React, { useEffect, useState } from "react";
import { employerService } from "../../../services/employerService";
import styles from "./topEmployers.module.scss";
import { jobService } from "../../../services/jobService";
import { userService } from "../../../services/userServices";
import { openNotification } from "@/components/Notification";

const TopEmployers = () => {
  // const [employerList, setEmployerList] = useState();x
  const [employers, setEmployers] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { data } = await employerService.getAll();
  //       const { data: employers } = await userService.getAll();
  //       setEmployerList(data.data);
  //       setEmployers(data.employers);
  //     } catch (error) {}
  //   })();
  // }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await userService.getAll();
        // data?.data.map((value) => {
        //   if (!value?.isCandidate) {

        //     setEmployers(value);
        //   }
        // });
        const result = data?.data?.filter(
          (value) => value?.isCandidate === false
        );
        setEmployers(result);
      } catch (error) {
        openNotification("error", "Something went wrong !!!");
      }
    })();
  }, []);
  return (
    <div className={styles.topEmployers}>
      <div className={styles.container}>
        <div className={styles.main}>
          <SearchInput placeholder=" Tìm kiếm nhà tuyển dụng..." />
          <Row gutter={[25, 35]} className={styles.list}>
            {employers?.map((value) => (
              <Col key={value?.id} xs={24} sm={12} lg={8}>
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
