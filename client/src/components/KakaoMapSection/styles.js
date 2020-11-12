import styled from "styled-components";

export const MapContainer = styled.div`
  background: white;
  height: 100vh;
  margin-top: -80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const MapHeader = styled.div`
  width: 65%;
  margin-top: 100px;
`;

export const HeaderText = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const HeaderSubtitle = styled.p`
  font-size: 0.9rem;
  text-align: center;
`;

export const HeaderLine = styled.div`
  width: 100%;
  border: 1px solid #aaa;
`;

export const MapContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const MapDiv = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Map = styled.div`
  width: 500px;
  height: 400px;
  border: 1px solid;
`;