import Benefits from "@/components/Benefits/Benefits";
import UploadCV from "@/components/UploadCV/UploadCV";
import MainLayout from "@/layout/main";
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Pagination,
  Row,
  Select,
} from "antd";
import styles from "./mycv.module.scss";
import { useEffect, useState } from "react";
import ImageUploadForm from "@/components/FormImage/FormImage";
import CreateCV from "@/components/CreateCV/CreateCV";
import CardCV from "@/components/CardCV/CardCV";
import { openNotification } from "@/components/Notification";
import { cvService } from "../../../services/cvService";
import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import WarningModal from "@/components/WarningModal/WarningModal";
import { useRouter } from "next/router";

const Mycv = () => {
  let user = useSelector((state) => state.userReducer.user);
  const router = useRouter();
  const numEachPage = 4;
  const { TextArea } = Input;
  const [imageUrl, setImageUrl] = useState();
  const [loadingCreate, setLoadingCreate] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [mycv, setMycv] = useState([]);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1);
  const [box, setBox] = useState(false);
  const [open, setOpen] = useState(false);
  const handleCancel = () => {
    setOpen(false);
  };
  // const onFinish = (values) => {
  //   console.log("Success:", values);
  // };
  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };
  const handleChange = (value) => {
    setMinValue((value - 1) * numEachPage);
    setMaxValue(value * numEachPage);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  useEffect(() => {
    user &&
      (async () => {
        try {
          const { data } = await cvService.getMyCVs();
          setMycv(data.data);
        } catch (error) {
          openNotification("error", "Something went wrong !!!");
        }
      })();
  }, [user]);

  return (
    <div className={styles.mycv}>
      <div className={styles.container}>
        <div className={styles.main}>
          <h2 className={styles.title}>Tạo CV</h2>
          {/* <span style={{ fontSize: "10px", color: "red" }}>
              Bạn chưa tải lên CV nào!
            </span> */}
          {/* <Form
              name="basic"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              className={styles.form}
            >
              <Row gutter={[30, 0]}>
                <Col lg={12}>
                  <Form.Item
                    label="Hồ sơ đính kèm"
                    name="cvfile"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <UploadCV />
                  </Form.Item>
                </Col>
                <Col xs={24} lg={12}>
                  <Form.Item
                    label="Ngành nghề"
                    name="careers"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Select
                      showSearch
                      placeholder="Search to Select"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      options={[
                        {
                          value: "1",
                          label: "Công nghệ thông tin",
                        },
                        {
                          value: "2",
                          label: "Kinh doan",
                        },
                        {
                          value: "3",
                          label: "Bất động sản",
                        },
                        {
                          value: "4",
                          label: "Giáo dục",
                        },
                        {
                          value: "5",
                          label: "Khác",
                        },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Nơi làm việc mong muốn"
                    name="position"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Select
                      showSearch
                      placeholder="Search to Select"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      options={[
                        {
                          value: "1",
                          label: "Hồ Chí Minh",
                        },
                        {
                          value: "2",
                          label: "Hà nội",
                        },
                        {
                          value: "3",
                          label: "Hải Phòng",
                        },
                        {
                          value: "4",
                          label: "Đà nẵng",
                        },
                        {
                          value: "5",
                          label: "Khác",
                        },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Hình thức làm việc"
                    name="workForm"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Select
                      showSearch
                      placeholder="Search to Select"
                      optionFilterProp="children"
                      filterOption={(input, option) =>
                        (option?.label ?? "").includes(input)
                      }
                      filterSort={(optionA, optionB) =>
                        (optionA?.label ?? "")
                          .toLowerCase()
                          .localeCompare((optionB?.label ?? "").toLowerCase())
                      }
                      options={[
                        {
                          value: "1",
                          label: "Thực tập",
                        },
                        {
                          value: "2",
                          label: "Việc làm fulltime",
                        },
                        {
                          value: "3",
                          label: "Việc làm bán thời gian",
                        },
                        {
                          value: "4",
                          label: "Việc làm freelanc",
                        },
                        {
                          value: "5",
                          label: "Khác",
                        },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item
                    label="Số năm kinh nghiệm"
                    name="experience"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <InputNumber min={0} itialValues={0} />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item
                lg={24}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  className={styles.button}
                  type="primary"
                  htmlType="submit"
                >
                  Upload CV
                </Button>
              </Form.Item>
            </Form> */}
          {/* <Form
              //   form={form}
              name="basic"
              onFinish={onFinish}
              autoComplete="off"
              className={styles.form}
            >
              <Form.Item
                label="Tên CV"
                name="cvName"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Họ và tên"
                name="name"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="email"
                name="email"
                rules={[{ required: true, message: "Please input your email!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Số điện thoại"
                name="phone"
                rules={[{ required: true, message: "Please input your phone!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Lời giới thiệu"
                name="introduction"
                rules={[{ required: true, message: "Please input your phone!" }]}
              >
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item
                label="CV của tôi"
                name="cv"
                rules={[{ required: true, message: "Please input your phone!" }]}
              >
                <ImageUploadForm
                  onChange={(value) => {
                    setImageUrl(value);
                    form.setFieldsValue({ cv: value });
                  }}
                  value={imageUrl}
                />
              </Form.Item>
              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Tạo
                </Button>
              </Form.Item>
            </Form> */}
          <div
            onClick={() => (user ? setBox(!box) : setOpen(true))}
            className={styles.boxCreate}
          >
            {box ? (
              <MinusCircleOutlined className={styles.icon} />
            ) : (
              <PlusCircleOutlined className={styles.icon} />
            )}
          </div>
          {box && (
            <CreateCV
              setLoadingCreate={setLoadingCreate}
              setIsCreateOpen={setIsCreateOpen}
              loadingCreate={loadingCreate}
            />
          )}
          <div style={{ display: "flex", alignItems: "center" }}>
            <h2 className={styles.title}>CV của bạn</h2>
            <span style={{ color: "grey", margin: "0 10px" }}>
              (Bạn có <b style={{ color: "#572c0e" }}>{mycv.length}</b> hồ sơ)
            </span>
          </div>
          <div>
            {user && mycv.length > 0 ? (
              mycv
                .slice(minValue, maxValue)
                .map((val) => <CardCV mycv={val} key={val.id} />)
            ) : (
              <p style={{ display: !user && "none" }}>Bạn không có hồ sơ nào</p>
            )}
            {!user && (
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                  alignItems: "center",
                  lineHeight: 3,
                  padding: "20px 0",
                }}
              >
                <p>Bạn cần đăng nhập để thực hiện chức năng này</p>
                <Button
                  style={{ width: "fit-content" }}
                  onClick={() => router.push("/login-register")}
                  type="primary"
                >
                  Đăng nhập
                </Button>
              </div>
            )}
            {/* // {mycv && mycv.length > 0 ? (
              //   mycv.slice(minValue, maxValue).map((val) => <CardCV mycv={val} />)
              // ) : user ? (
              //   <p>Bạn không có hồ sơ nào</p>
              // ) : (
              //   <div
              //     style={{
              //       width: "100%",
              //       display: "flex",
              //       flexDirection: "column",
              //       textAlign: "center",
              //       alignItems: "center",
              //       lineHeight: 3,
              //       padding: "20px 0",
              //     }}
              //   >
              //     <p>Bạn cần đăng nhập để thực hiện chức năng này</p>
              //     <Button
              //       style={{ width: "fit-content" }}
              //       onClick={() => router.push("/login-register")}
              //       type="primary"
              //     >
              //       Đăng nhập
              //     </Button>
              //   </div>
              // )} */}
            <Pagination
              style={{ display: "flex", justifyContent: "center" }}
              defaultCurrent={1}
              defaultPageSize={4}
              onChange={handleChange}
              total={mycv.length}
            />
          </div>
        </div>
      </div>
      <div style={{ background: "#f2f2f2", marginTop: "80px" }}>
        <Benefits />
      </div>
      <WarningModal
        open={open}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </div>
  );
};
Mycv.Layout = MainLayout;
export default Mycv;
