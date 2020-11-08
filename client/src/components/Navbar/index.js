import React from 'react'
import { FaBars } from "react-icons/fa";
import {
  IconWrapper, Nav, NavLogo,
  NavItem, NavLinks, NavMenu,
  NavbarContainer
} from './styles';
const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
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
