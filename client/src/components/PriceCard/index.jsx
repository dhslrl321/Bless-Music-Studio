import React from "react";
import {
  Container,
  ImageBall,
  Image,
  Title,
  Button,
  Detail,
  DetailWrapper,
} from "./styles";
const PriceCard = ({ toggle, data }) => {
  return (
    <>
      <Container>
        <ImageBall>
          <Image src={data.image}></Image>
        </ImageBall>
        <Title>{data.name}</Title>
        <DetailWrapper>
          <Detail>{data.desc}</Detail>
          <Detail>{data.desc2}</Detail>
          <Detail>{data.desc3}</Detail>
        </DetailWrapper>
        <Button onClick={toggle}>Detail</Button>
      </Container>
    </>
  );
};

export default PriceCard;
