import React from "react";
import KakaoImage from "../../images/kakao-button.png";
import NaverImage from "../../images/naver-button.png";
import {
  ReservationContainer,
  ReservationColumn,
  ReservationWrapper,
  LogoImg,
  Title,
} from "./styles";

const ReservationSection = () => {
  return (
    <ReservationContainer>
      <Title>예약 및 예약 문의</Title>
      <ReservationWrapper>
        <ReservationColumn>
          <a
            href="https://map.naver.com/v5/search/블레스%20음악%20연습실/place/1197739791?c=14107523.6884252,4510076.0849957,13,0,0,0,dh&placePath=%3Fentry%253Dpll%2526&area=ple"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoImg src={NaverImage} />
          </a>
        </ReservationColumn>
        <ReservationColumn>
          <a
            href="https://open.kakao.com/o/sqbAnoCc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoImg src={KakaoImage} />
          </a>
        </ReservationColumn>
      </ReservationWrapper>
    </ReservationContainer>
  );
};

export default ReservationSection;
