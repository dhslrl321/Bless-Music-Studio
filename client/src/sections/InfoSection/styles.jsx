import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: ${({ left }) => (left ? "row" : "row-reverse")};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 600px;

  /* background: ${({ darkMode }) =>
    darkMode
      ? "linear-gradient(-130deg, #a8edea 0%, #fed6e3 100%)"
      : "#fff"}; */
  background: ${({ darkMode }) => (darkMode ? "#FAFAFA" : "#fff")};
`;

export const InfoImgWrapper = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 150px;
  @media screen and (max-width: 760px) {
    margin: 0px 30px;
  }

  @media screen and (max-width: 480px) {
    margin: 0px 10px;
  }
`;

export const Img = styled.img`
  width: 80%;
  height: auto;
  object-fit: cover;
`;

export const InfoContent = styled.div`
  max-width: 800px;
  margin: 0 150px;
  @media screen and (max-width: 760px) {
    margin: 0px 30px;
  }

  @media screen and (max-width: 480px) {
    margin: 0px 10px;
  }
`;

export const InfoTitle = styled.h1`
  color: ${({ lightText }) => (lightText ? "#ccc5af" : "#000")};
  font-size: 2rem;
  text-align: center;
  margin: 30px 0;
  @media screen and (max-width: 760px) {
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const InfoDescription = styled.p`
  width: 300px;
  color: ${({ lightText }) => (lightText ? "#ccc5af" : "#000")};
  color: #757575;
  font-size: 1rem;
  font-weight: normal;
  margin: 0px auto;
  @media screen and (max-width: 760px) {
    font-size: 16px;
    max-width: 80%;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
    max-width: 80%;
  }
`;
