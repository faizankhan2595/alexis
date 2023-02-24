import React from 'react'
import '../../style/WhatOurClientSays.css';
import {firstCarouselData, secondCarouselData} from './Data';
import Carousel from "./Carousel";

const WhatOurClientSays = () => {
  return (
    <div className="whatourclientsays">
      <div className="main">
        <div className="top">
          <div className="heading">What Our Client Says</div>
          <div className="bar"></div>
        </div>
        <div className="bottom">
          <Carousel images={firstCarouselData} flag = "0"/>
          <Carousel images={secondCarouselData} flag = "1" />
        </div>
      </div>
    </div>
  )
}

export default WhatOurClientSays