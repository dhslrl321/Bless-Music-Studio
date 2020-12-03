import React from "react";
import { rooms } from "./data";
import {
  InteriorContainer,
  InteriorContentWrapper,
  InteriorHeader,
  ImageBallWrap,
  InteriorHeaderWrapper,
  ImageBall,
  InteriorSubtitle,
  Img,
  Description,
} from "./styles";
const InteriorSection = () => {
  return (
    <InteriorContainer>
      <InteriorHeaderWrapper>
        <InteriorHeader>Tour</InteriorHeader>
        <InteriorSubtitle>Bless Music Studio를 둘러보세요!</InteriorSubtitle>
      </InteriorHeaderWrapper>
      <InteriorContentWrapper>
        <ImageBallWrap>
          {rooms.map((room) => (
            <>
              <ImageBall key={room.id}>
                <Img src={room.image} />
                <Description>{room.desc}</Description>
              </ImageBall>
            </>
          ))}
        </ImageBallWrap>
      </InteriorContentWrapper>
    </InteriorContainer>
  );
};

export default InteriorSection;
