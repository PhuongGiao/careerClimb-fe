import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState } from "react";
import styles from "./slideMenu.module.scss";

const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};
const items = [
  getItem("Trang chủ", "sub1", <MailOutlined />),
  getItem("Việc làm", "sub2", <MailOutlined />),
  getItem("Ngành nghề", "sub3", <MailOutlined />),
  getItem("Nhà tuyển dụng", "sub4", <AppstoreOutlined />, [
    getItem("Nhà tuyển dụng hàng đầu", "5"),
    getItem("Nhà tuyển dụng đã ứng tuyển", "6"),
  ]),
  getItem("CV của tôi", "sub5", <SettingOutlined />),
  getItem("Blog", "sub6", <SettingOutlined />),
];
const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
const SlideMenu = () => {
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <div className={styles.slideMenu}>
      <Menu
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{
          borderInlineEnd: 0,
        }}
        items={items}
      />
    </div>
  );
};

export default SlideMenu;
