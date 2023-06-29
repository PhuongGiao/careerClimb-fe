import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import React, { useState } from "react";
import styles from "./reviewCV.module.scss";
import { ExclamationCircleFilled } from "@ant-design/icons";
import ConfirmModal from "../ConfirmModal/ConfirmModal";
import { applicationService } from "../../../services/applicationService";
import { openNotification } from "../Notification";

const ReviewCV = ({ open, appliedUser, setLoading, loading, setOpen }) => {
  const [openConfirm, setOpenConfirm] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refuseModal, setRefuseModal] = useState(false);
  // console.log(appliedUser);
  const showModal = () => {
    setRefuseModal(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const handleCancelRefuse = () => {
    setRefuseModal(false);
  };
  const handleOkRefuse = () => {
    setRefuseModal(false);
  };
  const handleRefuse = async () => {
    // console.log(appliedUser);
    try {
      await applicationService.refuse(appliedUser.id, appliedUser);
      openNotification("success", "Từ chối thành công !");
      setRefuseModal(false);
    } catch (error) {
      openNotification("error", "Something went wrong !!!");
    }
    setOpen(false);
  };

  // const onFinish = (values) => {
  //   console.log("Success:", values);
  // };
  // const onFinishFailed = (errorInfo) => {
  //   console.log("Failed:", errorInfo);
  // };

  const showConfirm = () => {
    setOpenConfirm(true);
  };

  return (
    <Modal
      open={open}
      title="Title"
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[
        <div
          key={"footer"}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "end",
            justifyContent: "flex-end",
          }}
        >
          <Button key="back" onClick={handleCancel}>
            Trở về
          </Button>

          <Button
            key="submit"
            //   loading={loading}
            // onClick={handleOk}
            style={{ border: "1px solid black" }}
            onClick={showModal}
          >
            Không ứng tuyển
          </Button>

          <Button
            className={styles.button}
            key="link"
            // href="https://google.com"
            type="primary"
            //   loading={loading}
            onClick={showConfirm}
          >
            Ứng tuyển
          </Button>
        </div>,
      ]}
    >
      <div className={styles.info}>
        <b className={styles.title}>Tên ứng viên</b>{" "}
        <p>{appliedUser?.CV?.name}</p>
      </div>
      <div className={styles.info}>
        <b className={styles.title}>Tên CV</b> <p>{appliedUser?.CV?.cvName}</p>
      </div>
      <div className={styles.info}>
        <b className={styles.title}>Email</b> <p>{appliedUser?.CV?.email}</p>
      </div>
      <div className={styles.info}>
        <b className={styles.title}>Số điện thoại </b>
        <p>{appliedUser?.CV?.phone}</p>
      </div>
      <div className={styles.info}>
        <b className={styles.title}>Lời giới thiệu</b>
        <p>{appliedUser?.CV?.introduction || "Không có lời giới thiệu"}</p>
      </div>
      <div className={styles.info}>
        <b className={styles.title}>CV của ứng viên </b>
        <Button
          className={styles.button}
          target="_blank"
          href={appliedUser?.CV?.cv}
        >
          Xem CV
        </Button>
      </div>
      <ConfirmModal
        setOpen={setOpen}
        appliedUser={appliedUser}
        openConfirm={openConfirm}
        setOpenConfirm={setOpenConfirm}
      />
      <Modal
        title="XÁC NHẬN"
        open={refuseModal}
        footer={[]}
        // onOk={handleOkRefuse}
        // onCancel={handleCancelRefuse}
        // footer={[
        //   <div>
        //     <Button
        //       key="submit"
        //       type="second"
        //       style={{ border: "1px solid black" }}
        //     >
        //       Huỷ
        //     </Button>

        //     <Button
        //       className={styles.button}
        //       key="refuse"
        //       type="primary"
        //       onClick={handleRefuse}
        //     >
        //       Từ chối
        //     </Button>
        //   </div>,
        // ]}
      >
        <h1>Bạn muốn TỪ CHỐI ứng viên này ?</h1>
        <div>
          <Button
            key="submit"
            type="second"
            style={{ border: "1px solid black" }}
            onClick={() => setRefuseModal(false)}
          >
            Huỷ
          </Button>

          <Button
            className={styles.button}
            key="refuse"
            type="primary"
            onClick={handleRefuse}
          >
            Từ chối
          </Button>
        </div>
      </Modal>
    </Modal>
  );
};

export default ReviewCV;
