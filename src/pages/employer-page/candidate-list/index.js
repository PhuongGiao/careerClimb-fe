import SearchInput from "@/components/SearchInput/SearchInput";
import EmployerLayout from "@/layout/employer";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Space, Table, Tag } from "antd";
import React, { useState } from "react";
import styles from "./candidateList.module.scss";
const CandidateList = () => {
  const [candidate, setCandidate] = useState([]);
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
      title: "Tuổi",
      dataIndex: "age",
      key: "age",
      render: (_, { Category }) => (
        <>{Category ? <p>{Category?.name}</p> : <p>Khác</p>}</>
      ),
      //   filters: getCateOptions,
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.Category?.name.startsWith(value),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (_, { Experience }) => (
        <>{Experience ? <p>{Experience?.name}</p> : <p>Khác</p>}</>
      ),
      //   filters: getExpOptions,
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.Experience.name.startsWith(value),
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      key: "address",
      render: (_, { Level }) => (
        <>{Level ? <p>{Level?.name}</p> : <p>Khác</p>}</>
      ),
      //   filters: getLevelOptions,
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.Level.name.startsWith(value),
    },
    {
      title: "Giới tính",
      dataIndex: "sex",
      key: "sex",
      render: (_, { Level }) => (
        <>{Level ? <p>{Level?.name}</p> : <p>Khác</p>}</>
      ),
      //   filters: getLevelOptions,
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.Level.name.startsWith(value),
    },

    {
      title: "Vị trí",
      key: "Locations",
      dataIndex: "Locations",
      render: (_, { Locations }) => (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {Locations.map((value) => {
            return (
              <Tag
                style={{ width: "fit-content" }}
                color="green"
                key={value.id}
              >
                {value.name.length === 0 ? (
                  <p>abc</p>
                ) : (
                  <p>{value?.name.toUpperCase()}</p>
                )}
              </Tag>
            );
          })}
        </div>
      ),
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (_) => <p>{moment(_).format("LLL")}</p>,
      sorter: {
        compare: (a, b) => moment(a.createdAt) - moment(b.createdAt),
        multiple: 2,
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="primary"
            onClick={showModal}
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
  return (
    <div className={styles.candidateList}>
      <SearchInput
        placeholder="Nhập tên nhà tuyển dụng..."
        onSearch={handleSearch}
      />
      <Table columns={columns} />
    </div>
  );
};
CandidateList.Layout = EmployerLayout;
export default CandidateList;
