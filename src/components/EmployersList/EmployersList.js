import CardCompany from "@/components/CardCompany/CardCompany";
import SearchInput from "@/components/SearchInput/SearchInput";
import MainLayout from "@/layout/main";
import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import styles from "./employersList.module.scss";
import { employerService } from "../../../services/employerService";
import { openNotification } from "@/components/Notification";
import { userService } from "../../../services/userServices";

const EmployersList = () => {
  const [employerList, setEmployerList] = useState();
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { data } = await employerService.getAll();
  //       setEmployerList(data?.data);
  //     } catch (error) {
  //       openNotification("error", "Please try again!!!");
  //     }
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
        setEmployerList(result);
      } catch (error) {
        openNotification("error", "Something went wrong !!!");
      }
    })();
  }, []);
  return (
    <div className={styles.employersList}>
      <div className={styles.container}>
        <div className={styles.main}>
          {/* <SearchInput placeholder=" Tìm kiếm nhà tuyển dụng..." /> */}
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
export default EmployersList;
