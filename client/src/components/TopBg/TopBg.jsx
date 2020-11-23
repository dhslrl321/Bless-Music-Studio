import React from "react";
import { TopBgContainer, Image } from "./styles";
import flower from "../../images/flower.jpg";
const TopBg = () => {
  return (
    <TopBgContainer>
      <Image src={flower} />
    </TopBgContainer>
  );
};

export default TopBg;
