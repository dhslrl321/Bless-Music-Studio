import React from "react";
import { RiKakaoTalkFill } from "react-icons/ri";
import { ButtonContainer, PlatformLogo, PlatformIcon } from "./styles";
import NaverLogo from "./naver-white.png";
const NaverIcon = () => {
  return;
};

const PlatformButton = ({ text, url, isKakao }) => {
  return (
    <a href={url} target="_blank">
      <ButtonContainer isKakao={isKakao}>
        <PlatformIcon>
          {isKakao ? <RiKakaoTalkFill /> : <img src={NaverLogo} />}
        </PlatformIcon>
        <PlatformLogo isKakao={isKakao}>{text}</PlatformLogo>
      </ButtonContainer>
    </a>
  );
};

export default PlatformButton;
