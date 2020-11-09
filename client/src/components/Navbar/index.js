import React, { useState, useEffect } from 'react'
import { FaBars } from "react-icons/fa";
import {
  IconWrapper, Nav, NavLogo,
  NavItem, NavLinks, NavMenu,
  NavbarContainer
} from './styles';
const Navbar = ({ toggle }) => {

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 900) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, [])

  return (
    <>
      <Nav>
        <NavbarContainer scrollNav={scrollNav}>
          <NavLogo>Bless Music Studio</NavLogo>
          <IconWrapper onClick={toggle}>
            <FaBars />
          </IconWrapper>
          <NavMenu>
            <NavItem>
              <NavLinks to="/tour">
                Tour
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/pricing">
                Pricing
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/reservation">
                Reservation
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/faq">
                FAQ
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;
