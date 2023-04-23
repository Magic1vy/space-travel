import React, { useState, useEffect } from "react";
import data from "../data/data";
import line from "../assets/destination/Rectangle.png";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemToCart,
  incrementCartItemQuantity,
  getCartItems,
} from "../redux/cartSlice";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    setQuantity(1);
  }, [activeSlide]);

const handleClick = () => {
    const cartItemExists = cartItems.some(
      (cartItem) => cartItem.destinationId === selectedDestination.id
    );
  
    if (cartItemExists) {
      dispatch(
        incrementCartItemQuantity({
          destinationId: selectedDestination.id,
          quantity,
        })
      );
    } else {
      dispatch(addItemToCart({ destination: selectedDestination, quantity }));
    }
    setQuantity(1); 
  };

  const selectedDestination = data[activeSlide];

  return (
    <>
    <div className="slider-destination">
      <h5 className="slider-title headingFive"><span className="menu-number">01</span> Pick your destination</h5>
      <div className="slider-content-destination">
        <div className="slider-image-destination">
          <img className="image-destination" src={selectedDestination.image} alt={selectedDestination.name} />
        </div>
        <div className="slider-text-destination">
          <ul className="category-list-destination">
            {data.map((slide, index) => (
              <li
                key={index}
                className={index === activeSlide ? "active" : ""}
                onClick={() => setActiveSlide(index)}>
                {slide.category}
                </li>
            ))}
          </ul>
          <h2 className="headingTwo">{selectedDestination.name}</h2>
          <p className="par">{selectedDestination.description}</p>
          <div className="destination-line">
            <img src={line} alt="line" />
          </div>
          <div className="distanceAndTime">
            <div>
              <p className="par">AVG. DISTANCE</p>
              <h5 className="headingFive">{selectedDestination.distance}</h5>
            </div>
            <div className="travel-time">
              <p className="par">Est. travel time</p>
              <h5 className="headingFive">{selectedDestination.travelTime}</h5>
            </div>
          </div>
          <div className="changeQuantity">
            <h3 className="headingThree">$ {selectedDestination.price}</h3>
            <div>
              <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
            </div>
          </div>
          <div className="btn-destination">
            <button className="btn-cta-destination" onClick={handleClick}>Buy Ticket</button>
          </div>
        </div>
      </div>
    </div>
</>
  );
};

export default Slider;

