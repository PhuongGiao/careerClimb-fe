import SearchInput from "@/components/SearchInput/SearchInput";
import {
  BellOutlined,
  DesktopOutlined,
  FileOutlined,
  MailOutlined,
  PieChartOutlined,
  SettingOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import styles from "./userInformationLayout.module.scss";
import { Breadcrumb, Button, Col, Layout, Menu, Row, Steps, theme } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import logo from "../../../public/logo.png";

const { Header, Content, Footer, Sider } = Layout;
const Step = Steps.Step;

const UserInformationLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const router = useRouter();

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <div className={styles.userInformationLayout}>
        <div className={styles.container}>
          <div className={styles.main}>
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                textTransform: "uppercase",
              }}
            >
              Create Profile
            </h2>
            <Steps size="small" current={0}>
              <Step title="Finished" />
              <Step title="In Progress" />
              <Step title="Waiting" />
            </Steps>
            {children}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default UserInformationLayout;
