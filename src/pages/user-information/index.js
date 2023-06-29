import React, { useState } from "react";
import styles from "./userInformation.module.scss";
import { Button, message, Steps, theme, Select } from "antd";
import UserInformationLayout from "@/layout/userInformation";
import UserInfo from "@/components/UserInfor/UserInfo";
import UploadImage from "@/components/UploadImage/UploadImage";
import SuccessForm from "@/components/SuccessForm/SuccessForm";
import { useSelector } from "react-redux";
const Step = Steps.Step;
const { Option } = Select;

const UserInformation = () => {
  const user = useSelector((state) => state.userReducer.user);
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const [role, setRole] = useState(true);
  const [information, setInformation] = useState({
    name: "",
    description: "",
    address: "",
    email: "",
    image: "",
  });
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const steps = [
    {
      title: "First",
      content: <UserInfo next={next} setRole={setRole} user={user} />,
    },
    {
      title: "Second",
      content: (
        <UploadImage
          next={next}
          prev={prev}
          // role={role}
          // information={information}
          // setInformation={setInformation}
          user={user}
        />
      ),
    },
    {
      title: "Last",
      content: <SuccessForm />,
    },
  ];
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    // border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
    padding: 25,
  };
  return (
    <div className={styles.userInformation}>
      <div className={styles.container}>
        <Steps current={current} items={items} />
        <div style={contentStyle}>{steps[current].content}</div>
        <div
          style={{
            marginTop: 24,
          }}
        >
          {/* {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default UserInformation;
