import React from "react";
import "../style/AdditionalServices.css";
import One from '../assests/One.png';
import Two from '../assests/Two.png';
import Three from '../assests/Three.png';
import Four from '../assests/Four.png';
import Five from '../assests/Five.png';
import Six from '../assests/Six.png';

const AdditionalServices = () => {
  return (
    <div className="additionalservices">
      <div className="main">
        <div className="top">
          <div className="heading">ADDITIONAL SERVICES</div>
          <div className="bar"></div>
        </div>
        <div className="bottom">
          <div className="row1 flexrow">
            
            <div className="box box1">

              <div className="left">
                <i class="fa-sharp fa-solid fa-play fa-2x"> </i>
                <div className="services">Port Clearance</div>
              </div>

              <div className="right">
                <img src= {One} alt="" />
              </div>

            </div>

            <div className="box box2">

              <div className="left">
                <i class="fa-sharp fa-solid fa-play fa-2x"> </i>
                <div className="services">Local & Overseas Relocation</div>
              </div>   

              <div className="right">
                <img src= {Two} alt="" />
              </div>              

            </div>


            <div className="box box3">

              <div className="left">
                <i class="fa-sharp fa-solid fa-play fa-2x"> </i>
                <div className="services">Manpower Supply</div>
              </div>   

              <div className="right">
                <img src= {Three} alt="" />
              </div>

            </div>
            
          </div>

          <div className="row2 flexrow">

            <div className="box box4">

              <div className="left">
                <i class="fa-sharp fa-solid fa-play fa-2x"> </i>
                <div className="services">Drayage</div>
              </div>   

              <div className="right">
                <img src= {Four} alt="" />
              </div>

            </div>


            <div className="box box5">

              <div className="left">
                <i class="fa-sharp fa-solid fa-play fa-2x"> </i>
                <div className="services">Dry Van & Reefer</div>
              </div>   

              <div className="right">
                <img src= {Five} alt="" />
              </div>
              
            </div>


            <div className="box box6">
              
              <div className="left">
                <i class="fa-sharp fa-solid fa-play fa-2x"> </i>
                <div className="services">Expedited & Time Definite</div>
              </div>   

              <div className="right">
                <img src= {Six} alt="" />
              </div>            
            
            </div> 
           
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdditionalServices;
