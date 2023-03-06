import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";

import logo1 from "../assests/logo1.png";
import logo2 from "../assests/logo2.png";
import logo3 from "../assests/logo3.png";
import logo4 from "../assests/logo4.png";
import logo5 from "../assests/logo5.png";
import logo6 from "../assests/logo6.png";
import logo7 from "../assests/logo7.png";

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: false,
      pauseOnFocus: false,
      pauseOnDotsHover: false,
    };
    return (
      <div className="mySwiper" style={{ width: "100%" }}>
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          <div>
            <div className="logo5 swiperlogoBox">
              <img src={logo5} alt="" />
            </div>
          </div>
          <div>
            <div className="logo6 swiperlogoBox">
              <img src={logo6} alt="" />
            </div>
          </div>
          <div>
            <div className="logo7 swiperlogoBox">
              <img src={logo7} alt="" />
            </div>
          </div>
          <div>
            <div className="logo1 swiperlogoBox">
              <img src={logo1} alt="" />
            </div>
          </div>
          <div>
            <div className="logo2 swiperlogoBox">
              <img src={logo2} alt="" />
            </div>
          </div>
          <div>
            <div className="logo3 swiperlogoBox">
              <img src={logo3} alt="" />
            </div>
          </div>
          <div>
            <div className="logo4 swiperlogoBox">
              <img src={logo4} alt="" />
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
