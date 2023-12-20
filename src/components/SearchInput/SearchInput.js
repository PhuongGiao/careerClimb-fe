import { SearchOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, Row } from "antd";
import React from "react";
import styles from "./searchInput.module.scss";
import qs from "query-string";
import { useSearchParams } from "next/navigation";

const SearchInput = ({ initialvalues, placeholder, onSearch }) => {
  const params = useSearchParams();
  const searchText = qs.parse(params.toString())?.searchText;

  const { Search } = Input;
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
              {/* <Search
                onSearch={onSearch}
                // initialvalues={defaultValue}
                // initialvalues="asd"
                initialValues="asdj"
                // placeholder={placeholder}
              /> */}
              {/* 
              <Input value={searchText || "asd"} /> */}

              <Search
                placeholder={searchText || "input search text"}
                allowClear
                enterButton="Search"
                size="large"
                onSearch={onSearch}
                value={searchText}
              />
            </Form.Item>
          </Col>
        </Form>
      </Row>
    </div>
  );
};

export default SearchInput;
