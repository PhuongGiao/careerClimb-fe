import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState } from "react";
import styles from "./slideMenu.module.scss";
import { useRouter } from "next/router";

const getItem = (label, key, icon) => {
  return {
    label,
    key,
    icon,
  };
};
const items = [
  getItem("Trang chủ", "/", <MailOutlined />),
  getItem("Việc làm", "/jobs-list", <MailOutlined />),
  getItem("Ngành nghề", "/careers", <MailOutlined />),
  getItem("Nhà tuyển dụng", "/top-employers", <AppstoreOutlined />),
  getItem("CV của tôi", "/mycv", <SettingOutlined />),
  getItem("Blog", "/blog", <SettingOutlined />),
];
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
const SlideMenu = ({ setOpen }) => {
  const router = useRouter();
  const [current, setCurrent] = useState(router.pathname);
  // const [openKeys, setOpenKeys] = useState(["sub1"]);
  // const onOpenChange = (keys) => {
  //   const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
  //   if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
  //     setOpenKeys(keys);
  //   } else {
  //     setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
  //   }
  // };

  const onClick = (e) => {
    router.push(e.key);
    setCurrent(e.key);
    setTimeout(() => {
      setOpen(false);
    }, 500);
  };
  return (
    <div className={styles.slideMenu}>
      <Menu
        mode="inline"
        // openKeys={openKeys}
        // onOpenChange={onOpenChange}
        selectedKeys={current}
        onClick={onClick}
        items={items}
      />
    </div>
  );
};

export default SlideMenu;
