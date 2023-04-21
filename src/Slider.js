import React, { useState } from 'react';
import data from '../data/data';
import line from "../assets/destination/Rectangle.png"
import ChangeQuantity from "../Cart/ChangeQuantity";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleClick = (index) => {
    setActiveSlide(index);
  };


  return (
    <div className="slider-destination">
      <h5 className="slider-title headingFive" ><span className="menu-number">01</span> Pick your destination</h5>
      <div className="slider-content-destination">
        <div className="slider-image-destination">
          <img src={data[activeSlide].image} alt={data[activeSlide].name} />
        </div>
        <div className="slider-text-destination">
          <ul className="category-list-destination">
            {data.map((slide, index) => (
              <li
                key={index}
                className={index === activeSlide ? 'active' : ''}
                onClick={() => handleClick(index)}
              >
                {slide.category}
              </li>
            ))}
          </ul>
          <h2 className="headingTwo">{data[activeSlide].name}</h2>
          <p className="par">{data[activeSlide].description}</p>
          <div>
                <img src={line} alt="line" />
            </div>
            <div className="distanceAndTime">
            <div>
                            <p className="par">AVG. DISTANCE</p>
                            <h5 className="headingFive">{data[activeSlide].distance}</h5>
                            </div>
                            <div className='travel-time'> 
                            <p className="par">Est. travel time</p>
                            <h5 className="headingFive">{data[activeSlide].travelTime}</h5>
                            </div>
          </div>
          <div className="changeQuantity">
          <h3 className='headingThree'>$ {data[activeSlide].price}</h3>
          {/* </div>
          <div className="btn-destination"> */}
            
            <div><ChangeQuantity  quantity= { quantity } setQuantity={setQuantity}  /></div>
            </div>
            <div>
          <button className="btn-cta-destination">Buy Ticket</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
