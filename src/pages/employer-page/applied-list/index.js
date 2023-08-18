import { openNotification } from "@/components/Notification";
import EmployerLayout from "@/layout/employer";
import { Button, Space, Table, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { jobService } from "../../../../services/jobService";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import moment from "moment";
import ExpandedList from "@/components/ExpandedList/ExpandedList";

const AppliedList = () => {
  const [appliedList, setAppliedList] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      render: (text) => <p>{text}</p>,
    },
    {
      title: "Ngành nghề",
      dataIndex: "category",
      key: "category",
      render: (_, { Category }) => (
        <>{Category ? <p>{Category?.name}</p> : <p>Khác</p>}</>
      ),
      //   filters: getCateOptions,
      //   filterMode: "tree",
      //   filterSearch: true,
      //   onFilter: (value, record) => record.Category?.name.startsWith(value),
    },
    {
      title: "Cấp bậc",
      dataIndex: "level",
      key: "Level",
      render: (_, { Level }) => (
        <>{Level ? <p>{Level?.name}</p> : <p>Khác</p>}</>
      ),
      //   filters: getLevelOptions,
      //   filterMode: "tree",
      //   filterSearch: true,
      //   onFilter: (value, record) => record.Level.name.startsWith(value),
    },
    {
      title: "Kinh nghiệm",
      dataIndex: "Experience",
      key: "Experience",
      render: (_, { Experience }) => (
        <>{Experience ? <p>{Experience?.name}</p> : <p>Khác</p>}</>
      ),
      //   filters: getExpOptions,
      //   filterMode: "tree",
      //   filterSearch: true,
      //   onFilter: (value, record) => record.Experience.name.startsWith(value),
    },
    {
      title: "Vị trí",
      key: "Locations",
      dataIndex: "Locations",
      render: (_, { Locations }) => (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {Locations?.map((value) => {
            return (
              <Tag
                style={{ width: "fit-content" }}
                color="green"
                key={value.id}
              >
                <p>{value?.name.toUpperCase()}</p>
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
      render: (_) => <p>{moment(_).format("DD MMMM YYYY")}</p>,
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
            // onClick={() => showModal(record)}
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
        const { data } = await jobService.getCvByJob();
        setAppliedList(data.data?.map((val) => ({ ...val, key: val.id })));
      } catch (error) {
        openNotification("error", "Something went wrong !!!");
      }
    })();
  }, [open, loading]);
  return (
    <div>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (user) => (
            <ExpandedList
              user={user}
              open={open}
              setOpen={setOpen}
              setLoadingList={setLoading}
            />
          ),
          //   rowExpandable: (user) => user.name !== "Not Expandable",
        }}
        dataSource={appliedList}
      />
    </div>
  );
};

AppliedList.Layout = EmployerLayout;
export default AppliedList;
