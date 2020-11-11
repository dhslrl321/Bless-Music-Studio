import React from 'react'
import { FaBars } from "react-icons/fa";
import {
  IconWrapper, Nav, NavLogo,
  NavItem, NavLinks, NavMenu,
  NavbarContainer
} from './styles';
const Navbar = ({ toggle, scrollNav }) => {

  return (
    <>
      <Nav>
        <NavbarContainer scrollNav={scrollNav}>
          <NavLogo className="link-items" to="/">Bless Music Studio</NavLogo>
          <IconWrapper className="link-items" onClick={toggle}>
            <FaBars />
          </IconWrapper>
          <NavMenu>
            <NavItem>
              <NavLinks className="link-items" to="/tour">
                Tour
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks className="link-items" to="/pricing">
                Pricing
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks className="link-items" to="/reservation">
                Reservation
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks className="link-items" to="/faq">
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
