import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 300px;
  height: 500px;
  border-radius: 30px;
  box-shadow: 2px 2px 12px gray;
  color: black;
  transition: 0.1s ease-in-out;
  cursor: pointer;
  :hover {
    width: 310px;
    height: 510px;
    box-shadow: 3px 3px 12px black;
  }
`;

export const ImageBall = styled.div``;

export const Image = styled.img`
  width: 150px;
  height: 130px;
  border-radius: 40px;
  box-shadow: 2px 2px 12px gray;
`;

export const Title = styled.h1`
  font-size: 1rem;
`;

export const Price = styled.div`
  font-size: 1.5rem;
`;
export const DetailWrapper = styled.div``;

export const Detail = styled.div`
  margin: 13px 0;
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
`;
