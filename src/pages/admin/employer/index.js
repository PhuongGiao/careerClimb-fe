import { openNotification } from "@/components/Notification";
import SearchInput from "@/components/SearchInput/SearchInput";
import AdminLayout from "@/layout/admin";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Space, Table, Tag } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { employerService } from "../../../../services/employerService";
import styles from "./employer.module.scss";
import { userService } from "../../../../services/userServices";
const Employer = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [key, setKey] = useState("");
  const onClick = async (id, isActivate) => {
    try {
      await userService.verifyAccount(id, isActivate);
    } catch (error) {
      openNotification(error, "Something went wrong !!!");
    }
  };
  const columns = [
    {
      title: "Hình ảnh",
      dataIndex: "image",
      width: 100,
      key: "image",
      render: (_, { employerDetail }) => (
        <img style={{ width: "100%" }} src={employerDetail?.image} />
      ),
    },
    {
      title: "Tên doanh nghiệp",
      dataIndex: "employerDetail",
      key: "employerDetail",
      render: (_, { employerDetail }) => (
        <>{employerDetail ? <p>{employerDetail?.name}</p> : <p>Khác</p>}</>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (_, { email }) => <>{email ? <p>{email}</p> : <p>Khác</p>}</>,
      // filters: getCateOptions,
      // filterMode: "tree",
      // filterSearch: true,
      // onFilter: (value, record) => record.Category?.name.startsWith(value),
    },
    {
      title: "Địa chỉ",
      dataIndex: "employerDetail",
      key: "employerDetail",
      render: (_, { employerDetail }) => (
        <>{employerDetail ? <p>{employerDetail?.address}</p> : <p>Khác</p>}</>
      ),
    },
    {
      title: "Giới thiệu",
      dataIndex: "employerDetail",
      key: "employerDetail",
      render: (_, { employerDetail }) => (
        <p className={styles.description}>
          {employerDetail ? <p>{employerDetail?.description}</p> : <p>Khác</p>}
        </p>
      ),
    },
    {
      title: "Ngày tạo",
      dataIndex: "employerDetail",
      key: "employerDetail",
      render: (_, { employerDetail }) => (
        <>
          {employerDetail ? (
            <p>{moment(employerDetail?.createdAt).format("DD MMMM YYYY")}</p>
          ) : (
            <p>Khác</p>
          )}
        </>
      ),
    },
    {
      title: "Tình trạng",
      dataIndex: "isActivate",
      key: "isActivate",
      render: (_, isActivate) => (
        <Tag
          style={{ width: "fit-content" }}
          color={isActivate?.isActivate ? "green" : "red"}
          key={isActivate}
        >
          <p>{isActivate?.isActivate ? "Đã xác thực" : "Chưa xác thực"}</p>
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "isActivate",
      render: (_, { isActivate, id }) => (
        <Space size="middle">
          <Button
            disabled={isActivate ? true : false}
            style={{
              background: isActivate ? "#E5E4E2" : "#82CD47",
              color: isActivate ? "#818589		" : "#fff",
              border: isActivate ? "1px solid #C0C0C0	" : "",
            }}
            onClick={() => onClick(id, isActivate)}
          >
            {isActivate ? "Đã xác thực" : "Xác thực"}
          </Button>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    (async () => {
      try {
        const { data } = await userService.getAll();
        const employers = data?.data.filter(
          (user) => user.isCandidate === false
        );
        setListOfUsers(employers);
      } catch (error) {
        openNotification("error", "Please try again!!!");
      }
    })();
  }, [key]);
  return (
    <div className={styles.category}>
      {/* <SearchInput
        placeholder="Nhập tên nhà tuyển dụng..."
        onSearch={handleSearch}
      /> */}
      <Table columns={columns} dataSource={listOfUsers} />
    </div>
  );
};
Employer.Layout = AdminLayout;
export default Employer;
