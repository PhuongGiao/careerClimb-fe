import Banner from "@/components/Banner/Banner";
import Benefits from "@/components/Benefits/Benefits";
import Category from "@/components/Category/Category";
import Header from "@/components/Header/Header";
import JobList from "@/components/JobList/JobList";
import Search from "@/components/Search/Search";
import SmallBanner from "@/components/SmallBanner/SmallBanner";
import MainLayout from "@/layout/main";
import styles from "@/styles/Home.module.scss";
import { Button, Col } from "antd";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { blogService } from "../../services/blogService";
import { jobService } from "../../services/jobService";
import CardCompany from "@/components/CardCompany/CardCompany";
import EmployersList from "@/components/EmployersList/EmployersList";
import { useSelector } from "react-redux";

const Home = () => {
  let user = useSelector((state) => state.userReducer.user);
  const router = useRouter();
  const [jobList, setJobList] = useState();
  useEffect(() => {
    (async () => {
      const { data } = await jobService.getAll("");
      setJobList(data?.data);
    })();
  }, []);
  return (
    <>
      <Head>
        <title>CareerClimb</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section>
          <Banner />
        </section>
        <section style={{ background: "#f2f2f2" }}>
          <div className={styles.container}>
            <h1
              className={styles.title}
              style={{
                textTransform: "uppercase",
                fontSize: "25px",
                margin: "25px 0",
              }}
            >
              Searching...
            </h1>
          </div>
          <Search />
        </section>
        <section>
          <div className={styles.container}>
            <h1 className={styles.title}>các ngành nghề nổi bật</h1>
          </div>
          <Category />
        </section>
        <section>
          <SmallBanner />
        </section>
        <section>
          <div
            className={styles.container}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1 className={styles.title}>Tin tuyển dụng hấp dẫn</h1>
            <Button onClick={() => router.push("/jobs-list")}>
              Xem tất cả
            </Button>
          </div>
          <JobList data={jobList} />
        </section>
        <section>
          <div
            className={styles.container}
            style={{
              // display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h1 className={styles.title}>Nhà tuyển dụng uy tín</h1>
              <Button onClick={() => router.push("/top-employers")}>
                Xem tất cả
              </Button>
            </div>
            <EmployersList />
          </div>
        </section>
        <section style={{ background: "#f2f2f2" }}>
          <Benefits />
        </section>
      </main>
    </>
  );
};

Home.Layout = MainLayout;
export default Home;
