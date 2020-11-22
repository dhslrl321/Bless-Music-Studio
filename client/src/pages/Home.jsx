import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import HeroSection from "../components/HeroSection/index";
import InfoSection from "../components/InfoSection/index";
import {
  infoData1,
  infoData2,
  infoData3,
} from "../components/InfoSection/data";
import booking from "../images/booking.svg";
import music from "../images/music.svg";
import think from "../images/think.svg";
import Footer from "../components/Footer";
const Home = () => {
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
      <HeroSection />
      <InfoSection {...infoData1} img={booking} />
      <InfoSection {...infoData2} img={music} />
      <InfoSection {...infoData3} img={think} />
      <Footer />
    </>
  );
};

export default Home;
