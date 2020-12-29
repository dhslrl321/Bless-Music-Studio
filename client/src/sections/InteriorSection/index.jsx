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
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { SliderData } from "../../components/ImageSlider/SliderData";
const InteriorSection = () => {
  return (
    <InteriorContainer>
      <InteriorHeaderWrapper data-aos="zoom-in">
        <InteriorHeader>Tour</InteriorHeader>
        <InteriorSubtitle>Bless Music Studio를 둘러보세요!</InteriorSubtitle>
      </InteriorHeaderWrapper>
      <InteriorContentWrapper data-aos="zoom-in">
        <ImageBallWrap>
          {rooms.map((room, index) => (
            <>
              <ImageBall key={index}>
                <Img src={room.image} />
                <Description>{room.desc}</Description>
              </ImageBall>
            </>
          ))}
        </ImageBallWrap>
        <ImageSlider slides={SliderData} />
      </InteriorContentWrapper>
    </InteriorContainer>
  );
};

export default InteriorSection;
