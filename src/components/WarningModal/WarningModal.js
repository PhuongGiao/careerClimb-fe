import { Button, Modal } from "antd";
import { useRouter } from "next/router";
import React from "react";
import oops from "../../../public/oops.png";

const WarningModal = ({ open, handleOk, handleCancel }) => {
  const router = useRouter();
  return (
    <Modal
      open={open}
      title=""
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[]}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          lineHeight: 3,
        }}
      >
        <div style={{ height: "190px" }}>
          <img style={{ width: "40%" }} src={oops.src} alt="" />
        </div>
        <h3>Bạn cần đăng nhập để thực hiện chức năng này</h3>
        <div>
          <Button onClick={() => handleCancel(false)}>Bỏ qua</Button>
          <Button onClick={() => router.push("/login-register")} type="primary">
            Đăng nhập
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default WarningModal;
