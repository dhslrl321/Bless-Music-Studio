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
  const fade = left ? "fade-left" : "fade-right";
  return (
    <main>
      <InfoContainer left={left} darkMode={darkMode}>
        <InfoImgWrapper
          data-aos={fade}
          data-aos-anchor-placement="bottom-bottom"
        >
          <Img src={img} />
        </InfoImgWrapper>
        <InfoContent data-aos={fade} data-aos-anchor-placement="bottom-bottom">
          <InfoTitle lightText={lightText}>{title}</InfoTitle>
          <InfoDescription lightText={lightText}>{description}</InfoDescription>
        </InfoContent>
      </InfoContainer>
    </main>
  );
};

export default InfoSection;
