import React from "react";
import { TopBgContainer, Image, IconWrap } from "./styles";
import { GiPianoKeys, GiMusicalNotes } from "react-icons/gi";
import { BsMusicPlayer } from "react-icons/bs";
import { RiMusic2Line } from "react-icons/ri";
import { CgPiano } from "react-icons/cg";
const TopBg = () => {
  return (
    <TopBgContainer>
      <IconWrap>
        <GiPianoKeys />
      </IconWrap>

      <IconWrap>
        <BsMusicPlayer />
      </IconWrap>

      <IconWrap>
        <RiMusic2Line />
      </IconWrap>

      <IconWrap>
        <GiMusicalNotes />
      </IconWrap>

      <IconWrap>
        <CgPiano />
      </IconWrap>
    </TopBgContainer>
  );
};

export default TopBg;
