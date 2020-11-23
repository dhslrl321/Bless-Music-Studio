import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import InteriorSection from "../sections/InteriorSection";
import KakaoMapSection from "../sections/KakaoMapSection";
import Footer from "../components/Footer/index";
import TopBg from "../components/TopBg/TopBg";

const Tour = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggle={toggle} />
      <Navbar toggle={toggle} scrollNav={true} />
      <TopBg />
      <InteriorSection />
      <KakaoMapSection />
      <Footer />
    </>
  );
};

export default Tour;
