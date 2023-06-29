import { Button, Form, Input, Modal, Radio } from "antd";
import { useEffect, useState } from "react";
import { cvService } from "../../../services/cvService";
import CvCard from "../CvCard/CvCard";
import { openNotification } from "../Notification";
import CreateCVModal from "../CreateCVModal/CreateCVModal";
import styles from "./applyModal.module.scss";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import WarningModal from "../WarningModal/WarningModal";
import { applicationService } from "../../../services/applicationService";

const ApplyModal = ({ open, handleOk, handleCancel, job, user }) => {
  // let user = useSelector((state) => state.userReducer.user);
  const [myCVs, setMyCVs] = useState([]);
  const [CV, setCV] = useState();
  const [loading, setLoading] = useState(false);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [loadingCreate, setLoadingCreate] = useState(false);

  const onChange = (e) => {
    setCV(e.target.value);
  };

  const handleClickApply = async () => {
    setLoading(true);
    try {
      await applicationService.create({
        jobId: job.id,
        cvId: CV,
      });
      openNotification("success", "Ứng tuyển thành công");
      handleCancel(false);
    } catch (error) {
      openNotification(
        "error",
        error?.response?.data?.message || "Something went wrong !!!"
      );
    }
    setLoading(false);
  };

  const handleClickCreate = async () => {
    setIsCreateOpen(true);
  };

  useEffect(() => {
    user &&
      (async () => {
        setLoading(true);
        try {
          const { data } = await cvService.getMyCVs();
          setMyCVs(data.data);
        } catch (error) {}
        setLoading(false);
      })();
  }, [open, loadingCreate, user]);

  return (
    <>
      {user ? (
        <Modal
          open={open}
          title="ỨNG TUYỂN NGAY"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button
              key={"button"}
              disabled={loading}
              onClick={handleClickApply}
              type="primary"
            >
              Ứng tuyển
            </Button>,
          ]}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Radio.Group
              style={{
                overflow: "scroll",
                height: "400px",
                margin: "20px 0",
              }}
              onChange={onChange}
              defaultValue={0}
              disabled={loading}
            >
              {myCVs?.map((cv) => (
                <CvCard key={cv.id} cv={cv} />
              ))}
            </Radio.Group>
            <Button
              className={styles.buttonCreate}
              onClick={handleClickCreate}
              disabled={loading}
              type="primary"
            >
              <PlusCircleOutlined />
              Tạo CV
            </Button>
            {isCreateOpen && (
              <CreateCVModal
                isCreateOpen={isCreateOpen}
                loadingCreate={loadingCreate}
                setIsCreateOpen={setIsCreateOpen}
                setLoadingCreate={setLoadingCreate}
              />
            )}
          </div>
        </Modal>
      ) : (
        <WarningModal
          open={open}
          handleOk={handleOk}
          handleCancel={handleCancel}
        />
        // <Modal
        //   open={open}
        //   title=""
        //   onOk={handleOk}
        //   onCancel={handleCancel}
        //   footer={[]}
        // >
        //   <div
        //     style={{
        //       width: "100%",
        //       display: "flex",
        //       flexDirection: "column",
        //       textAlign: "center",
        //       lineHeight: 3,
        //     }}
        //   >
        //     <div style={{ height: "190px" }}>
        //       <img style={{ width: "40%" }} src={oops.src} alt="" />
        //     </div>
        //     <h3>Bạn cần đăng nhập để thực hiện chức năng này</h3>
        //     <div>
        //       <Button onClick={() => handleCancel(false)}>Bỏ qua</Button>
        //       <Button
        //         onClick={() => router.push("/login-register")}
        //         type="primary"
        //       >
        //         Đăng nhập
        //       </Button>
        //     </div>
        //   </div>
        // </Modal>
      )}
    </>
  );
};

export default ApplyModal;
