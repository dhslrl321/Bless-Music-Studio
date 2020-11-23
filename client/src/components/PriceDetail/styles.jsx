import styled from "styled-components";
export const PriceDetailContainer = styled.div`
  transition: 0.5s ease;
  color: white;
  width: 1300px;
  opacity: ${({ show }) => (show ? "100%" : "0")};
  height: ${({ show }) => (show ? "300px" : "0")};
`;

export const DetailTitle = styled.h1`
  text-align: center;
  color: black;
  font-size: 1.7rem;
  margin: 10px 0;
`;
export const DetailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DetailTable = styled.div`
  width: 300px;
  height: 400px;
  background: white;
  color: black;
  margin: 30px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  border-radius: 20px;
`;

export const PriceWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PriceTag = styled.span`
  font-weight: bold;
  font-size: 1rem;
  margin-left: 15px;
`;

export const Price = styled.span`
  font-size: 0.8rem;
  margin-right: 15px;
`;
