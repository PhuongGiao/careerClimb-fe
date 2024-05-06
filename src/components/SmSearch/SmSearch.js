import {
  BulbOutlined,
  DollarOutlined,
  HomeOutlined,
  SortAscendingOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import { Checkbox, Menu } from "antd";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { jobService } from "../../../services/jobService";
import { openNotification } from "../Notification";
import styles from "./smSearch.module.scss";
import qs from "query-string";
const { SubMenu } = Menu;

const SmSearch = ({ setKey, key }) => {
  const router = useRouter();
  const params = useSearchParams();
  const [options, setOptions] = useState([]);

  const onChangeLevel = (checkedValues) => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updateQuery = {
      ...currentQuery,
      level: checkedValues,
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
  const onChangeExp = (checkedValues) => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updateQuery = {
      ...currentQuery,
      experience: checkedValues,
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
  const onChangeLocation = (checkedValues) => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updateQuery = {
      ...currentQuery,
      location: checkedValues,
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
  const onChangeCate = (checkedValues) => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updateQuery = {
      ...currentQuery,
      category: checkedValues,
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
  const onChangeSalary = (checkedValues) => {
    let currentQuery = {};
    if (params) {
      currentQuery = qs.parse(params.toString());
    }
    const updateQuery = {
      ...currentQuery,
      salary: checkedValues,
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
  useEffect(() => {
    (async () => {
      try {
        const { data } = await jobService.getJobOption();
        setOptions(data);
      } catch (error) {
        openNotification("error", "Please try again!!!");
      }
    })();
  }, []);

  return (
    <div className={styles.smSearch}>
      <div className={styles.title}>
        <h4>Lọc tìm kiếm </h4>
        <p className={styles.button}>Đặt lại</p>
      </div>
      <Menu
        // openKeys={["sub1", "sub2", "sub3", "sub4", "sub5"]}
        // defaultOpenKeys={["sub1", "sub2", "sub3", "sub4", "sub5"]}
        theme="light"
        // defaultSelectedKeys={["1"]}
        mode="inline"
        style={{ borderInlineEnd: 0 }}
      >
        <SubMenu
          className={styles.submenu}
          eventkey="sub1"
          key="sub1"
          icon={<SortAscendingOutlined />}
          title="Loại công việc"
        >
          <Checkbox.Group
            key="checkbox1"
            defaultValue={qs.parse(params.toString())["level"]}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
            onChange={onChangeLevel}
            // defaultValue={JSON.parse(router?.query?.level)}
          >
            {options?.levels?.map((value, idx) => (
              <Menu.Item key={idx}>
                <Checkbox value={value.id}>{value.name}</Checkbox>
              </Menu.Item>
            ))}
          </Checkbox.Group>
        </SubMenu>
        <SubMenu
          className={styles.submenu}
          eventkey="sub2"
          key="sub2"
          icon={<BulbOutlined />}
          title="Kinh nghiệm"
        >
          <Checkbox.Group
            defaultValue={qs.parse(params.toString())["experience"]}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
            onChange={onChangeExp}
          >
            {options?.experiences?.map((value, idx) => (
              <Menu.Item key={idx}>
                <Checkbox value={value.id}>{value.name}</Checkbox>
              </Menu.Item>
            ))}
          </Checkbox.Group>
        </SubMenu>
        <SubMenu
          className={styles.submenu}
          eventkey="sub3"
          key="sub3"
          icon={<HomeOutlined />}
          title="Thành phố"
        >
          <Checkbox.Group
            defaultValue={qs.parse(params.toString())["location"]}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
            onChange={onChangeLocation}
          >
            {options?.locations?.map((value, idx) => (
              <Menu.Item key={idx}>
                <Checkbox value={value.id}>{value.name}</Checkbox>
              </Menu.Item>
            ))}
          </Checkbox.Group>
        </SubMenu>
        <SubMenu
          className={styles.submenu}
          eventkey="sub4"
          key="sub4"
          icon={<UnorderedListOutlined />}
          title="Ngành nghề"
        >
          <Checkbox.Group
            defaultValue={qs.parse(params.toString())["category"]}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
            onChange={onChangeCate}
          >
            {options?.categories?.map((value, idx) => (
              <Menu.Item key={idx}>
                <Checkbox value={value.id}>{value.name}</Checkbox>
              </Menu.Item>
            ))}
          </Checkbox.Group>
        </SubMenu>
        <SubMenu
          className={styles.submenu}
          eventkey="sub5"
          key="sub5"
          icon={<DollarOutlined />}
          title="Mức lương"
        >
          <Checkbox.Group
            defaultValue={qs.parse(params.toString())["salary"]}
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
            }}
            onChange={onChangeSalary}
          >
            {options?.salaries?.map((value, idx) => (
              <Menu.Item key={idx}>
                <Checkbox value={value.id}>{value.name}</Checkbox>
              </Menu.Item>
            ))}
          </Checkbox.Group>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default SmSearch;
