import Card from "@/components/Card/Card";
import { openNotification } from "@/components/Notification";
import SearchFilter from "@/components/SearchFilter/SearchFilter";
import SearchInput from "@/components/SearchInput/SearchInput";
import SmSearch from "@/components/SmSearch/SmSearch";
import MainLayout from "@/layout/main";
import { SearchOutlined } from "@ant-design/icons";
import { Col, Pagination, Row, theme } from "antd";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { jobService } from "../../../services/jobService";
import styles from "./jobsList.module.scss";
import { useSearchParams } from "next/navigation";
import qs from "query-string";
import useSearch from "@/components/hooks/useSearch";
import Loading from "@/components/Loading/Loading";

const pageSize = 6;

const JobsList = () => {
  const router = useRouter();
  const params = useSearchParams();
  const { name, level, position, category } = router?.query;
  const { data: jobs, loading } = useSearch(qs.parse(params.toString()));

  const [current, setCurrent] = useState(1);
  const [minIndex, setMinIndex] = useState(0);
  const [maxIndex, setMaxIndex] = useState(6);
  const [key, setKey] = useState({
    name: "",
    level: [],
    experience: [],
    salary: [],
    category: [],
    location: [],
  });
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const handleChange = (page) => {
    setCurrent(page);
    setMinIndex((page - 1) * pageSize), setMaxIndex(page * pageSize);
  };
  const handleSearch = (searchText) => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updateQuery = {
      ...currentQuery,
      searchText: searchText,
    };
    const url = qs.stringifyUrl(
      {
        url: "/jobs-list",
        query: updateQuery,
      },
      {
        skipNull: true,
      }
    );
    router.push(url);
  };

  return (
    <div className={styles.jobsList}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.search}>
            <SearchInput
              placeholder={name ? name : "Tìm kiếm công việc..."}
              onSearch={handleSearch}
            />
            <div className={styles.keys}>
              <div className={styles.eachKey}>
                <SearchOutlined style={{ margin: "0 5px" }} />
                <p>
                  Từ khoá hot: <b className={styles.highLight}>Marketing</b>
                </p>
              </div>
              <div className={styles.eachKey}>
                <SearchOutlined style={{ margin: "0 5px" }} />
                <p>
                  Từ khoá hot: <b className={styles.highLight}>Marketing</b>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.searchRespon}>
            <SearchFilter />
          </div>
          <div className={styles.content}>
            <div className={styles.leftSearch}>
              <SmSearch />
            </div>
            {loading ? (
              <Loading />
            ) : (
              <div className={styles.list}>
                <h3
                  style={{
                    textTransform: "uppercase",
                    color: colorPrimary,
                    padding: "20px 0",
                  }}
                >
                  {jobs?.length} công việc
                </h3>
                <Row gutter={[30, 30]}>
                  {jobs?.slice(minIndex, maxIndex).map((value) => (
                    <Col xs={24} sm={12} key={value.id}>
                      <Card value={value} />
                    </Col>
                  ))}
                </Row>
                {jobs?.length / pageSize > 1 && (
                  <Pagination
                    className={styles.pagination}
                    responsive={true}
                    total={jobs?.length}
                    pageSize={pageSize}
                    onChange={handleChange}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
JobsList.Layout = MainLayout;
export default JobsList;
