import { Col, Pagination, Row } from "antd";
import React, { useEffect, useState } from "react";
import { categoryService } from "../../../services/categoryService";
import { employerService } from "../../../services/employerService";
import Card from "../Card/Card";
import CardCategory from "../CardCategory/CardCategory";
import { openNotification } from "../Notification";
import styles from "./category.module.scss";

const Category = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryList, setcategoryList] = useState([]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  useEffect(() => {
    (async () => {
      try {
        const { data } = await categoryService.getAll("");
        setcategoryList(data.data);
      } catch (error) {
        openNotification("error", "Please try again");
      }
    })();
  }, []);
  return (
    <div className={styles.category}>
      <div className={styles.container}>
        <div className={styles.main}>
          <Row gutter={[30, 30]}>
            {categoryList?.map((value, idx) => (
              <Col xs={24} md={12} lg={6} key={idx}>
                <CardCategory value={value} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Category;
