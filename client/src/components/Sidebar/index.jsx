import React from "react";
import { FaTimes } from "react-icons/fa";
import {
  SidebarContainer,
  SidebarMenu,
  ExitIconWrap,
  SidebarLinks,
} from "./styles";
const Sidebar = ({ sidebarOpen, toggle }) => {
  return (
    <SidebarContainer sidebarOpen={sidebarOpen} onClick={toggle}>
      <ExitIconWrap onClick={toggle}>
        <FaTimes />
      </ExitIconWrap>
      <SidebarMenu>
        <SidebarLinks to="tour">Tour</SidebarLinks>
        <SidebarLinks to="pricing">Pricing</SidebarLinks>
        <SidebarLinks to="reservation">Reservation</SidebarLinks>
        <SidebarLinks to="faq">FAQ</SidebarLinks>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
