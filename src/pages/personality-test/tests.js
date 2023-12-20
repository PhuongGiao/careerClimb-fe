import MainLayout from "@/layout/main";
import {
  Button,
  Divider,
  Form,
  List,
  Radio,
  Steps,
  Typography,
  message,
} from "antd";
import React, { useState } from "react";
import styles from "./tests.module.scss";
import questions from "./../../../public/questions.json";
import ListItemTests from "@/components/ListItemTests/ListItemTests";
import { mbtiService } from "../../../services/mbtiService";
import { useRouter } from "next/router";

const Tests = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [listTests, setlistTests] = useState({});
  const [result, setResult] = useState();
  const onFinish = async (values) => {
    const result = {};
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        result[key] = parseInt(values[key], 10);
      }
    }
    try {
      const data = await mbtiService.create(result);
      setResult(data.data);
      console.log(data.data?.mbti?.id);
      router.push(`${data.data?.mbti?.id}`);
    } catch (error) {
      message.error("Something went wrong!!");
    }
    setlistTests(values);
  };
  return (
    <div className={styles.tests}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Bài trắc nghiệm MBTI</h2>
          <span>
            Tổng cộng <b>60</b> câu hỏi
          </span>
        </div>
        <Form form={form} onFinish={onFinish} layout="vertical">
          {questions.map((val) => (
            <div>
              <Form.Item
                key={val.id}
                label={val.title}
                name={val.name}
                style={{
                  marginBottom: "0px !important",
                }}
                // rules={[{ required: true, message: "Please select an option!" }]}
              >
                <div className={styles.choices}>
                  <span className={styles.titleBefore}>Agree</span>
                  <Radio.Group optionType="button" buttonStyle="solid">
                    <Radio value={3}></Radio>
                    <Radio value={2}></Radio>
                    <Radio value={1}></Radio>
                    <Radio value={0}></Radio>
                    <Radio value={-1}></Radio>
                    <Radio value={-2}></Radio>
                    <Radio value={-3}></Radio>
                  </Radio.Group>
                  <span className={styles.titleAfter}>Disagree</span>
                </div>
              </Form.Item>
              <Divider />
            </div>
          ))}
          <Form.Item className={styles.submitButton}>
            <Button
              htmlType="submit"
              style={{
                padding: "12px 46px",
                height: "fit-content",
              }}
              type="primary"
            >
              Xem kết quả
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
Tests.Layout = MainLayout;
export default Tests;
