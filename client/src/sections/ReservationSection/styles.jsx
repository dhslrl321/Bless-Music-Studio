import styled from "styled-components";

export const ReservationContainer = styled.div`
  width: 100%;
  height: 500px;
  background: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Title = styled.h1`
  font-size: 1.6rem;
`;
export const ReservationWrapper = styled.div`
  display: flex;
`;

export const ReservationColumn = styled.div`
  margin: 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NaverButton = styled.div`
  width: 130px;
  height: 50px;
  border-radius: 30px;
  background: #2db400;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    color: white;
  }
`;

export const Logo = styled.img`
  margin: 30px 0;
  width: 50%;
  height: auto;
`;

export const KakaoButton = styled.div`
  width: 130px;
  height: 50px;
  border-radius: 30px;
  background: #f7e600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ALink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
