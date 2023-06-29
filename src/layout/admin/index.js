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
import styles from "./adminLayout.module.scss";
import { Breadcrumb, Button, Col, Layout, Menu, Row, theme } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import logo from "../../../public/logo.png";

const { Header, Content, Footer, Sider } = Layout;

// const items = [
//   getItem("Option 1", "1", <PieChartOutlined />),
//   getItem("Nhà tuyển dụng", "2", <DesktopOutlined />),
//   getItem("Việc làm", "sub1", <UserOutlined />, [getItem("Danh sách", "3")]),
//   getItem("Ngành nghề", "sub2", <TeamOutlined />, [
//     getItem("Danh sách", "6"),
//     getItem("Team 2", "8"),
//   ]),
//   getItem("Files", "9", <FileOutlined />),
// ];
const items = [
  {
    key: "/admin/jobs",
    label: "Việc làm",
    icon: <MailOutlined />,
    // children: [
    //   {
    //     key: "/admin",
    //     label: "Danh sách",
    //   },
    // ],
  },
  {
    key: "/admin/employer",
    label: "Nhà tuyển dụng",
    icon: <MailOutlined />,
  },
  {
    key: "/admin/category",
    label: "Ngành nghề",
    icon: <MailOutlined />,
  },
];
const AdminLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState(router.pathname);
  const onClick = (e) => {
    router.push(e.key);
    setCurrent(e.key);
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        theme="light"
      >
        <div
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            margin: "20px",
          }}
        >
          <img style={{ width: "100%" }} src={logo.src} />
        </div>
        <Menu
          defaultSelectedKeys={current}
          selectedKeys={current}
          theme="light"
          mode="inline"
          items={items}
          onClick={onClick}
          className={styles.menu}
        />
      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Row>
            <Col span={8} style={{ display: "flex", alignItems: "center" }}>
              <Breadcrumb
                style={{
                  margin: "16px 0",
                }}
              >
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
            <Col span={8}>{/* <SearchInput onSearch={handleSearch}/> */}</Col>
            <Col
              span={8}
              //   offset={8}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: 15,
              }}
            >
              <p>
                {" "}
                <UserOutlined />
                Admin
              </p>
              <Button
                style={{
                  borderColor: "none !important",
                  width: "fit-content",
                  padding: "0 20px",
                }}
              >
                <SettingOutlined />
              </Button>
              <Button
                style={{
                  borderColor: "none !important",
                  width: "fit-content",
                  padding: "0 20px",
                }}
              >
                <BellOutlined />
              </Button>
            </Col>
          </Row>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
