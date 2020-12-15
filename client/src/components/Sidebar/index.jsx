import React from "react";
import { FaTimes } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  SidebarContainer,
  SidebarMenu,
  ExitIconWrap,
  SidebarLinks,
} from "./styles";
const Sidebar = ({ sidebarOpen, toggle }) => {
  const moveScrollTop = () => {
    scroll.scrollToTop({
      duration: 800,
    });
  };
  return (
    <SidebarContainer sidebarOpen={sidebarOpen} onClick={toggle}>
      <ExitIconWrap onClick={toggle}>
        <FaTimes />
      </ExitIconWrap>
      <SidebarMenu>
        <SidebarLinks to="tour" onClick={moveScrollTop}>
          Tour
        </SidebarLinks>
        <SidebarLinks to="pricing" onClick={moveScrollTop}>
          Pricing
        </SidebarLinks>
        <SidebarLinks to="event" onClick={moveScrollTop}>
          Events
        </SidebarLinks>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
