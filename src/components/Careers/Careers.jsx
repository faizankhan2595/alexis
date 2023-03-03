import React from 'react'
import Footer from '../Footer'
import Template from '../Template'
import BackToTopButton from '../BackToTopButton';
import {Link} from "react-router-dom";
import './Careers.css';


const Data = [
  {
    name : "Delivery Driver",
    desc : "We are looking for a responsible Delivery Driver to distribute products promptly to our customers. You will represent our company in a professional and cost-effective manner to increase our profitability and customer satisfaction.",
    url : "/careers/driver",
  },
  {
    name : "Warehouse Packer",
    desc : "We are looking for a Packer to join our team to ensure products are shipped quickly and safely.",
    url : "/careers/warehouse-packer",
  },
  {
    name : "Office Admin",
    desc : "We are looking for a responsible Administrator to organize our company's day-to- day operations. Your job will be to provide clerical support to our managers and employees and coordinate all daily administrative activities.",
    url : "/careers/office-administrator",
   },
  // {
  //   name : "Regional Program Manager",
  //   desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   url : "/careers/regional",
  // },
  // {
  //   name : "Regional Program Manager",
  //   desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   url : "/careers/regional",
  // },
  // {
  //   name : "Regional Program Manager",
  //   desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   url : "/careers/regional",
  // },
  // {
  //   name : "Regional Program Manager",
  //   desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   url : "/careers/regional",
  // },
  // {
  //   name : "Regional Program Manager",
  //   desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   url : "/careers/regional",
  // },
  // {
  //   name : "Regional Program Manager",
  //   desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  //   url : "/careers/regional",
  // },

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
