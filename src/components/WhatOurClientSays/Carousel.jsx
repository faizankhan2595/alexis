import { useEffect } from "react";
import { useState } from "react";
// import "./Carousel.css";

function Carousel({ images,flag }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;
  
  useEffect(() => {
    // timeOut =
    //   autoPlay &&
    //   setTimeout(() => {
    //     slideRight();
    //   }, 2500);
  });

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };
 
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
            
            {flag === '0' ? 
              <div className="slide">
                <div className="content">
                  <div className="contentbox">
                    <div className="title">
                      <div className="leftquote">
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.64123 0.755859C5.09718 1.00489 0.0028 1.57073 0 8.51158V17.2444H7.9084V7.90091H5.28243C5.11608 5.40603 7.1705 4.76181 9.40457 4.26729L8.64123 0.755859ZM19.2366 0.755859C15.6926 1.00489 10.5982 1.57074 10.5954 8.51158V17.2444H18.5038V7.90091H15.8779C15.7115 5.40603 17.7659 4.76181 20 4.26729L19.2366 0.755859Z" fill="#DFDFDF"/>
                        </svg>
                      </div>
                      <div className="heading">{image.heading}</div>
                    </div>
                    <div className="text">{image.text}</div>
                    <div className="nameandcountry">
                      <div className="name">{image.name}</div>
                      <div className="country">{image.country}</div>
                    </div>
                  </div>
                </div>
                <img className="card_image" src={image.image} alt="" />
              </div> : 

              <div className="slide">
                <img className="card_image" src={image.image} alt="" />
                <div className="content">
                  <div className="contentbox">
                    <div className="title">
                      <div className="leftquote">
                        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.64123 0.755859C5.09718 1.00489 0.0028 1.57073 0 8.51158V17.2444H7.9084V7.90091H5.28243C5.11608 5.40603 7.1705 4.76181 9.40457 4.26729L8.64123 0.755859ZM19.2366 0.755859C15.6926 1.00489 10.5982 1.57074 10.5954 8.51158V17.2444H18.5038V7.90091H15.8779C15.7115 5.40603 17.7659 4.76181 20 4.26729L19.2366 0.755859Z" fill="#DFDFDF"/>
                        </svg>
                      </div>
                      <div className="heading">{image.heading}</div>
                    </div>
                    <div className="text">{image.text}</div>
                    <div className="nameandcountry">
                      <div className="name">{image.name}</div>
                      <div className="country">{image.country}</div>
                    </div>
                  </div>
                </div>
              </div>}
              

              
            </div>
          );
        })}

        {/* <div className="carousel_pagination">
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
        </div> */}
      </div>
    </div>
  );
}

export default Carousel;