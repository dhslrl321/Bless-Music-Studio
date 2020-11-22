import React from "react";
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
  return (
    <InfoContainer left={left} darkMode={darkMode}>
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
