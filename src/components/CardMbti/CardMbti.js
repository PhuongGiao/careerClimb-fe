import React from "react";
import styles from "./cardMbti.module.scss";
import type from "./../../../public/type.jpeg";

const CardMbti = () => {
  return (
    <div className={styles.card}>
      <h4>ENTJ - Nhà điều hành</h4>
      <p>
        <img src={type.src} />
        Có khoảng 3% dân số mang tính cách này, ENTJ có cá tính rất lôi cuốn, lý
        trí và nhạy bén. Họ rất giỏi lãnh đạo và truyền cảm hứng cho người khác.
        ENTJ là loại tính cách có khả năng lãnh đạo tốt nhất trong các loại tính
        cách. Theo ENTJ thì "Không có gì là không thể nếu bạn quyết tâm". Đương
        nhiên, các ENTJ hiếm khi gặp khó khăn khi thuyết phục người khác rằng
        mục tiêu lựa chọn bởi ENTJ cũng nên trở thành một trong những mục tiêu
        cá nhân của họ.
      </p>
    </div>
  );
};

export default CardMbti;
