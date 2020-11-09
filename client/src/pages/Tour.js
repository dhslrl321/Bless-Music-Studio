import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

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
    </>
  )
}

export default Tour
