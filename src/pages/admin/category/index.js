import { openNotification } from "@/components/Notification";
import SearchInput from "@/components/SearchInput/SearchInput";
import AdminLayout from "@/layout/admin";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import { categoryService } from "../../../../services/categoryService";
import styles from "./category.module.scss";
const Category = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [key, setKey] = useState("");
  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Số lượng",
      dataIndex: "amount",
      key: "amount",
      render: (_, { amount }) => (
        <>{amount ? <p>{amount?.name}</p> : <p>Khác</p>}</>
      ),
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (_, { createdAt }) => (
        <>{createdAt ? <p>{createdAt?.name}</p> : <p>Khác</p>}</>
      ),
    },

    {
      title: "Ngày cập nhập",
      dataIndex: "updatedAt",
      key: "updatedAt",
      render: (_, { updatedAt }) => (
        <>{updatedAt ? <p>{updatedAt?.name}</p> : <p>Khác</p>}</>
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
      <SearchInput
        placeholder="Nhập tên ngành nghề..."
        onSearch={handleSearch}
      />
      <Table columns={columns} dataSource={categoryList} />
    </div>
  );
};
Category.Layout = AdminLayout;
export default Category;
