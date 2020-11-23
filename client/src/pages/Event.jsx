import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import PrepareSection from "../sections/PrepareSection/PrepareSection";
import Footer from "../components/Footer";

const Event = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  const toggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const changeNav = () => {
    if (window.scrollY >= 900) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggle={toggle} />
      <Navbar toggle={toggle} scrollNav={scrollNav} />
      <PrepareSection />
      <Footer />
    </>
  );
};

export default Event;
