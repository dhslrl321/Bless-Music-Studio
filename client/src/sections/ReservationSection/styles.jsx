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

  @media screen and (max-width: 480px) {
    margin: 30px 10px;
  }
`;
