import JobList from "@/components/JobList/JobList";
import { openNotification } from "@/components/Notification";
import MainLayout from "@/layout/main";
import { Col, Pagination, Row } from "antd";
import Card from "@/components/Card/Card";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { categoryService } from "../../../services/categoryService";
import { jobService } from "../../../services/jobService";
import styles from "./categoryDetail.module.scss";
import NoData from "@/components/NoData/NoData";

const pageSize = 6;
const CategoryDetail = () => {
  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(6);
  const [category, setCategory] = useState();
  const handleChange = (page) => {
    setCurrent(page);
    setMinIndex((page - 1) * pageSize), setMaxIndex(page * pageSize);
  };

  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    id &&
      (async () => {
        try {
          const { data } = await categoryService.getDetail(id);
          setCategory(data);
        } catch (error) {
          openNotification("error", "Please try again!!!");
        }
      })();
  }, [id]);
  return (
    <div className={styles.categoryDetail}>
      <div className={styles.container}>
        <div className={styles.category} key={category?.id}>
          <div className={styles.title}>
            <h1>{category?.name}</h1>
          </div>
          <div className={styles.list}>
            <Row gutter={[30, 30]}>
              {category?.jobs?.length === 0 && (
                // <p
                //   style={{
                //     display: "flex",
                //     justifyContent: "center",
                //     width: "100%",
                //   }}
                // >
                //   Chưa có công việc nào
                // </p>
                <NoData />
              )}
              {category &&
                category?.jobs?.length > 0 &&
                category?.jobs
                  ?.slice(minIndex, maxIndex)
                  .map((value, index) => (
                    <Col xs={24} sm={12} key={value.id}>
                      <Card value={value} />
                    </Col>
                  ))}
            </Row>
          </div>
        </div>
        {category?.jobs?.length > 0 && (
          <Pagination
            className={styles.pagination}
            responsive={true}
            total={category?.length}
            pageSize={pageSize}
            onChange={handleChange}
            style={{ padding: " 40px 0" }}
          />
        )}
      </div>
    </div>
  );
};
CategoryDetail.Layout = MainLayout;
export default CategoryDetail;
