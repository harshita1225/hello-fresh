import React, { Component } from "react";
import Slider from "react-slick";
import slide1 from "../images/slide1.png";
import slide2 from "../images/slide2.png";
import slide3 from "../images/slide3.png";
import slide4 from "../images/slide4.png";
import slide5 from "../images/slide5.png";
import slide6 from "../images/slide6.png";

export default class Responsive extends Component {
  render() {
    let settings = {
      dots: true,
      infinite: false,
      autoplay: false,
      interval: 5000,
      slidesToShow: 4,
      slidesToScroll: 4,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="w-[1200px] mx-auto px-10">
        <Slider {...settings}>
          <div>
            <img className="rounded-2xl" src={slide1} alt="1" />
          </div>
          <div>
            <img className="rounded-2xl" src={slide2} alt="2" />
          </div>
          <div>
            <img className="rounded-2xl" src={slide3} alt="3" />
          </div>
          <div>
            <img className="rounded-2xl" src={slide4} alt="4" />
          </div>
          <div>
            <img className="rounded-2xl" src={slide5} alt="5" />
          </div>
          <div>
            <img className="rounded-2xl" src={slide6} alt="6" />
          </div>
        </Slider>
      </div>
    );
  }
}
