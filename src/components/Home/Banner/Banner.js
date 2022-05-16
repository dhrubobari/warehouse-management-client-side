import { Carousel } from "react-bootstrap";
import React from "react";
import tv from "../../../tv.jpeg";

const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={tv} alt="First slide" />
          <Carousel.Caption>
            <h3>Find The Best Device For You</h3>
            <p>Spend more time with your family.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
