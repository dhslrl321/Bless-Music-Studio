import styled from "styled-components";

export const PriceContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fafafa;
  padding-bottom: 350px;
  padding-top: 80px;
`;

export const PriceHeader = styled.div`
  margin-top: 20px;
  width: 65%;
  margin-bottom: 50px;
`;

export const PriceTitle = styled.h1`
  text-align: center;
  margin-bottom: 25px;
`;

export const PriceDesc = styled.div`
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 30px;
`;

export const PriceContent = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const PriceCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  padding-bottom: 30px;
  height: 600px;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
