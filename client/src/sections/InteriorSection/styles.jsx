import styled from "styled-components";

export const InteriorContainer = styled.div`
  height: 100%;
  margin-top: -80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background: #fafafa;
`;

export const InteriorHeaderWrapper = styled.div`
  width: 65%;
  margin-top: 100px;
`;

export const InteriorHeader = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

export const InteriorSubtitle = styled.p`
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 30px;
`;

export const InteriorLine = styled.div`
  width: 100%;
  border: 1px solid #aaa;
  margin-bottom: 30px;
`;

export const InteriorContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const ImageBallWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 100px);
  grid-template-rows: repeat(2, 100px);
  grid-gap: 30px;
  justify-content: center;
  margin-bottom: 50px;
  @media screen and (max-width: 780px) {
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
  } ;
`;

export const ImageBall = styled.div`
  margin: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  box-shadow: 2px 2px 2px gray;
  transition: 0.2s ease-in-out;
  :hover {
    width: 100px;
    height: 100px;
  }
`;

export const Description = styled.p`
  color: gray;
  margin-top: 10px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #fafafa;
`;

export const ImageViewerHeader = styled.h1`
  margin: 50px 0;
  font-size: 2rem;
  color: #444;
`;

export const ImageViewer = styled.div`
  width: 60%;
  height: 460px;
  background: white;
  border-radius: 20px;
  box-shadow: 2px 2px 12px gray;
  margin-bottom: 200px;
  @media screen and (max-width: 768px) {
    width: 80%;
    height: 252px;
  }
  @media screen and (max-width: 480px) {
    width: 90%;
    height: 220px;
    box-shadow: 1px 1px 5px gray;
  }
`;

export const RoomImg = styled.img``;
