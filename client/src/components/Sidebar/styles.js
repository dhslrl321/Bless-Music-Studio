import styled from "styled-components";
import { Link } from "react-router-dom";
export const SidebarContainer = styled.aside`
  display: none;
  position: fixed;
  z-index: 999;
  height: 100%;
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  opacity: ${({ sidebarOpen }) => (sidebarOpen ? "100%" : "0")};
  top: ${({ sidebarOpen }) => (sidebarOpen ? "0" : "-100%")};
  background: #0e0e0e;
  color: #fff;
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SidebarLinks = styled(Link)`
  margin: 10px 0;
  color: #fff;
`;

export const ExitIconWrap = styled.div`
  cursor: pointer;
  outline: none;
`;