import { openNotification } from "@/components/Notification";
import SmCardCom from "@/components/SmCardCom/SmCardCom";
import MainLayout from "@/layout/main";
import { Button, Col, Row } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { employerService } from "../../../services/employerService";
import { jobService } from "../../../services/jobService";
import styles from "./employerDetail.module.scss";
import Card from "@/components/Card/Card";
import { userService } from "../../../services/userServices";

const EmployerDetail = () => {
  const router = useRouter();
  const id = router.query.id;
  const [employer, setEmployer] = useState({});
  const [jobs, setJobs] = useState([]);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(6);
  const [jobsByEmployer, setJobsByEmployer] = useState();

  // useEffect(() => {
  //   id &&
  //     (async () => {
  //       try {
  //         const [{ data: employer }, { data: jobs }] = await Promise.all([
  //           userService.getDetail(id),
  //           jobService.getJobByEmployerPage(id),
  //         ]);
  //         console.log(employer.data);
  //         setEmployer(employer.data);
  //         setJobs(jobs.data);

  //         // setJobsByEmployer(jobsByEmployer.data);
  //       } catch (error) {
  //         openNotification("error", error);
  //       }
  //     })();
  // }, [id]);
  useEffect(() => {
    id &&
      (async () => {
        try {
          // const { data } = await userService.getDetail(id);
          const [{ data: employer }, { data: jobs }] = await Promise.all([
            userService.getDetail(id),
            jobService.getJobByEmployerPage(id),
          ]);
          setEmployer(employer);
          setJobs(jobs.data);
        } catch (error) {
          openNotification("error", error);
        }
      })();
  }, [id]);
  return (
    <div className={styles.id}>
      <div className={styles.container}>
        <div className={styles.main}>
          <Row gutter={[50, 0]}>
            <Col lg={8}>
              <div className={styles.infoCompany}>
                <SmCardCom data={employer} />
                <div className={styles.comments}>
                  {/* <div className={styles.title}>Bình luận</div> */}
                </div>
              </div>
            </Col>
            <Col
              lg={16}
              style={{
                lineHeight: 2.2,
                boxShadow:
                  "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                padding: "25px 30px",
              }}
            >
              <h2>{employer?.employerDetail?.name}</h2>
              <h3>Giới thiệu về công ty</h3>
              <p>{employer?.employerDetail?.description}</p>
            </Col>
          </Row>
          <div className={styles.title}>
            <h1>Công ty đang ứng tuyển</h1>
          </div>
          <Row
            gutter={[30, 30]}
            span={24}
            style={{
              margin: "10px 0",
              lineHeight: 2.2,
              // justifyContent: "space-between",
              padding: "25px 0px",
            }}
          >
            {jobs?.slice(minIndex, maxIndex).map((value) => (
              <Col key={value.id} span={8}>
                <Card value={value} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};
EmployerDetail.Layout = MainLayout;
export default EmployerDetail;
