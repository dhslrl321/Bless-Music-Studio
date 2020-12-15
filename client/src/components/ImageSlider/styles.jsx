import styled from "styled-components";

export const SliderContainer = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Slider = styled.section`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .image {
    width: 300px;
    height: auto;
    border-radius: 10px;
  }

  .slide {
    opacity: 0;
    transition-duration: 1s ease;
  }
  .slide.active {
    opacity: 1;
    transition-duration: 1s;
    transform: scale(1.08);
  }
`;

export const LeftIcon = styled.div`
  position: absolute;
  top: 50%;
  left: -100px;
  z-index: 10;
  font-size: 3rem;
  color: #000;
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: 768px) {
    left: -10px;
    color: white;
  }
`;

export const RightIcon = styled.div`
  position: absolute;
  top: 50%;
  right: -100px;
  z-index: 10;
  font-size: 3rem;
  color: #000;
  cursor: pointer;
  user-select: none;
  @media screen and (max-width: 768px) {
    right: -10px;
    color: white;
  }
`;
