import React, { useState } from "react";
import { slides } from "../data/dataVerticalSlider";

const VerticalSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div >
    <div className="slider-container">
        <h5 className="slider-title headingFive"> <span className="menu-number">03</span> SPACE LAUNCH 101</h5>
      <div className="container-technology">
        
      <div className="slide-buttons-technology">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide-button-technology ${
              currentSlide === index ? "active-technology" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="slide-content-technology">
        <p className="par">{slides[currentSlide].title}</p>
        <h2 className="headingTwo">{slides[currentSlide].header}</h2>
        <p className="par">{slides[currentSlide].text}</p>
        </div>
        <div>
        <img className="mobile-hidden" src={slides[currentSlide].image} alt="slide" />
        <img className="desktop-hidden" src={slides[currentSlide].imageMobile} alt="slide" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default VerticalSlider;
