import React from "react";
import "../style/WhoWeAre.css";
import Group from "../assests/Group.png";

const WhoWeAre = () => {
  return (
    <>
      <div className="wwr_outer">
        <div className="leftside">
          <div className="content">
            <div className="heading">Who We Are</div>

            <div className="bar"></div>

            <div className="text">
              ALEXIS ENTERPRISE was established with a team of well-experienced
              market leaders. The primary aim behind commencing the company was
              to provide convenient and hassle-free logistic services based in
              Singapore. Over the years of operations, we have become a
              prominent name in tech-enabled top logistics companies, having
              networks across the country. With the right combination of our
              local knowhow and collective experience, we’re ready to take
              whatever challenge comes in.
              <br />
              <br />
              We at Alexis Enterprise have built a strong user-base of thousands
              of happy & satisfied customers, with several milestones already
              accomplished. We are unlocking the world of possibilities with
              delightful services every time you need us!
            </div>
          </div>
        </div>

        <div className="rightside">
          <img src={Group} alt="" />
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
