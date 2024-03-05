import { EyeOutlined, SendOutlined } from "@ant-design/icons";
import { Button, Space, Table } from "antd";
import React, { useState } from "react";
import ReviewCV from "../ReviewCV/ReviewCV";
import { jobService } from "../../../services/jobService";
import { applicationService } from "../../../services/applicationService";
import { useRouter } from "next/router";
import { openNotification } from "../Notification";
import moment from "moment";

const ExpandedList = ({ user, open, setOpen, setLoadingList }) => {
  const applications = user?.Applications;
  // const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [cvSelected, setCvSelected] = useState({});
  const applyButton = (param) => {
    console.log("🚀 ~ file: ExpandedList.js:17 ~ applyButton ~ param:", param);
    //1 : Chưa trúng + chưa xem
    //2 : Đã xem
    //3 : Đã trúng tuyển + thông tin nhân viên
    //4: Từ chối
    //5: Đã gửi email
    switch (param?.status) {
      case null:
        return "Ứng tuyển";
      case 1:
        return "Ứng tuyển";
      case 2:
        return "Ứng tuyển";
      case 3:
        return "Đã trúng tuyển";
      case 4:
        return "Đã từ chối";
      default:
        return "Đã trúng tuyển";
    }
  };
  const sendMailButton = (param) => {
    switch (param?.status) {
      case 3:
        return "Gửi mail ? ";
      case 5:
        return "Đã gửi mail";
      case 4:
        return "Đã từ chối";
      default:
        return "Gửi mail ?";
    }
  };
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
  const sendEmail = async (id) => {
    setLoadingList(true);
    try {
      await applicationService.sendMailConfirm(id);
      openNotification("success", "Gửi thành công !!!");
    } catch (error) {
      openNotification("error", "Please try again !!!");
    }
    setLoadingList(false);
  };
  const isNotViewed = (record) =>
    record?.status !== 3 && record?.status !== 4 && record.status !== 5;
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
      render: (text, record) => (
        <p>{moment(record?.CV?.createdAt).format("DD/MM/YYYY HH:mm")}</p>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            style={{ width: "152px" }}
            disabled={!isNotViewed(record)}
            type={isNotViewed(record) ? "primary" : "default"}
            onClick={() => showModal(record)}
            icon={<EyeOutlined />}
          >
            {/* {isNotViewed(record) ? "Xem CV" : "Đã ứng tuyển"} */}
            {applyButton(record)}
          </Button>

          <Button
            style={{ width: "152px" }}
            onClick={() => sendEmail(record.id)}
            disabled={
              // isNotViewed(record) || record.status === 5 || record.status === 4
              record.status !== 3
            }
            type={!isNotViewed(record) ? "primary" : "default"}
            icon={<SendOutlined />}
          >
            {/* {!isNotViewed(record) ? "Gửi mail" : "Chưa gửi mail"} */}
            {sendMailButton(record)}
          </Button>
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
