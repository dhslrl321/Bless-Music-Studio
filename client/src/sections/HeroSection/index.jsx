import React from "react";
import Sydney from "../../videos/sydney.mp4";

import {
  HeroBackground,
  HeroContainer,
  VideoBg,
  HeroTitle,
  HeroContent,
  HeroDescription,
} from "./styles";
const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBackground>
        <VideoBg autoPlay loop muted src={Sydney} type="video/mp4" />
      </HeroBackground>
      <HeroContent>
        <HeroTitle>Bless Music Studio</HeroTitle>
        <HeroDescription>
          Bless Music Studio에서 당신의 꿈을 키워보세요.
        </HeroDescription>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
