import React from "react";
import { priceData } from "./data";
import {
  PriceCardWrap,
  PriceContainer,
  PriceContent,
  PriceHeader,
  PriceTitle,
  PriceDesc,
} from "./styles";
import PriceCard from "../../components/PriceCard/index";
import PriceDetail from "../../components/PriceDetail";

const PriceCardSection = () => {
  return (
    <PriceContainer>
      <PriceHeader data-aos="zoom-in">
        <PriceTitle>Price</PriceTitle>
        <PriceDesc>블레스 음악 스튜디오의 가격을 확인해보세요!</PriceDesc>
      </PriceHeader>
      <PriceContent>
        <PriceCardWrap data-aos="zoom-in">
          {priceData.map((data) => (
            <PriceCard data-aos="zoom-in" key={data.id} data={data} />
          ))}
        </PriceCardWrap>
      </PriceContent>
      <PriceDetail data-aos="zoom-in" priceData={priceData} />
    </PriceContainer>
  );
};

export default PriceCardSection;
