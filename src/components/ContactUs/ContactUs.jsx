import React from 'react'
import BackToTopButton from '../BackToTopButton';
import Footer from '../Footer';
import Map from '../Map';
import Template from '../Template';
import './ContactUs.css';
import Content3 from './Content3';
import DropMessage from './DropMessage';

const ContactUs = () => {
  return (
    <div className='contact-us'>
        <Template name = "Contact Us"/>
        <div className="mobileMap">
          <Map/>
        </div>
        <Content3/>
        <DropMessage/>
        <div className="desktopMap">
           <Map/>
        </div>
        <Footer/>
        <BackToTopButton/>
    </div>
  )
}

export default ContactUs