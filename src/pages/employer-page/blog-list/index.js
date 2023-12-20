import EmployerLayout from "@/layout/employer";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Space, Table } from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { blogService } from "../../../../services/blogService";
import ModalBlog from "@/components/ModalBlog/ModalBlog";
import styles from "./blogList.module.scss";

const BlogList = () => {
  const [blog, setBlog] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  useEffect(() => {
    (async () => {
      const { data } = await blogService.getAllByEmployer();
      setBlog(data.data);
    })();
  }, []);

  const columns = [
    {
      title: "Tên",
      dataIndex: "title",
      key: "title",
      width: "200px",
      render: (text) => <p className={styles.content}>{text}</p>,
    },
    {
      title: "Hình ảnh",
      dataIndex: "image",
      key: "image",
      width: "180px",
      render: (text) => <img style={{ width: "100%" }} src={text} />,
    },
    {
      title: "Nội dung",
      dataIndex: "content",
      key: "content",
      width: "200px",
      render: (text) => (
        <p
          className={styles.content}
          style={
            {
              // textOverflow: "ellipsis",
              // overflow: "hidden",
              // width: "160px",
              // height: "1.2em",
              // whitespace: "nowrap",
            }
          }
        >
          {text}
        </p>
      ),
    },
    {
      title: "Ngày tạo",
      dataIndex: "createdAt",
      key: "createdAt",
      width: "200px",
      render: (_) => <p>{moment(_).format("DD/MM/YYYY")}</p>,
      sorter: {
        compare: (a, b) => moment(a.createdAt) - moment(b.createdAt),
        multiple: 2,
      },
    },
    {
      title: "Action",
      key: "action",
      width: "200px",
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
  return (
    <div>
      <Button
        style={{
          background: "#82CD47",
          color: "#fff",
          padding: "20px ",
          display: "flex",
          alignItems: "center",
        }}
        onClick={showModal}
        onCancel={handleCancel}
      >
        <PlusOutlined />
        Tạo bài viết
      </Button>
      <Table columns={columns} dataSource={blog} />
      <ModalBlog
        setOpen={setOpen}
        open={open}
        handleCancel={handleCancel}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
};
BlogList.Layout = EmployerLayout;
export default BlogList;
