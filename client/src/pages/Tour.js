import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import InteriorSection from '../components/InteriorSection';
import KakaoMapSection from '../components/KakaoMapSection';
import Footer from "../components/Footer/index";

const Tour = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggle = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggle={toggle} />
      <Navbar toggle={toggle} scrollNav={true} />
      <InteriorSection />
      <KakaoMapSection />
      <Footer />
    </>
  )
}

export default Tour;
