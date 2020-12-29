import React, { useEffect } from "react";
import {
  InfoContainer,
  InfoImgWrapper,
  Img,
  InfoDescription,
  InfoTitle,
  InfoContent,
} from "./styles";

const InfoSection = ({
  title,
  description,
  left,
  img,
  darkMode,
  lightText,
}) => {
  const fade = left ? "fade-left" : "fade-right";
  return (
    <InfoContainer
      data-aos={fade}
      data-aos-anchor-placement="bottom-bottom"
      left={left}
      darkMode={darkMode}
    >
      <InfoImgWrapper>
        <Img src={img} />
      </InfoImgWrapper>
      <InfoContent>
        <InfoTitle lightText={lightText}>{title}</InfoTitle>
        <InfoDescription lightText={lightText}>{description}</InfoDescription>
      </InfoContent>
    </InfoContainer>
  );
};

export default InfoSection;
