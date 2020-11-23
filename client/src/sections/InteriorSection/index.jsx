import React from "react";
import { rooms } from "./data";
import {
  InteriorContainer,
  InteriorContentWrapper,
  ImageWrapper,
  InteriorHeader,
  ImageBallWrap,
  InteriorHeaderWrapper,
  InteriorLine,
  ImageBall,
  InteriorSubtitle,
  Img,
  Description,
  ImageViewer,
  RoomImg,
  ImageViewerHeader,
} from "./styles";
const InteriorSection = () => {
  return (
    <InteriorContainer>
      <InteriorHeaderWrapper>
        <InteriorHeader>Tour</InteriorHeader>
        <InteriorSubtitle>Bless Music Studio를 둘러보세요!</InteriorSubtitle>
        <InteriorLine></InteriorLine>
      </InteriorHeaderWrapper>
      <InteriorContentWrapper>
        <ImageBallWrap>
          {rooms.map((room) => (
            <>
              <ImageBall>
                <Img src={room.image} />
                <Description>{room.desc}</Description>
              </ImageBall>
            </>
          ))}
        </ImageBallWrap>
        <ImageWrapper>
          <ImageViewerHeader>자세히 보기</ImageViewerHeader>
          <ImageViewer>
            <RoomImg />
          </ImageViewer>
        </ImageWrapper>
      </InteriorContentWrapper>
    </InteriorContainer>
  );
};

export default InteriorSection;
