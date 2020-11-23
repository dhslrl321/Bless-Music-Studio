import React from "react";
import KakaoImage from "../../images/kakao-button.png";
import NaverImage from "../../images/naver-button.png";
import {
  ReservationContainer,
  ReservationColumn,
  ReservationWrapper,
  NaverButton,
  KakaoButton,
  ALink,
  Logo,
  Title,
} from "./styles";

const ReservationSection = () => {
  return (
    <ReservationContainer>
      <Title>예약 및 예약 문의</Title>
      <ReservationWrapper>
        <ReservationColumn>
          <Logo src={NaverImage}>네이버 예약 바로가기</Logo>
          <NaverButton>
            <ALink
              href="https://map.naver.com/v5/search/블레스%20음악%20연습실/place/1197739791?c=14107523.6884252,4510076.0849957,13,0,0,0,dh&placePath=%3Fentry%253Dpll%2526&area=ple"
              target="_blank"
              rel="noopener noreferrer"
            >
              예약 하기
            </ALink>
          </NaverButton>
        </ReservationColumn>
        <ReservationColumn>
          <Logo src={KakaoImage}>카카오톡으로 문의하기</Logo>
          <KakaoButton>
            <ALink
              href="https://open.kakao.com/o/sqbAnoCc"
              target="_blank"
              rel="noopener noreferrer"
            >
              문의 하기
            </ALink>
          </KakaoButton>
        </ReservationColumn>
      </ReservationWrapper>
    </ReservationContainer>
  );
};

export default ReservationSection;
