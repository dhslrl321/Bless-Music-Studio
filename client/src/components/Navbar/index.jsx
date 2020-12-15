import React from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  IconWrapper,
  Nav,
  NavLogo,
  NavItem,
  NavLinks,
  NavMenu,
  NavbarContainer,
} from "./styles";

const Navbar = ({ toggle, scrollNav }) => {
  const moveScrollTop = () => {
    scroll.scrollToTop({
      duration: 800,
    });
  };

  return (
    <>
      <Nav className="asdf">
        <NavbarContainer scrollNav={scrollNav}>
          <NavLogo className="link-items" to="/" onClick={moveScrollTop}>
            Bless Music Studio
          </NavLogo>
          <IconWrapper className="link-items" onClick={toggle}>
            <FaBars />
          </IconWrapper>
          <NavMenu>
            <NavItem>
              <NavLinks
                className="link-items"
                to="/tour"
                onClick={moveScrollTop}
              >
                둘러보기
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                className="link-items"
                to="/pricing"
                onClick={moveScrollTop}
              >
                가격 및 예약
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                className="link-items"
                to="/event"
                onClick={moveScrollTop}
              >
                이벤트
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
