import React from "react";
import PlatformButton from "../../components/PlatformButton/index";
import {
  ReservationContainer,
  ReservationColumn,
  ReservationWrapper,
  Title,
} from "./styles";

const ReservationSection = () => {
  return (
    <ReservationContainer>
      <Title>예약 및 예약 문의</Title>
      <ReservationWrapper>
        <ReservationColumn>
          <PlatformButton
            text="예약하기"
            url="https://map.naver.com/v5/search/블레스%20음악%20연습실/place/1197739791?c=14107523.6884252,4510076.0849957,13,0,0,0,dh&placePath=%3Fentry%253Dpll%2526&area=ple"
            isKakao={false}
          />
        </ReservationColumn>
        <ReservationColumn>
          <PlatformButton
            text="카카오 문의하기"
            url="https://open.kakao.com/o/sqbAnoCc"
            isKakao={true}
          />
        </ReservationColumn>
      </ReservationWrapper>
    </ReservationContainer>
  );
};

export default ReservationSection;
