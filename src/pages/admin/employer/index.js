import { openNotification } from "@/components/Notification";
import SearchInput from "@/components/SearchInput/SearchInput";
import AdminLayout from "@/layout/admin";
import { DeleteOutlined } from "@ant-design/icons";
import { Button, Space, Table } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { employerService } from "../../../../services/employerService";
import styles from "./employer.module.scss";
const Employer = () => {
  const [employerList, setemployerList] = useState([]);
  const [key, setKey] = useState("");

  const handleSearch = (searchText) => {
    setKey(searchText);
  };
  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
      render: (_, { address }) => (
        <>{address ? <p>{address}</p> : <p>Khác</p>}</>
      ),
    },
    {
      title: "Kinh nghiệm",
      dataIndex: "Experience",
      key: "Experience",
      render: (_, { Experience }) => (
        <>{Experience ? <p>{Experience?.name}</p> : <p>Khác</p>}</>
      ),
    },
    {
      title: "Vị trí",
      key: "Locations",
      dataIndex: "Locations",
      //   render: (_, { Locations }) => (
      //     <>
      //       {Locations.map((value) => {
      //         return (
      //           <Tag color="green" key={value.id}>
      //             {value.name.length === 0 ? (
      //               <p>abc</p>
      //             ) : (
      //               <p>{value?.name.toUpperCase()}</p>
      //             )}
      //           </Tag>
      //         );
      //       })}
      //     </>
      //   ),
    },
    {
      title: "Giới thiệu",
      dataIndex: "description",
      key: "description",
      render: (_, { description }) => (
        <>{description ? <p>{description}</p> : <p>Khác</p>}</>
      ),
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (_, { createdAt }) => <p>{moment(createdAt).format("LLL")}</p>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
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
        const { data } = await employerService.getAll(key);
        setemployerList(data.data);
      } catch (error) {
        openNotification("error", "Please try again!!!");
      }
    })();
  }, [key]);
  return (
    <div className={styles.category}>
      <SearchInput
        placeholder="Nhập tên nhà tuyển dụng..."
        onSearch={handleSearch}
      />
      <Table columns={columns} dataSource={employerList} />
    </div>
  );
};
Employer.Layout = AdminLayout;
export default Employer;
