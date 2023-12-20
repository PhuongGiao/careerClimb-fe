import React, { useState } from "react";
import { Button, Divider, Form, List, Radio, Steps, Typography } from "antd";
import styles from "./listItemTests.module.scss";

const ListItemTests = ({}) => {
  const [value, setValue] = useState();
  const onChange = (e) => {
    setValue(+e.target.value);
  };

  return (
    <Radio.Group
      optionType="button"
      buttonStyle="solid"
      onChange={onChange}
      value={value}
    >
      <Radio value={3}></Radio>
      <Radio value={2}></Radio>
      <Radio value={1}></Radio>
      <Radio value={0}></Radio>
      <Radio value={-1}></Radio>
      <Radio value={-2}></Radio>
      <Radio value={-3}></Radio>
    </Radio.Group>
  );
};

export default ListItemTests;
