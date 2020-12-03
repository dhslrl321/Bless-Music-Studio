import styled from "styled-components";
export const ButtonContainer = styled.div`
  width: 200px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ isKakao }) => (isKakao ? "#fee500" : "#1ec800")};
  @media screen and (max-width: 480px) {
    width: 150px;
  }
  div {
    margin: 0 5px;
  }
`;

export const PlatformLogo = styled.div`
  font-size: 1.2rem;
  color: ${({ isKakao }) => (isKakao ? "black" : "white")};
  @media screen and (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const PlatformIcon = styled.div`
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 4rem;
  }
  @media screen and (max-width: 480px) {
    font-size: 1.3rem;
  }
`;
