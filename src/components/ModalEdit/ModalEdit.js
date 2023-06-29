import { Button, Col, Form, Input, Modal, Row, Select } from "antd";
import { useEffect, useState } from "react";
import styles from "./modalEdit.module.scss";
import { levelService } from "../../../services/levelService";
import { blogService } from "../../../services/blogService";
import { openNotification } from "../Notification";
import { jobService } from "../../../services/jobService";
const { TextArea } = Input;

const ModalEdit = ({
  isOpen,
  jobSelected,
  handleOk,
  handleCancel,
  getLevelOptions,
  getCateOptions,
  getExpOptions,
  getLocationOptions,
  getSalaryOptions,
}) => {
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      if (jobSelected?.id) {
        await jobService.update(values, jobSelected.id);
      } else {
        await jobService.create(values);
      }
      openNotification("success", "Success !!!");
      handleCancel();
    } catch (error) {
      openNotification("error", "Please try again !!!");
    }
    setIsLoading(false);
  };
  const onFinishFailed = (errorInfo) => {};
  useEffect(() => {
    if (jobSelected?.id) {
      form.setFieldsValue(jobSelected);
    } else {
      form.resetFields();
    }
  }, [jobSelected]);

  return (
    <div className={styles.modalEdit}>
      <Modal
        title={isOpen ? "Tạo việc làm" : "Sửa việc làm"}
        open={isOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <Form
          disabled={isLoading}
          form={form}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className={styles.form}
          // initialValues={}
        >
          <Form.Item
            label="Tên công việc"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="Basic usage" />
          </Form.Item>
          <Form.Item
            label="Ngành nghề"
            name="category"
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
            >
              {getCateOptions?.map((value) => (
                <Select.Option key={value?.id} value={value?.id}>
                  {value?.value}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Nơi làm việc mong muốn"
            name="location"
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
            >
              {getLocationOptions?.map((value) => (
                <Select.Option key={value?.id} value={value?.id}>
                  {value?.value}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Mức lương"
            name="salary"
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
            >
              {getSalaryOptions?.map((value) => (
                <Select.Option key={value?.id} value={value?.id}>
                  {value?.value}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Hình thức làm việc"
            name="level"
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
            >
              {getLevelOptions?.map((value) => (
                <Select.Option key={value?.id} value={value?.id}>
                  {value?.value}
                </Select.Option>
              ))}
            </Select>
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
            >
              {getExpOptions?.map((value) => (
                <Select.Option key={value?.id} value={value?.id}>
                  {value?.value}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Miêu tả"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <TextArea placeholder="Miêu tả công việc..." autoSize />
          </Form.Item>
          <Form.Item
            label="Yêu cầu"
            name="requirement"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <TextArea placeholder="Yêu cầu công việc..." autoSize />
          </Form.Item>
          <Form.Item
            label="Lợi ích"
            name="benefits"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <TextArea placeholder="Những lợi ích từ công ty" autoSize />
          </Form.Item>
          <Form.Item
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button
              className={styles.submitButton}
              type="primary"
              htmlType="submit"
            >
              Hoàn tất
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ModalEdit;
