import { Button } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import ApplyModal from "../ApplyModal/ApplyModal";
import styles from "./applyButton.module.scss";

const ApplyButton = ({ value }) => {
  let user = useSelector((state) => state.userReducer.user);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const showModal = () => {
    setOpen(true);
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
  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        className={styles.highlightBut}
        style={{ width: "100%" }}
        disabled={user?.isCandidate === false}
      >
        Ứng tuyển ngay
      </Button>
      <ApplyModal
        open={open}
        handleOk={handleOk}
        handleCancel={handleCancel}
        loading={loading}
        job={value}
        user={user}
      />
    </>
  );
};

export default ApplyButton;
