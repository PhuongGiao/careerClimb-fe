import {
  BellOutlined,
  MailOutlined,
  PictureOutlined,
  SettingOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Breadcrumb,
  Button,
  Col,
  Layout,
  Menu,
  Popover,
  Row,
  theme,
} from "antd";
import { useRouter } from "next/router";
import React, { useState } from "react";
import logo from "../../../public/logo.png";
import styles from "./employerLayout.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "@/store/action/userAction";

const { Header, Content, Footer, Sider } = Layout;

const EmployerLayout = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const user = useSelector((state) => state.userReducer.user);
  const router = useRouter();
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState(router.pathname);
  const onClick = (e) => {
    router.push(e.key);
    setCurrent(e.key);
  };
  const items = [
    {
      key: "/employer-page",
      label: "Việc làm",
      icon: <ShoppingOutlined />,
      // children: [
      //   {
      //     key: "/employer-page",
      //     label: "Danh sách",
      //   },
      // ],
    },
    // {
    //   key: "/employer-page/candidate-list",
    //   label: "Danh sách ứng viên",
    //   icon: <MailOutlined />,
    // },
    {
      key: "/employer-page/applied-list",
      label: "Danh sách ứng tuyển",
      icon: <UserOutlined />,
    },
    {
      key: "/employer-page/blog-list",
      label: "Danh sách bài viết",
      icon: <PictureOutlined />,
    },
  ];
  const content = (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Button
        onClick={() => dispatch(logOut(router))}
        style={{ border: "1px solid black" }}
      >
        Đăng xuất
      </Button>
    </div>
  );

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
            <Col
              span={24}
              //   offset={8}
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                padding: "10px 0",
              }}
            >
              <Popover
                placement="bottomRight"
                // title=
                content={content}
                trigger="click"
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <UserOutlined
                    style={{
                      border: "1px solid grey",
                      borderRadius: "50%",
                      padding: "10px ",
                      margin: "0 10px",
                    }}
                  />
                  <h4 style={{ textTransform: "uppercase" }}>
                    {user?.employerDetail?.name}
                  </h4>
                </div>
              </Popover>
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
          ©2023 Created by Giao Bui
        </Footer>
      </Layout>
    </Layout>
  );
};

export default EmployerLayout;
