import React from "react";
import { FaBars } from "react-icons/fa";
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
  return (
    <>
      <Nav className="asdf">
        <NavbarContainer scrollNav={scrollNav}>
          <NavLogo className="link-items" to="/">
            Bless Music Studio
          </NavLogo>
          <IconWrapper className="link-items" onClick={toggle}>
            <FaBars />
          </IconWrapper>
          <NavMenu>
            <NavItem>
              <NavLinks className="link-items" to="/tour">
                둘러보기
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks className="link-items" to="/pricing">
                가격 및 예약
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks className="link-items" to="/event">
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
