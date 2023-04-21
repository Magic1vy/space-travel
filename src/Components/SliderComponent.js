import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slidesData from "../data/slidesData";

const SliderComponent = () => {
  return (
    <div className="slider-container">
      <h5 className="slider-title headingFive"  > <span className="menu-number">02</span> MEET YOUR CREW</h5>
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={4000}
      >
        {slidesData.map((slide, index) => (
          <div className="custom-slide" key={index}>
            <div className="slide-text">
              <h5 className="headingFive occupation">{slide.occupation}</h5>
              <h2 className="headingTwo">{slide.name}</h2>
              <p className="par">{slide.crewDescription}</p>
            </div>
            <div className="slide-img">
              <img className="crew-slide-image" src={slide.image} alt={slide.alt} />
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );

};

export default SliderComponent;
