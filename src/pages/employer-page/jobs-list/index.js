import ModalEdit from "@/components/ModalEdit/ModalEdit";
import SearchInput from "@/components/SearchInput/SearchInput";
import EmployerLayout from "@/layout/employer";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Space, Table, Tag } from "antd";
import moment from "moment";
import { useEffect, useState } from "react";
import { jobService } from "../../../../services/jobService";
import { levelService } from "../../../../services/levelService";
import { experienceService } from "../../../../services/experienceService";
import { categoryService } from "../../../../services/categoryService";
import { locationService } from "../../../../services/locationService";
import styles from "./jobsList.module.scss";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { salaryService } from "../../../../services/salaryService";

const JobsListEmployer = () => {
  const [jobsList, setJobsList] = useState([]);
  const [key, setKey] = useState("");
  const [getLevelOptions, setGetLevelOptions] = useState([]);
  const [getExpOptions, setGetExpOptions] = useState([]);
  const [getCateOptions, setGetCateOptions] = useState([]);
  const [getLocationOptions, setGetLocationOptions] = useState([]);
  const [getSalaryOptions, setGetSalaryOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [jobSelected, setJobSelected] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (searchText) => {
    setKey(searchText);
  };
  const showModal = (job) => {
    setIsOpen(true);
    if (!job.id) return;
    setJobSelected(job);
  };
  const handleOk = () => {
    setIsOpen(false);
  };
  const handleCancel = () => {
    setIsOpen(false);
    setJobSelected(null);
  };
  useEffect(() => {
    if (!isOpen) {
      (async () => {
        setIsLoading(true);
        try {
          const [
            { data },
            { data: levels },
            { data: exps },
            { data: categories },
            { data: locations },
            { data: salaries },
          ] = await Promise.all([
            jobService.getJobByEmployer(),
            levelService.getAll(),
            experienceService.getAll(),
            categoryService.getAll(""),
            locationService.getAll(),
            salaryService.getAll(),
          ]);

          setGetLevelOptions(
            levels.data.map((val) => ({
              id: val.id,
              text: val.name,
              value: val.name,
            }))
          );
          setGetCateOptions(
            categories.data.map((val) => ({
              id: val.id,
              text: val.name,
              value: val.name,
            }))
          );
          setGetExpOptions(
            exps.data.map((val) => ({
              id: val.id,
              text: val.name,
              value: val.name,
            }))
          );
          setGetLocationOptions(
            locations.data.map((val) => ({
              id: val.id,
              text: val.name,
              value: val.name,
            }))
          );
          setGetSalaryOptions(
            salaries.data.map((val) => ({
              id: val.id,
              text: val.name,
              value: val.name,
            }))
          );
          setJobsList(data.data);
        } catch (error) {}
        setIsLoading(false);
      })();
    }
  }, [key, isOpen]);
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
            onClick={() => showModal(record)}
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
    <>
      <div className={styles.employerPage}>
        <Button
          style={{
            background: "#82CD47",
            color: "#fff",
            padding: "20px ",
            display: "flex",
            alignItems: "center",
          }}
          onClick={showModal}
        >
          <PlusOutlined />
          Tạo công việc
        </Button>

        <ModalEdit
          jobSelected={jobSelected}
          getLocationOptions={getLocationOptions}
          getLevelOptions={getLevelOptions}
          getCateOptions={getCateOptions}
          getExpOptions={getExpOptions}
          getSalaryOptions={getSalaryOptions}
          isOpen={isOpen}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
        <SearchInput
          placeholder="Nhập tên nhà tuyển dụng..."
          onSearch={handleSearch}
        />
        <Table columns={columns} dataSource={jobsList} loading={isLoading} />
      </div>
    </>
  );
};
JobsListEmployer.Layout = EmployerLayout;
export default JobsListEmployer;
