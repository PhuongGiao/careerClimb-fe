import React, { useState } from "react";
import styles from "./floatLabel.module.scss";

const FloatLabel = (props) => {
  const [focus, setFocus] = useState(false);
  const { children, label, value } = props;

  const labelClass =
    focus || value
      ? `${styles.label} ${styles.label_float}`
      : `${styles.label}`;

  return (
    <div
      className={styles.float_label}
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      {children}
      <label
        style={{ background: "#f1f1f1", fontWeight: "600", color: "#572c0e" }}
        className={labelClass}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatLabel;
