import JobList from "@/components/JobList/JobList";
import { openNotification } from "@/components/Notification";
import MainLayout from "@/layout/main";
import { Button } from "antd";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { categoryService } from "../../../services/categoryService";
import { jobService } from "../../../services/jobService";
import styles from "./careers.module.scss";

const Careers = () => {
  const router = useRouter();
  const [category, setCategory] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await categoryService.getAll("");
        setCategory(data.data);
      } catch (error) {
        openNotification("error", "Please try again!!!");
      }
    })();
  }, []);

  return (
    <div className={styles.careers}>
      <div className={styles.container}>
        <div className={styles.main}>
          {category?.map((value) => (
            <div className={styles.category} key={value.id}>
              <div className={styles.title}>
                <h1>{value.name}</h1>
                <Button onClick={() => router.push(`careers/${value.id}`)}>
                  Xem tất cả
                </Button>
              </div>
              <div className={styles.list}>
                <JobList data={value?.jobs} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
Careers.Layout = MainLayout;
export default Careers;
