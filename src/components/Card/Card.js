import { Col, Row, Tag } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
import ApplyButton from "../ApplyButton/ApplyButton";
import SavedButton from "../SavedButton/SavedButton";
import accImg from "./../../../public/accImg.jpeg";
import styles from "./card.module.scss";

const Card = ({ value, saveButton, setSaveButton }) => {
  let user = useSelector((state) => state.userReducer.user);
  const router = useRouter();
  const [isSaved, setisSaved] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className={styles.card}>
      <div
        className={styles.image}
        onClick={() => router.push(`/jobs-list/${value?.id}`)}
      >
        <img src={value?.User?.employerDetail?.image || accImg.src} alt="" />
      </div>
      <div className={styles.content}>
        <h4 onClick={() => router.push(`/jobs-list/${value?.id}`)}>
          {value?.name}
        </h4>
        <p onClick={() => router.push(`/top-employers/${value?.User?.id}`)}>
          {value?.User.employerDetail?.name}
        </p>
        <div className={styles.info}>
          <Tag className={styles.tag}>{value?.Experience?.name}</Tag>
          {value?.Locations?.length > 1 ? (
            <Tag className={styles.tag}>Nhiều khu vực</Tag>
          ) : (
            <Tag className={styles.tag}>{value?.Locations[0]?.name}</Tag>
          )}
          <Tag className={styles.tag}>
            {value?.Salary?.name || "Thương lượng"}
          </Tag>
        </div>
        <Row gutter={5}>
          <Col span={19}>
            <ApplyButton value={value} />
          </Col>
          <Col span={5}>
            <SavedButton jobId={value.id} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Card;
