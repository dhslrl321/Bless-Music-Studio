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
  transition: 0.8s ease-in-out;
  background: #0e0e0e;
  color: #fff;
`;

export const SidebarMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
`;

export const SidebarLinks = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
  color: #fff;
  background: #01bf71;
  padding: 16px 64px;
  border-radius: 500px;

  &:hover {
    color: #000;
    transition: 0.2s ease-in-out;
  }
`;

export const ExitIconWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  outline: none;
`;
