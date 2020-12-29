import React, { useEffect } from "react";
import {
  InfoContainer,
  InfoImgWrapper,
  Img,
  InfoDescription,
  InfoTitle,
  InfoContent,
} from "./styles";

import AOS from "aos";
import "aos/dist/aos.css";

const InfoSection = ({
  title,
  description,
  left,
  img,
  darkMode,
  lightText,
}) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
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
