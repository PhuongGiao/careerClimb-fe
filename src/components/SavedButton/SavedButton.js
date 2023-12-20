import { getCurrentUser } from "@/store/action/userAction";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { savedJobService } from "../../../services/savedJobService";
import { openNotification } from "../Notification";
import styles from "./savedButton.module.scss";
import WarningModal from "../WarningModal/WarningModal";
import { useState } from "react";

const SavedButton = ({ jobId }) => {
  let saved = useSelector((state) => state.userReducer.saved);
  let user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
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
  const handleClick = async () => {
    if (user) {
      try {
        if (saved.includes(jobId)) {
          await savedJobService.updateUnsaved(jobId);
        } else {
          await savedJobService.create({
            jobId,
          });
        }
        dispatch(getCurrentUser());
        openNotification("success", "Bạn đã lưu công việc");
      } catch (error) {
        openNotification("error", "Please try again !!!");
      }
    } else {
      setOpen(true);
    }
  };

  return (
    <div className={styles.button}>
      <Button
        className={styles.savedButton}
        type="link"
        danger
        style={{ border: 0, boxShadow: "none", width: "100 % !important" }}
        disabled={user?.isCandidate === false}
        onClick={handleClick}
      >
        {saved.includes(jobId) ? <HeartFilled /> : <HeartOutlined />}
      </Button>
      {open && (
        <WarningModal
          open={open}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default SavedButton;
