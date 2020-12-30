import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Slider, LeftIcon, RightIcon, SliderContainer } from "./styles";
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <SliderContainer>
      <Slider>
        <LeftIcon>
          <AiOutlineLeft onClick={prevSlide} />
        </LeftIcon>
        <RightIcon>
          <AiOutlineRight onClick={nextSlide} />
        </RightIcon>

        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt={index} className="image" />
              )}
            </div>
          );
        })}
      </Slider>
    </SliderContainer>
  );
};

export default ImageSlider;
