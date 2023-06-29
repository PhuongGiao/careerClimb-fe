import { MenuOutlined } from "@ant-design/icons";
import {
  Button,
  Col,
  Divider,
  Drawer,
  Menu,
  Popconfirm,
  Popover,
  Row,
  Space,
  message,
} from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import logo from "../../../public/logo.png";
import SlideMenu from "../SlideMenu/SlideMenu";
import styles from "./header.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { googleSignIn, logOut } from "@/store/action/userAction";

const Header = () => {
  let user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const [current, setCurrent] = useState(router.pathname);
  const [open, setOpen] = useState(false);
  const text = "";
  const content = (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {user && user.isCandidate ? (
        <Button
          style={{ border: "1px solid black" }}
          onClick={() => router.push("/user-account")}
        >
          Thông tin cá nhân
        </Button>
      ) : (
        <Button
          style={{ border: "1px solid black" }}
          onClick={() => router.push("/employer-page")}
        >
          Dành cho nhà tuyển dụng
        </Button>
      )}
      <Divider plain>Hoặc</Divider>
      <Button
        onClick={() => dispatch(logOut(router))}
        style={{
          border: "1px solid #ffffff",
          background: "red",
          color: "#ffffff",
        }}
      >
        Đăng xuất
      </Button>
    </div>
  );

  const onClick = (e) => {
    router.push(e.key);
    setCurrent(e.key);
  };
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const menu = [
    {
      key: "/",
      label: "Trang chủ",
    },
    {
      key: "/jobs-list",
      label: "Việc làm",
    },
    {
      key: "/careers",
      label: "Ngành nghề",
    },
    {
      key: "/top-employers",
      label: "Nhà tuyển dụng",
    },
    {
      key: "/mycv",
      label: "CV của tôi",
    },
    {
      key: "/blog",
      label: "Blog",
    },
  ];
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Row gutter={[0, 0]} className={styles.headerRow}>
          <Col span={6} className={styles.logo}>
            <img style={{ width: "80%" }} src={logo.src} />
          </Col>
          <Col xs={0} md={0} lg={15} className={styles.menu}>
            <Menu
              mode="horizontal"
              selectedKeys={current}
              onClick={onClick}
              className={styles.menuItem}
              items={menu}
            />
          </Col>
          <Col
            style={{ display: "flex", justifyContent: "flex-end" }}
            xs={0}
            md={0}
            lg={3}
            className={styles.div}
          >
            {user ? (
              // <Popconfirm
              //   placement="bottomRight"
              //   title={<div>custom</div>}
              //   description={description}
              //   onConfirm={confirm}
              //   okText={<div></div>}
              //   cancelText={<div></div>}
              // >
              //   <div className={styles.user}>
              //     <div className={styles.avaImg}>
              //       <img src={user?.image || user?.googlePicture} />
              //     </div>
              //     <h4>{user?.firstName}</h4>
              //   </div>
              // </Popconfirm>
              <Popover
                placement="bottomRight"
                title={text}
                content={content}
                trigger="click"
              >
                <div className={styles.user}>
                  <div className={styles.avaImg}>
                    <img src={user?.image || user?.googlePicture} />
                  </div>
                  <h4 className={styles.name}>
                    {user?.employerDetail
                      ? user?.employerDetail?.name
                      : user?.firstName}
                  </h4>
                </div>
              </Popover>
            ) : (
              <Col lg={0} className={styles.account}>
                <Button
                  className={styles.button}
                  onClick={() => router.push("/login-register")}
                >
                  Login
                </Button>
                <Button
                  className={styles.highlightButton}
                  onClick={() => router.push("/login-register")}
                >
                  Register
                </Button>
              </Col>
            )}
            <Col xs={5} lg={0}>
              <Button type="primary" onClick={showDrawer}>
                <MenuOutlined />
              </Button>
              <Drawer
                title="Options"
                placement="right"
                width={400}
                onClose={onClose}
                open={open}
              >
                <SlideMenu />
              </Drawer>
            </Col>
          </Col>
        </Row>
      </div>
    </header>
  );
};

export default Header;
