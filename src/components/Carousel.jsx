import { useEffect } from "react";
import { useState } from "react";
import "../style/Carousel.css";
import facebook from "../assests/facebook.png";
import twitter from "../assests/twitter.png";
import instagram from "../assests/instagram.png";
import whatsapp from "../assests/whatsapp.png";
import Navbar from "./Navbar";
function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [colorChange, setColorchange] = useState(false);

  let timeOut = null;

  useEffect(() => {
    // timeOut =
    //   autoPlay &&
    //   setTimeout(() => {
    //     slideRight();
    //   }, 5000);
  });

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 200) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <div className="carousel">
      <div className="carousel_wrapper">
        {images.map((image, index) => {
          return (
            /* (condition) ? true : false */

            <div
              key={index}
              className={
                index === current
                  ? "carousel_card carousel_card-active"
                  : "carousel_card"
              }
            >
              <img className="card_image" src={image.image} alt="" />

              {/* Carousel Overlay */}
              <div className="card_overlay">
                {/* Navbar */}
                <Navbar/>

                <div className="card_content">
                  <h1 className="card_heading">{image.heading}</h1>
                  <h3 className="card_subHeading">{image.subHeading}</h3>
                  <a href="" className="card_button">
                    {image.button}
                  </a>
                  <a
                    href="https://wa.me/65123456789"
                    target="_blank"
                    className="whatsapp"
                  >
                    <img src={whatsapp} alt="" />
                  </a>
                </div>
              </div>

              <div className="social_media">
                {/* <a href=""><i class="fa-brands fa-facebook" style={{color : "white"}}></i></a> */}
                <a href="" className="facebook">
                  <img src={facebook} alt="" />
                </a>
                <a href="" className="twitter">
                  <img src={twitter} alt="" />
                </a>
                <a href="" className="instagram">
                  <img src={instagram} alt="" />
                </a>
              </div>
            </div>
          );
        })}

        <div className="carousel_pagination">
          {images.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
