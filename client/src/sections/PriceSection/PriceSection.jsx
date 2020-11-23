import React, { useState } from "react";
import { priceData } from "./data";
import {
  PriceCardWrap,
  PriceContainer,
  PriceContent,
  PriceHeader,
  PriceLine,
  PriceTitle,
  PriceDesc,
} from "./styles";
import PriceCard from "../../components/PriceCard/index";
import PriceDetail from "../../components/PriceDetail";

const PriceCardSection = () => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };

  return (
    <PriceContainer>
      <PriceHeader>
        <PriceTitle>Price</PriceTitle>
        <PriceDesc>블레스 음악 스튜디오의 가격을 확인해보세요!</PriceDesc>
        <PriceLine />
      </PriceHeader>
      <PriceContent>
        <PriceCardWrap>
          {priceData.map((data) => (
            <PriceCard key={data.id} toggle={toggle} data={data} />
          ))}
        </PriceCardWrap>
        <PriceDetail show={show} priceData={priceData} />
      </PriceContent>
    </PriceContainer>
  );
};

export default PriceCardSection;
