import React, { useState } from 'react'
import { priceData } from "./data";
import {
  PriceCardWrap, PriceContainer, PriceContent, PriceDetail,
  PriceHeader, PriceLine, PriceTitle, DetailTable, DetailTitle
} from "./styles";
import PriceCard from '../PriceCard/PriceCard';

const PriceCardSection = () => {

  const [cardFocus, setCardFocus] = useState(1);
  const [show, setShow] = useState(false);

  const changeCardFocus = (id) => {
    setCardFocus(id);
    setShow(!show);
  }

  return (
    <PriceContainer>
      <PriceHeader>
        <PriceTitle>Price</PriceTitle>
        <PriceLine />
      </PriceHeader>
      <PriceContent>
        <PriceCardWrap>
          {priceData.map(data => (
            <PriceCard
              key={data.id}
              data={data}
              changeCardFocus={changeCardFocus} />
          ))}
        </PriceCardWrap>
        <PriceDetail show={show}>
          <DetailTitle>상세 요금</DetailTitle>
          <DetailTable>{cardFocus} 번 데이터 테이블...</DetailTable>
        </PriceDetail>
      </PriceContent>
    </PriceContainer>
  )
}

export default PriceCardSection
