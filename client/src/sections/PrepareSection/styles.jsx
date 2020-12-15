import styled from "styled-components";

export const PrepareContainer = styled.div`
  width: 100%;
  height: 80vh;
  margin-top: -80px;
  padding-bottom: 80px;
  background: #afafaf;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const Image = styled.img`
  width: 300px;
  margin: 50px;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;

export const Desc = styled.div`
  margin: 50px;
`;

export const Span = styled.span`
  display: block;
  font-size: 2rem;
  color: white;
  margin: 10px;
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
  }
`;
