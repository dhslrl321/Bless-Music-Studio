import React, { useState } from "react";
import Sidebar from "../components/Sidebar/index";
import Navbar from "../components/Navbar/index";
import Footer from "../components/Footer/index";
import PriceCardSection from "../sections/PriceSection/PriceSection";
import RefundContainer from "../components/Refund";
import ReservationSection from "../sections/ReservationSection";

const Pricing = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggle={toggle} />
      <Navbar toggle={toggle} scrollNav={true} />
      <PriceCardSection />
      <RefundContainer />
      <ReservationSection />
      <Footer />
    </>
  );
};

export default Pricing;
