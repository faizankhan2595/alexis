import React from 'react'
import AdditionalServices from '../AdditionalServices';
import BackToTopButton from '../BackToTopButton';
import Carousel from "../Carousel";
import Clients from '../Clients';
import Content4 from '../Content4';
import CoreCapabilities from '../CoreCapabilities';
import { Data } from "../Data";
import Footer from '../Footer';
import Map from '../Map';
import Quotes from '../Quotes';
import WhatDoYou from '../WhatDoYou';
import WhatOurClientSays from '../WhatOurClientSays/WhatOurClientSays';
import WhoWeAre from "../WhoWeAre";

const Landingpage = () => {
  return (
    <div>
      <Carousel images={Data} />
      <WhoWeAre/>
      <Content4/>
      <Quotes/>
      <CoreCapabilities/>
      <AdditionalServices/>
      <WhatDoYou/>
      <WhatOurClientSays/>
      <Clients/>
      <Map/>
      <Footer/>
      <BackToTopButton/>
    </div>
  )
}

export default Landingpage