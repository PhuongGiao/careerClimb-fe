import { SearchOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import styles from "./searchInput.module.scss";
const SearchInput = ({ placeholder, onSearch }) => {
  const Search = Input.Search;
  return (
    <div className={styles.searchInput}>
      <Row className={styles.searchInput}>
        <Form
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Col span={24}>
            <Form.Item name="searchInput" style={{ width: "100%", margin: 0 }}>
              <Search placeholder={placeholder} onSearch={onSearch} />
            </Form.Item>
          </Col>
        </Form>
      </Row>
    </div>
  );
};

export default SearchInput;
