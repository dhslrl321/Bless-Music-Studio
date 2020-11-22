import React from "react";
import {
  Container,
  ImageBall,
  Image,
  Title,
  Button,
  Price,
  Detail,
  DetailWrapper,
} from "./styles";
const PriceCard = ({ data, changeCardFocus }) => {
  return (
    <>
      <Container>
        <ImageBall>
          <Image src={data.image}></Image>
        </ImageBall>
        <Title>{data.name}</Title>
        <Price>{data.price}</Price>
        <DetailWrapper>
          <Detail>{data.desc}</Detail>
          <Detail>{data.desc2}</Detail>
          <Detail>{data.desc3}</Detail>
        </DetailWrapper>
        <Button onClick={() => changeCardFocus(data.id)}>Detail</Button>
      </Container>
    </>
  );
};

export default PriceCard;
