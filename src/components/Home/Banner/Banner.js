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
            <h3>First Slide Label</h3>
            <p>televisions inventory at tech scope</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
