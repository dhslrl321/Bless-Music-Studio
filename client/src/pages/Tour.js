import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import InteriorSection from '../components/InteriorSection';
import KakaoMapSection from '../components/KakaoMapSection';

const Tour = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggle = () => {
    setSidebarOpen(!sidebarOpen);
    console.log("ci");
  }

  return (
    <>
      <Sidebar />
      <Navbar toggle={toggle} scrollNav={true} />
      <InteriorSection />
      <KakaoMapSection />
    </>
  )
}

export default Tour
