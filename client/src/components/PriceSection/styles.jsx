import styled from "styled-components";

export const PriceContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 400px;
`;

export const PriceHeader = styled.div`
  width: 65%;
  margin-bottom: 50px;
`;

export const PriceTitle = styled.h1`
  text-align: center;
  margin-bottom: 25px;
`;

export const PriceLine = styled.div`
  width: 100%;
  border: 1px solid #aaa;
`;

export const PriceContent = styled.div`
  width: 65%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const PriceCardWrap = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-around;
  padding-bottom: 30px;
`;

export const PriceDetail = styled.div`
  width: 300px;
  height: 0px;
  transition: 1s ease;
  color: white;
  border: ${({ show }) => (show ? "1px solid" : "none")};
  height: ${({ show }) => (show ? "300px" : "none")};
  color: ${({ show }) => (show ? "black" : "none")};
`;

export const DetailTitle = styled.h1`
  text-align: center;
`;

export const DetailTable = styled.div``;
