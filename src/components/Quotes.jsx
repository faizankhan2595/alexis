import React from "react";
import "../style/Quotes.css";
import {Link } from "react-router-dom";

const Quotes = () => {
  return (
    <div className="quotes">
      <div className="main">
        <div className="box">
          <div className="top">
            <div className="heading">Get Instant Quotes</div>
            <div className="bar"></div>
          </div>

          <div className="content">
            Ship anything to anywhere with Alexis Enterprise. Not sure what
            information you need for a quote, or which mode of transport to
            choose? This short guide will walk you through the process. Tap the
            button to fill the form!
          </div>

          {/* <div className="button">Get QUOTES</div> */}
           <Link to = "/contactus" className="button">Get QUOTES</Link>
        </div>
      </div>
    </div>
  );
};

export default Quotes;
