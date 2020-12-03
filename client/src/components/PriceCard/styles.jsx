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
  @media screen and (max-width: 750px) {
    width: 150px;
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
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
  @media screen and (max-width: 480px) {
    width: 80px;
    height: 80px;
    border-radius: 40px;
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
