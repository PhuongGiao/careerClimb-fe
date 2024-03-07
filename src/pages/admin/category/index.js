import { openNotification } from "@/components/Notification";
import SearchInput from "@/components/SearchInput/SearchInput";
import AdminLayout from "@/layout/admin";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import { categoryService } from "../../../../services/categoryService";
import styles from "./category.module.scss";
import moment from "moment";
const Category = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [key, setKey] = useState("");
  const showModal = (job) => {
    setIsOpen(true);
    if (!job.id) return;
    setJobSelected(job);
  };
  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Số lượng",
      dataIndex: "jobs",
      key: "jobs",
      render: (_, { jobs }) => (
        <>
          {jobs ? (
            <p style={{ paddingLeft: "25px" }}>{jobs?.length}</p>
          ) : (
            <p>Khác</p>
          )}
        </>
      ),
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (_, { createdAt }) => (
        <>
          {createdAt ? (
            <p>{moment(createdAt).format("DD MMMM YYYY")}</p>
          ) : (
            <p>Khác</p>
          )}
        </>
      ),
    },

    {
      title: "Ngày cập nhập",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (_, { updatedAt }) => (
        <>
          {updatedAt ? (
            <p>{moment(updatedAt).format("DD MMMM YYYY")}</p>
          ) : (
            <p>Khác</p>
          )}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            // onClick={showModal}
            style={{
              background: "#82CD47",
              color: "#fff",
            }}
          >
            <EditOutlined />
          </Button>
          <Button
            style={{
              background: "#FF1E00",
              color: "#fff",
            }}
          >
            <DeleteOutlined />
          </Button>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    (async () => {
      try {
        const { data } = await categoryService.getAll(key);
        setCategoryList(data.data);
      } catch (error) {
        openNotification("error", "Please try again!!!");
      }
    })();
  }, [key]);
  const handleSearch = (searchText) => {
    setKey(searchText);
  };
  return (
    <div className={styles.category}>
      <Button
        style={{
          background: "#82CD47",
          color: "#fff",
          padding: "20px ",
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
        }}
        // onClick={showModal}
      >
        <PlusOutlined />
        Tạo ngành nghề
      </Button>
      {/* <SearchInput
        placeholder="Nhập tên ngành nghề..."
        onSearch={handleSearch}
      /> */}
      <Table columns={columns} dataSource={categoryList} />
    </div>
  );
};
Category.Layout = AdminLayout;
export default Category;
