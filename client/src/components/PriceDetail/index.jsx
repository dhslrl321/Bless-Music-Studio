import React from "react";
import {
  DetailTable,
  DetailTitle,
  PriceDetailContainer,
  DetailWrapper,
  PriceWrap,
  PriceTag,
  Price,
} from "./styles";

const PriceDetail = ({ show, priceData }) => {
  return (
    <PriceDetailContainer show={show}>
      <DetailTitle>Price Table</DetailTitle>
      <DetailWrapper>
        <DetailTable show={show}>
          <PriceWrap>
            <PriceTag>{priceData[0].name} 시간제</PriceTag>{" "}
            <Price>{priceData[0].price}</Price>
          </PriceWrap>
          <PriceWrap>
            <PriceTag>월 대여 3시간</PriceTag>{" "}
            <Price>{priceData[0].hr3} 원</Price>
          </PriceWrap>
          <PriceWrap>
            <PriceTag>월 대여 4시간</PriceTag>{" "}
            <Price>{priceData[0].hr4} 원</Price>
          </PriceWrap>
          <PriceWrap>
            <PriceTag>월 대여 6시간</PriceTag>{" "}
            <Price>{priceData[0].hr6} 원</Price>
          </PriceWrap>
          <PriceWrap>
            <PriceTag>월 대여 12시간</PriceTag>{" "}
            <Price>{priceData[0].hr12} 원</Price>
          </PriceWrap>
          <PriceWrap>
            <PriceTag>월 대여 새벽반</PriceTag>{" "}
            <Price>{priceData[0].dawn} 원</Price>
          </PriceWrap>
        </DetailTable>
        <DetailTable show={show}>
          <PriceWrap>
            <PriceTag>{priceData[1].name} 시간제</PriceTag>{" "}
            <Price>{priceData[1].price}</Price>
          </PriceWrap>
          <PriceWrap>
            <PriceTag>월 대여 3시간</PriceTag>{" "}
            <Price>{priceData[1].hr3} 원</Price>
          </PriceWrap>
          <PriceWrap>
            <PriceTag>월 대여 4시간</PriceTag>{" "}
            <Price>{priceData[1].hr4} 원</Price>
          </PriceWrap>
          <PriceWrap>
            <PriceTag>월 대여 6시간</PriceTag>{" "}
            <Price>{priceData[1].hr6} 원</Price>
          </PriceWrap>
          <PriceWrap>
            <PriceTag>월 대여 12시간</PriceTag>{" "}
            <Price>{priceData[1].hr12} 원</Price>
          </PriceWrap>
          <PriceWrap>
            <PriceTag>월 대여 새벽반</PriceTag>{" "}
            <Price>{priceData[1].dawn} 원</Price>
          </PriceWrap>
        </DetailTable>
        <DetailTable show={show}>
          <PriceWrap>
            <PriceTag>{priceData[2].name} 시간제</PriceTag>{" "}
            <Price>{priceData[2].price} 원</Price>
          </PriceWrap>
        </DetailTable>
      </DetailWrapper>
    </PriceDetailContainer>
  );
};

export default PriceDetail;
