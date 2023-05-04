import React from 'react'
import '../style/Template.css';
import Navbar from './Navbar';
import facebook from "../assests/facebook.png";
import twitter from "../assests/twitter.png";
import instagram from "../assests/instagram.png";
import linkedin from "../assests/linkedin.png";
import { NavLink} from "react-router-dom"

const Template = ({name, fname}) => {
  return (
    <div className='template'>
      <Navbar/>
            <div className="social_media">
                  {/* <a href=""><i class="fa-brands fa-facebook" style={{color : "white"}}></i></a> */}
                  {/* <a href="" className="facebook">
                    <img src={facebook} alt="" />
                  </a>
                  <a href="" className="twitter">
                    <img src={twitter} alt="" />
                  </a>
                  <a href="" className="instagram">
                    <img src={instagram} alt="" />
                  </a> */}
                  <a href="https://www.facebook.com/alexisEnt" target='_blank' className="facebook">
                  <img src={facebook} alt="" />
                </a>
                {/* <a href="" className="twitter">
                  <img src={twitter} alt="" />
                </a>
                <a href="" className="instagram">
                  <img src={instagram} alt="" />
                </a> */}
                <a href="https://www.linkedin.com/company/alexis-enterprise-pte-ltd" target='_blank' className="linkedin">
                  <img src={linkedin} alt="" />
                </a>
            </div>

            <div className="main">
                    <div className="top">{name}</div>
                    <div className="bottom"><NavLink exact to="/">Home</NavLink> / {name} {fname}</div>
            </div>
    </div>
  )
}

export default Template