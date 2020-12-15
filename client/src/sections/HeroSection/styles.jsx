import styled from "styled-components";

export const HeroContainer = styled.div`
  z-index: 1;
  background: #eee;
  height: 100vh;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroBackground = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  opacity: 0.9;
`;

export const HeroContent = styled.div`
  position: absolute;
  color: #fff;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 150px;
  align-items: center;
  padding: 8px 24px;
  z-index: 3;
`;

export const HeroTitle = styled.h1`
  font-size: 50px;
  font-weight: normal;
  text-align: center;
  margin: 10px 0;

  @media screen and (max-width: 760px) {
    font-size: 40px;
  }
  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const HeroDescription = styled.p`
  margin: 24px 0;
  font-size: 20px;
  max-width: 600px;

  @media screen and (max-width: 760px) {
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 32px;
`;
