import styled from "styled-components";

export const TopBgContainer = styled.div`
  width: 100%;
  height: 200px;
  padding-bottom: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -80px;
  /* background: #b8c9d2; */
  background: linear-gradient(182deg, #bbc9d1, #a1bbcb);
  color: white;
  @media screen and (max-width: 768px) {
    div {
      font-size: 1.4rem;
    }
  }
  @media screen and (max-width: 480px) {
    div {
      font-size: 1rem;
    }
  }
`;

export const IconWrap = styled.div`
  font-size: 3rem;
  margin: 0 30px;
  @media screen and (max-width: 768px) {
    margin: 0 20px;
    font-size: 2rem;
  }
  @media screen and (max-width: 480px) {
    margin: 0 10px;
    font-size: 2rem;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
