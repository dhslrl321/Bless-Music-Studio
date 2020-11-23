import styled from "styled-components";
import { Link } from "react-router-dom";
export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  background: transparent;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0 24px;
  max-width: 1300px;
  z-index: 1;
  height: 80px;
  .link-items {
    color: ${({ scrollNav }) => (scrollNav ? "#000" : "#fff")};
  }
`;
export const IconWrapper = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.3rem;
    cursor: pointer;
  }
`;
export const NavLogo = styled(Link)`
  justify-self: flex-start;
  font-size: 1.5rem;
`;
export const NavMenu = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavItem = styled.div`
  display: flex;
  padding: 0 1rem;
  height: 100%;
`;
export const NavLinks = styled(Link)`
  font-size: 1.1rem;
  &.active {
    border: 1px solid;
  }
`;
