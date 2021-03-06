import React from "react";
import Sydney from "../../videos/sydney2.mp4";

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
    <main>
      <HeroContainer>
        <HeroBackground>
          <VideoBg
            autoPlay
            loop
            muted
            src={Sydney}
            type="video/mp4"
            playsInline
            webkit-playsinline
          />
        </HeroBackground>
        <HeroContent data-aos="zoom-in">
          <HeroTitle>Bless Music Studio</HeroTitle>
          <HeroDescription>
            Bless Music Studio에서 당신의 꿈을 키워보세요.
          </HeroDescription>
        </HeroContent>
      </HeroContainer>
    </main>
  );
};

export default HeroSection;
