import { EyeOutlined } from "@ant-design/icons";
import { Button, Space, Table } from "antd";
import React, { useState } from "react";
import ReviewCV from "../ReviewCV/ReviewCV";
import { jobService } from "../../../services/jobService";
import { applicationService } from "../../../services/applicationService";
import { useRouter } from "next/router";
import { openNotification } from "../Notification";

const ExpandedList = ({ user, open, setOpen }) => {
  const applications = user?.Applications;
  // const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [cvSelected, setCvSelected] = useState({});
  const showModal = async (applicationInfo) => {
    try {
      setOpen(true);
      if (!applicationInfo.id) return;
      setCvSelected(applicationInfo);
      await applicationService.update(applicationInfo.id, applicationInfo);
    } catch (error) {
      openNotification(error, "Something went wrong !!!");
    }
    // router.push(`/employer-page/applied-list/${cvInfo?.id}`);
  };
  const columns = [
    {
      title: "Tên ứng viên",
      dataIndex: "name",
      key: "name",
      render: (text, record) => <p>{record.CV.name}</p>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text, record) => <p>{record.CV.email}</p>,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      render: (text, record) => <p>{record.CV.phone}</p>,
    },
    {
      title: "Nộp lúc",
      key: "createdAt",
      dataIndex: "createdAt",
      render: (text, record) => <p>{record.CV.createdAt}</p>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {record?.status !== 3 && record?.status !== 4 ? (
            <Button type="primary" onClick={() => showModal(record)}>
              {" "}
              <EyeOutlined />
              Xem CV
            </Button>
          ) : (
            <Button disabled>
              <EyeOutlined />
              Đã ứng tuyển
            </Button>
          )}
        </Space>
      ),
    },
  ];
  // useEffect(() => {
  //   try {
  //     await jobService.update
  //   } catch (error) {

  //   }
  // }, [])
  return (
    <div>
      <Table
        style={{ padding: "10px 40px" }}
        pagination={false}
        columns={columns}
        dataSource={applications}
      />
      <ReviewCV
        open={open}
        appliedUser={cvSelected}
        setLoading={setLoading}
        setOpen={setOpen}
        loading={loading}
      />
    </div>
  );
};

export default ExpandedList;
