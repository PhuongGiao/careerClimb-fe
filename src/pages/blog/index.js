import MainLayout from "@/layout/main";
import React, { useEffect, useState } from "react";
import styles from "./blog.module.scss";
import blog1 from "../../../public/blog1.jpg";
import blog2 from "../../../public/blog2.jpg";
import blog3 from "../../../public/blog3.jpeg";
import blog4 from "../../../public/blog4.jpg";
import { RightOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { blogService } from "../../../services/blogService";
import CardBlog from "@/components/CardBlog/CardBlog";
import Loading from "@/components/Loading/Loading";

const Blog = () => {
  const router = useRouter();
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await blogService.getAll();
      setBlog(data.data);
    })();
  }, []);
  return (
    <div className={styles.blog}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.title}>Blog</div>
          <div className={styles.items}>
            {blog.map((value, idx) => (
              <CardBlog value={value} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Blog.Layout = MainLayout;
export default Blog;
