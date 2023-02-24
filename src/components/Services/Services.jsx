import React from 'react'
import CoreCapabilities from '../CoreCapabilities';
import AdditionalServices from '../AdditionalServices';
import './Services.css';
import Footer from '../Footer';
import Template from '../Template';
import BackToTopButton from '../BackToTopButton';

const Services = () => {
  return (
    <div className='services'>
        <Template name = "Our Services"/>
        <CoreCapabilities/>
        <AdditionalServices/>
        <Footer/>
        <BackToTopButton/>
    </div>
  )
}

export default Services

