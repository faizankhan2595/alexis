import React from 'react'
import '../style/whatdoyou.css';

const WhatDoYou = () => {
  return (
    <div className='whatdoyou'>
      <div className="main">
        <div className="top">
          <div className="heading">What Do You Ship?</div>
          <div className="bar"></div>
        </div>

        <div className="bottom">
          <div className="content">
          We offer comprehensive logistics solutions, from the initial pickup of goods to final delivery. We provide shipping containers, packing and crating services, and transportation insurance to ensure the safe and secure transport of our clients' products.
          </div>

          <div className="button"><a href="">LEARN MORE</a></div>
        </div>
      </div>
    </div>
  )
}

export default WhatDoYou