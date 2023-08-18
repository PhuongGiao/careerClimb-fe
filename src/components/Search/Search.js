import { Button, Col, Form, Input, Row, Select } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { categoryService } from "../../../services/categoryService";
import { levelService } from "../../../services/levelService";
import { locationService } from "../../../services/locationService";
import { openNotification } from "../Notification";
import styles from "./search.module.scss";
const { Search: SearchAnt } = Input;
const Search = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [category, setCategory] = useState();
  const [position, setPosition] = useState();
  const [level, setLevel] = useState();
  const [levelOptions, setLevelOptions] = useState();
  const [categoryOptions, setCategoryOptions] = useState();
  const [positionOptions, setPositionOptions] = useState();
  const [key, setKey] = useState({
    searchText: "",
    level: null,
    category: null,
    position: null,
  });
  const onChangeName = (e) => {
    setKey((key) => ({ ...key, searchText: e.target.value }));
  };
  const onChangeCategory = (value) => {
    setKey((key) => ({ ...key, category: JSON.stringify(value) }));
  };
  const onChangePosition = (value) => {
    setKey((key) => ({ ...key, position: JSON.stringify(value) }));
  };
  const onChangeLevel = (value) => {
    setKey((key) => ({ ...key, level: JSON.stringify(value) }));
  };
  const handleClick = () => {
    router.push({
      pathname: "jobs-list",
      query: {
        ...key,
      },
    });
  };
  useEffect(() => {
    (async () => {
      try {
        const [{ data: levels }, { data: categories }, { data: positions }] =
          await Promise.all([
            levelService.getAll(),
            categoryService.getAll(""),
            locationService.getAll(),
          ]);
        setLevelOptions(
          levels?.data.map((val) => ({
            id: val.id,
            text: val.name,
            value: val.name,
          }))
        );
        setCategoryOptions(
          categories?.data.map((val) => ({
            id: val.id,
            text: val.name,
            value: val.name,
          }))
        );
        setPositionOptions(
          positions?.data.map((val) => ({
            id: val.id,
            text: val.name,
            value: val.name,
          }))
        );
      } catch (error) {
        openNotification("error", "Please try again!!!");
      }
    })();
  }, []);
  return (
    <div className={styles.search}>
      <div className={styles.container}>
        <div className={styles.main}>
          <Form className={styles.form} size="large">
            <Row
              justify="space-between"
              style={{
                width: "100%",
              }}
            >
              <Col xs={24} sm={11} lg={5}>
                <Form.Item className={styles.input} size="large" name="jobname">
                  <Input
                    className={styles.inputField}
                    onChange={onChangeName}
                    placeholder="Nhập tên công việc..."
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={11} lg={4}>
                <Form.Item className={styles.input} name="category">
                  <Select
                    onChange={onChangeCategory}
                    className={styles.borderStyle}
                    bordered={false}
                    placeholder="Ngành nghề"
                  >
                    {categoryOptions?.map((value) => (
                      <Select.Option key={value?.id} value={value?.id}>
                        {value?.value}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={11} lg={4}>
                <Form.Item className={styles.input} name="position">
                  <Select
                    onChange={onChangePosition}
                    className={styles.borderStyle}
                    bordered={false}
                    placeholder="Khu vực"
                  >
                    {positionOptions?.map((value) => (
                      <Select.Option key={value?.id} value={value?.id}>
                        {value?.value}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xs={24} sm={11} lg={4}>
                <Form.Item className={styles.input} name="level">
                  <Select
                    onChange={onChangeLevel}
                    style={{ color: "red !important" }}
                    className={styles.borderStyle}
                    bordered={false}
                    placeholder="Cấp bậc"
                  >
                    {levelOptions?.map((value) => (
                      <Select.Option key={value?.id} value={value?.id}>
                        {value?.value}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col
                xs={24}
                sm={24}
                lg={3}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <Button
                  onClick={handleClick}
                  className={styles.button}
                  type="submit"
                >
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Search;
