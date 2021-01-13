import React from "react";
import { PrepareContainer, Desc, Span, Image } from "./styles";
import prepareImage from "../../images/prepare.svg";

const PrepareSection = () => {
  return (
    <main>
      <PrepareContainer>
        <Image src={prepareImage} />
        <Desc>
          <Span>지금은 준비중이에요!</Span>
          <Span>잠시만 기다려주세요</Span>
        </Desc>
      </PrepareContainer>
    </main>
  );
};

export default PrepareSection;
