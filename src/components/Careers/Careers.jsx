import React from 'react'
import Footer from '../Footer'
import Template from '../Template'
import BackToTopButton from '../BackToTopButton';
import {Link} from "react-router-dom";
import './Careers.css';


const Data = [
  {
    name : "Delivery Driver",
    desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    url : "/careers/regional",
  },
  {
    name : "Warehouse Packer",
    desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    url : "/careers/regional",
  },
  {
    name : "Office Admin",
    desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    url : "/careers/regional",
  },
  {
    name : "Regional Program Manager",
    desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    url : "/careers/regional",
  },
  {
    name : "Regional Program Manager",
    desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    url : "/careers/regional",
  },
  {
    name : "Regional Program Manager",
    desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    url : "/careers/regional",
  },
  {
    name : "Regional Program Manager",
    desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    url : "/careers/regional",
  },
  {
    name : "Regional Program Manager",
    desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    url : "/careers/regional",
  },
  {
    name : "Regional Program Manager",
    desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    url : "/careers/regional",
  },

]

const Careers = () => {
  return (
    <div className>
        <Template name = "Careers"/>
          <div className="careers">
            <div className="main">
              <div className="top">
                <div className="heading">JOB OPPORTUNITIES</div>
                <div className="bar"></div>
              </div>

              <div className="bottom">

                {Data.map((item, index) => {
                  return(
                    <Link to = {item.url} key={index}>
                    <div className="box">
                      <div className="boxtop">
                          <i class="fa-sharp fa-solid fa-play fa-2x"> </i>
                            <div className="boxheading">{item.name}</div>
                      </div>
                      
                      <div className="boxbottom">
                        {item.desc}
                      </div>
                    </div>
                  </Link>              

                  )
                })}
              </div>
            </div>
          </div>
          
        <Footer/>
        <BackToTopButton/>
    </div>
  )
}

export default Careers
