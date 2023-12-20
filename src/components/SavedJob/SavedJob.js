import React, { useEffect, useState } from "react";
import styles from "./savedJob.module.scss";
import { openNotification } from "../Notification";
import { savedJobService } from "../../../services/savedJobService";
import AppliedCard from "../AppliedCard/AppliedCard";
import { Col, Row } from "antd";
import Card from "../Card/Card";
import Loading from "../Loading/Loading";

const SavedJob = () => {
  const [savedJobList, setSavedJobList] = useState([]);
  const [saveButton, setSaveButton] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data } = await savedJobService.getAll();
        setSavedJobList(data.data);
      } catch (error) {
        openNotification(error, "Please try again !!!");
      }
      setLoading(false);
    })();
  }, []);
  return (
    <div>
      {savedJobList.length ? (
        // <div>
        <Row gutter={[25, 25]}>
          {savedJobList?.map((item) => (
            <Col span={8}>
              <Card
                value={item.Job}
                key={item.id}
                saveButton={saveButton}
                setSaveButton={setSaveButton}
              />
            </Col>
          ))}
        </Row>
      ) : (
        // </div>
        <p>Bạn chưa có công việc nào !!!</p>
      )}
      {loading && <Loading />}
    </div>
  );
};

export default SavedJob;
