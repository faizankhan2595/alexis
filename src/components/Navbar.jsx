import React from 'react'
// import { useEffect } from "react";
import { useState } from "react";
import logo from "../assests/logo.png";
import logomob from "../assests/logomob.png";
import hamburger from "../assests/hamburger.png";
// import icon from "../assests/icon.png";
import phn from "../assests/phn.png";
import {NavLink ,useLocation} from "react-router-dom";
import '../style/Navbar.css';
import ScrollToTop from './ScrollToTop';
// import Logo from './Logo';
import whatsapp from "../assests/whatsapp.png";


const Navbar = () => {
    const [colorChange, setColorchange] = useState(false);
    const [active, setActive] = useState(false);
    const { pathname } = useLocation();
    console.log(pathname);

    // const [navstyle, setnavstyle] = useState({})

    // const changeNavstyle = () =>{

    //   if (window.scrollY >= 200){
    //     setnavstyle({
    //       position: "fixed",
    //       top : "12%",
    //       display: "block",
    //       width: "100%",
    //       height: "66.1rem",
    //       background: "#4D0043",
    //       /* top: 12%; */
    //       transition: "left 1s",
    //       left: "0",
    //       zIndex: "1",
    //     })
    //   }

    //   else{
    //     setnavstyle({
    //       position: "absolute",
    //       top : "90%",
    //       display: "block",
    //       width: "100%",
    //       height: "66.1rem",
    //       background: "#4D0043",
    //       /* top: 12%; */
    //       transition: "left 1s",
    //       left: "0",
    //       zIndex: "1",
    //     })
    //   }

    // }


    const showNavbar = () =>{
        setActive(!active)
    }

    const changeNavbarColor = () => {
      if (window.scrollY >= 200) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };
    window.addEventListener("scroll", changeNavbarColor);
    // window.addEventListener("scroll", changeNavstyle);

  return (
    <div className="Navbar">
      <ScrollToTop/>
        <div className={colorChange ? "nav_colorChange" : "nav"}>
                  {/* <div className="nav"> */}
                  <div className="outer">
                    <div className='companylogo'>
                      <img src={logo} alt = " "/>
                      <img src={logomob} alt = " "/>
                      {/* <Logo/> */}
                    </div>

                    <div className="inner">
                      {/* Links */}

                      <li className={`${pathname=='/' ? '' : 'inActive'}`}>
                      <NavLink exact to="/">Home</NavLink>
                      </li>
                      {/* <li><a href="">Services</a></li> */}
                      <li>
                        <NavLink to="/services">Services </NavLink>
                      </li>

                      <li>
                        <NavLink to="/gallery">Gallery </NavLink>
                      </li>
                      <li>
                      <NavLink to="/blog">Blog </NavLink>
                      </li>                      
                      <li>
                      <NavLink to="/careers">Careers </NavLink>
                      </li>
                      <li>
                      <NavLink to="/contactus">Contact Us </NavLink>
                      </li>

                    </div>


                    {/* Start of login button */}
                    <div className="phn">
                        <div>
                          <img src={phn} alt="" />
                        </div>
                        <div>
                          <a href="tel:65123456789">+6592208169</a>
                        </div>
                      </div>
                    <img src = {hamburger} onClick = {showNavbar} className = 'hamburger' alt="" />

                      <div className = {active ? "activenavmenu" : "navmenu"}>
                            <div className="menuitems">
                              {/* Links */}

                              <li>
                              <NavLink exact to="/">Home</NavLink>
                              </li>
                              {/* <li><a href="">Services</a></li> */}
                              <li>
                                <NavLink to="/services">Services </NavLink>
                              </li>

                              <li>
                                <NavLink to="/gallery">Gallery </NavLink>
                              </li>
                              <li>
                              <NavLink to="/blog">Blog </NavLink>
                              </li>                      
                              <li>
                              <NavLink to="/careers">Careers </NavLink>
                              </li>
                              <li>
                              <NavLink to="/contactus">Contact-Us</NavLink>
                              </li>

                              <a
                                href="https://wa.me/65123456789"
                                target="_blank"
                                className="whatsapp"
                              >
                                <img src={whatsapp} alt="" />
                              </a>

                            </div>
                      </div>

                  </div>

                  
                </div>
    </div>
  )
}

export default Navbar

