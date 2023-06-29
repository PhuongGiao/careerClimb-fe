import { useRouter } from "next/router";
import bgCard1 from "../../../public/bgCard1.jpg";
import styles from "./cardCompany.module.scss";

const CardCompany = ({ data }) => {
  const router = useRouter();
  return (
    <div className={styles.cardCompany}>
      <div className={styles.infoImage}>
        <div className={styles.image}>
          <img src={bgCard1.src} alt="" />
          <div className={styles.logo}>
            <img
              src={
                data?.image ||
                "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/business-logo-design-template-78655edda18bc1196ab28760f1535baa_screen.jpg?ts=1617645324"
              }
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={styles.info}>
        <h3
          onClick={() => router.push(`top-employers/${data.id}`)}
          style={{ fontSize: "17px", margin: "15px 0" }}
        >
          {data?.name}
        </h3>
        <p style={{ fontSize: "12px" }}>{data?.description}</p>
      </div>
    </div>
  );
};

export default CardCompany;
