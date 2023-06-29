import ModalEdit from "@/components/ModalEdit/ModalEdit";
import { openNotification } from "@/components/Notification";
import SearchInput from "@/components/SearchInput/SearchInput";
import AdminLayout from "@/layout/admin";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Space, Table, Tag, theme } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { categoryService } from "../../../../services/categoryService";
import { experienceService } from "../../../../services/experienceService";
import { jobService } from "../../../../services/jobService";
import { levelService } from "../../../../services/levelService";

const Jobs = () => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  const [jobList, setJobList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [getLevelOptions, setGetLevelOptions] = useState([]);
  const [getExpOptions, setGetExpOptions] = useState([]);
  const [getCateOptions, setGetCateOptions] = useState([]);
  const [key, setKey] = useState("");

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
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
      filters: getCateOptions,
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.Category?.name.startsWith(value),
    },
    {
      title: "Cấp bậc",
      dataIndex: "level",
      key: "Level",
      render: (_, { Level }) => (
        <>{Level ? <p>{Level?.name}</p> : <p>Khác</p>}</>
      ),
      filters: getLevelOptions,
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.Level.name.startsWith(value),
    },
    {
      title: "Kinh nghiệm",
      dataIndex: "Experience",
      key: "Experience",
      render: (_, { Experience }) => (
        <>{Experience ? <p>{Experience?.name}</p> : <p>Khác</p>}</>
      ),
      filters: getExpOptions,
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.Experience.name.startsWith(value),
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

  useEffect(() => {
    (async () => {
      try {
        const [
          { data },
          { data: levels },
          { data: exps },
          { data: categories },
        ] = await Promise.all([
          jobService.getAll(key),
          levelService.getAll(),
          experienceService.getAll(),
          categoryService.getAll(),
        ]);
        setGetLevelOptions(
          levels.data.map((val) => ({
            text: val.name,
            value: val.name,
          }))
        );
        setGetCateOptions(
          categories.data.map((val) => ({
            text: val.name,
            value: val.name,
          }))
        );
        setGetExpOptions(
          exps.data.map((val) => ({
            text: val.name,
            value: val.name,
          }))
        );
        setJobList(data.data);
      } catch (error) {
        openNotification("error", "Please try again!!!");
      }
    })();
  }, [key]);
  const handleSearch = (searchText) => {
    setKey(searchText);
  };
  return (
    <div>
      <SearchInput
        placeholder="Nhập tên công việc..."
        onSearch={handleSearch}
      />
      <Table columns={columns} dataSource={jobList} />
      {isModalOpen && (
        <ModalEdit
          isModalOpen={isModalOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
      )}
    </div>
  );
};
Jobs.Layout = AdminLayout;
export default Jobs;
