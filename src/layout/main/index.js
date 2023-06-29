import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ minHeight: "80vh" }}>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
