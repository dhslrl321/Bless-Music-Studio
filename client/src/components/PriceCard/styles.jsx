import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 250px;
  height: 450px;
  border-radius: 30px;
  box-shadow: 2px 2px 12px gray;
  color: black;
  transition: 0.1s ease-in-out;
  margin: 20px;
  cursor: pointer;
  :hover {
    width: 260px;
    height: 470px;
    box-shadow: 3px 3px 12px black;
  }
  @media screen and (max-width: 768px) {
    width: 180px;
    height: 320px;
    :hover {
      width: 190px;
      height: 330px;
      box-shadow: 3px 3px 12px black;
    }
  }
  @media screen and (max-width: 480px) {
    width: 100px;
    height: 200px;
    margin: 0 10px;
    :hover {
      width: 110px;
      height: 210px;
      box-shadow: 3px 3px 12px black;
    }
  }
`;

export const ImageBall = styled.div``;

export const Image = styled.img`
  width: 150px;
  height: 130px;
  border-radius: 40px;
  box-shadow: 2px 2px 12px gray;
  @media screen and (max-width: 768px) {
    width: 60px;
    height: 60px;
    border-radius: 20px;
  }
  @media screen and (max-width: 480px) {
    width: 40px;
    height: 40px;
    border-radius: 14px;
  }
`;

export const Title = styled.h1`
  font-size: 1rem;

  @media screen and (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
export const DetailWrapper = styled.div``;

export const Detail = styled.div`
  font-size: 0.8rem;
  margin: 13px 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 480px) {
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 20px;
  border: none;
  color: black;
  cursor: pointer;
  outline: none;
  :hover {
    width: 105px;
    height: 34px;
  }

  @media screen and (max-width: 768px) {
    width: 85px;
    :hover {
      width: 90px;
    }
  }
  @media screen and (max-width: 480px) {
    width: 75px;
    :hover {
      width: 80px;
    }
  }
`;
