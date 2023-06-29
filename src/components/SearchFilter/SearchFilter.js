import { FilterOutlined } from "@ant-design/icons";
import { Button, Col, Drawer, Form, Input, Row } from "antd";
import React, { useEffect, useState } from "react";
import { levelService } from "../../../services/levelService";
import SmSearch from "../SmSearch/SmSearch";
import styles from "./searchFilter.module.scss";

const SearchFilter = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <Row className={styles.searchFilter}>
      <Form
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <Col xs={20} md={21}>
          <Form.Item name="searchInput" style={{ width: "100%" }}>
            <Input placeholder="Tìm kiếm công việc..." />
          </Form.Item>
        </Col>
        <Col xs={4} md={3}>
          <Button className={styles.button} type="primary" onClick={showDrawer}>
            <FilterOutlined />
            <span className={styles.span}>Filter</span>
          </Button>
        </Col>
      </Form>
      <Drawer
        title="Tìm kiếm"
        closable={false}
        onClose={onClose}
        open={open}
        extra={<Button onClick={onClose}>Cancel</Button>}
      >
        <SmSearch />
      </Drawer>
    </Row>
  );
};

export default SearchFilter;
