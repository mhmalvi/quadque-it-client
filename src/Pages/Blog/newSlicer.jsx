import React, { Component } from "react";
import Slider from "react-slick";
import RightArrow from "../../Asset/Image/arrow-right.png";
import LeftArrow from "../../Asset/Image/arrow-left.png";

function SampleNextArrow(props) {
  const {  style, onClick } = props;
  return (
    <div

      style={{ ...style, display: "block", display: "flex", justifyContent: "center" }}
      onClick={onClick}
    >
    <div><img src={RightArrow} alt="" /></div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default function CustomArrows(){
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <h2>Custom Arrows</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );

}