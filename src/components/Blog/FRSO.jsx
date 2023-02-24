import React, { useState } from 'react'
import BackToTopButton from '../BackToTopButton';
import Footer from '../Footer';
import Template from '../Template';
import frsopic from '../../assests/frsopic.jpg'
import authorpic from '../../assests/authorpic.jpg'
import './FRSO.css';

const tagandcatleft = {

  width: "3.3rem",
  height: "1.7rem",
  
  fontFamily: 'Lato',
  fontStyle: "normal",
  fontWeight: "500",
  fontSize: "1.4rem",
  lineHeight: "120%",
  color: "#5772FF",
}

const tagandcatright = {
  width: "3.3rem",
  height: "12.9 rem",
  
  fontFamily: 'Lato',
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "1.4rem",
  lineHeight: "120%",
  color: "#898B92",

}

const barstyle = {

  height: "1.8rem",
  border: ".1rem solid #898B92",
}

const FRSO = () => {

  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");  

  const handleSubmit = (e) =>{
     e.preventDefault();
  }


  return (
    <div>
        <Template name = "Blog" fname = "/Freight Rail Supply Optimization"/>
        <div className="frso">
          <div className="main">
            <div className="top">
              <div className="left">
                <div className="blogHeading">
                  Freight Rail Supply Optimization
                </div>

                <br /><br />
                <div className="bloginfo">
                  <div className="date"> Oct 27, 2022</div> 
                  <div>|</div> 
                  <div className="comments">2 Comment(s)</div>
                </div>

                <br />
                <img src = {frsopic} alt="" />
                <br /><br />
                <div className="blogcontent">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <br />
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <br /><br />
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <br /><br />
                
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <br /><br />
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. <br /><br />
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. <br /><br />
                

                <div className="blogsocial">
                    <div className="facebook">
                    <a href="" >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.625 8.67782C17.625 3.88508 13.7636 0 9.00108 0C4.23636 0.00107799 0.375 3.88508 0.375 8.6789C0.375 13.0092 3.5292 16.5989 7.65143 17.25V11.1863H5.46311V8.6789H7.65359V6.76547C7.65359 4.59116 8.94179 3.39028 10.9113 3.39028C11.8556 3.39028 12.842 3.55952 12.842 3.55952V5.69394H11.7543C10.6838 5.69394 10.3496 6.36338 10.3496 7.05006V8.67782H12.7406L12.359 11.1852H10.3486V17.2489C14.4708 16.5978 17.625 13.0081 17.625 8.67782Z" fill="#FFFFFF"/>
                    </svg>
                    </a>
                  </div>


                  <div className="twitter">
                  <a href="">
                  <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.65978 17.1966C14.2208 17.1966 18.3569 10.8882 18.3569 5.42712C18.3569 5.25059 18.3569 5.07154 18.3494 4.89501C19.1546 4.30804 19.8496 3.58133 20.4018 2.74893C19.6496 3.08288 18.8525 3.30298 18.0363 3.40208C18.896 2.88465 19.5399 2.07051 19.8483 1.11099C19.0406 1.59282 18.1565 1.93106 17.2349 2.1109C16.6153 1.44642 15.7953 1.00623 14.9021 0.858499C14.0088 0.710769 13.0921 0.863749 12.294 1.29374C11.4958 1.72374 10.8608 2.40675 10.4872 3.23698C10.1136 4.06721 10.0222 4.99833 10.2274 5.8861C8.5929 5.80357 6.99389 5.37602 5.53407 4.63116C4.07426 3.8863 2.78623 2.84078 1.75353 1.5624C1.22927 2.47415 1.06928 3.55264 1.30604 4.57886C1.5428 5.60508 2.15857 6.5021 3.0283 7.08776C2.37657 7.06546 1.73916 6.88924 1.16749 6.5733V6.63004C1.16861 7.58517 1.49721 8.51061 2.09774 9.24994C2.69827 9.98926 3.53389 10.4971 4.46336 10.6877C4.11056 10.7856 3.74612 10.8343 3.38018 10.8327C3.1222 10.8335 2.86474 10.8094 2.61131 10.7608C2.87401 11.583 3.38553 12.3019 4.07423 12.8167C4.76292 13.3316 5.5943 13.6166 6.45191 13.6319C4.995 14.7842 3.19535 15.4091 1.3428 15.4061C1.01637 15.4074 0.690165 15.3885 0.366058 15.3493C2.2463 16.5564 4.42992 17.1973 6.65978 17.1966V17.1966Z" fill="#FFFFFF"/>
                  </svg>
                  </a>
                  </div>

                  <div className="instagram">
                  <a href="" >
                  <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.375 0.75C6.13616 0.75 5.85463 0.760313 4.97497 0.7995C4.09531 0.84075 3.49616 0.978937 2.97125 1.18312C2.42066 1.39022 1.92194 1.71507 1.50997 2.13497C1.09033 2.54716 0.765517 3.04581 0.558125 3.59625C0.353937 4.12013 0.214719 4.72031 0.1745 5.59687C0.135313 6.47859 0.125 6.75909 0.125 9.00103C0.125 11.2409 0.135313 11.5214 0.1745 12.4011C0.21575 13.2797 0.353937 13.8788 0.558125 14.4037C0.769531 14.9462 1.05106 15.4061 1.50997 15.865C1.96784 16.3239 2.42778 16.6065 2.97022 16.8169C3.49616 17.0211 4.09428 17.1603 4.97291 17.2005C5.85359 17.2397 6.13409 17.25 8.375 17.25C10.6159 17.25 10.8954 17.2397 11.7761 17.2005C12.6537 17.1592 13.2549 17.0211 13.7798 16.8169C14.33 16.6097 14.8284 16.2848 15.24 15.865C15.6989 15.4061 15.9805 14.9462 16.1919 14.4037C16.395 13.8788 16.5342 13.2797 16.5755 12.4011C16.6147 11.5214 16.625 11.2409 16.625 9C16.625 6.75909 16.6147 6.47859 16.5755 5.59791C16.5342 4.72031 16.395 4.12013 16.1919 3.59625C15.9845 3.04579 15.6597 2.54713 15.24 2.13497C14.8282 1.71492 14.3294 1.39004 13.7787 1.18312C13.2528 0.978937 12.6526 0.839719 11.775 0.7995C10.8943 0.760313 10.6149 0.75 8.37294 0.75H8.37603H8.375ZM7.63559 2.23706H8.37603C10.5788 2.23706 10.8397 2.24428 11.709 2.2845C12.5134 2.32059 12.9507 2.45569 13.2415 2.56809C13.6261 2.71763 13.9015 2.89706 14.1902 3.18581C14.479 3.47456 14.6574 3.74888 14.8069 4.13456C14.9203 4.42434 15.0544 4.86159 15.0905 5.66597C15.1307 6.53531 15.139 6.79622 15.139 8.99794C15.139 11.1997 15.1307 11.4616 15.0905 12.3309C15.0544 13.1353 14.9193 13.5715 14.8069 13.8623C14.6746 14.2206 14.4635 14.5445 14.1892 14.8101C13.9004 15.0988 13.6261 15.2772 13.2404 15.4268C12.9517 15.5402 12.5144 15.6743 11.709 15.7114C10.8397 15.7506 10.5788 15.7598 8.37603 15.7598C6.17328 15.7598 5.91134 15.7506 5.042 15.7114C4.23763 15.6743 3.80141 15.5402 3.51059 15.4268C3.15223 15.2947 2.82804 15.0839 2.56184 14.8101C2.28727 14.544 2.07584 14.2198 1.94309 13.8613C1.83069 13.5715 1.69559 13.1343 1.6595 12.3299C1.62031 11.4606 1.61206 11.1997 1.61206 8.99587C1.61206 6.79312 1.62031 6.53325 1.6595 5.66391C1.69663 4.85953 1.83069 4.42228 1.94413 4.13147C2.09366 3.74681 2.27309 3.47147 2.56184 3.18272C2.85059 2.89397 3.12491 2.71556 3.51059 2.56603C3.80141 2.45259 4.23763 2.31853 5.042 2.28141C5.80306 2.24634 6.098 2.23603 7.63559 2.235V2.23706V2.23706ZM12.7795 3.60656C12.6495 3.60656 12.5207 3.63217 12.4006 3.68192C12.2805 3.73167 12.1714 3.8046 12.0794 3.89653C11.9875 3.98846 11.9146 4.09759 11.8648 4.21771C11.8151 4.33782 11.7895 4.46655 11.7895 4.59656C11.7895 4.72657 11.8151 4.85531 11.8648 4.97542C11.9146 5.09553 11.9875 5.20467 12.0794 5.2966C12.1714 5.38853 12.2805 5.46145 12.4006 5.5112C12.5207 5.56096 12.6495 5.58656 12.7795 5.58656C13.042 5.58656 13.2938 5.48226 13.4795 5.2966C13.6652 5.11094 13.7695 4.85913 13.7695 4.59656C13.7695 4.334 13.6652 4.08219 13.4795 3.89653C13.2938 3.71087 13.042 3.60656 12.7795 3.60656V3.60656ZM8.37603 4.76362C7.81407 4.75486 7.25598 4.85797 6.73426 5.06696C6.21253 5.27595 5.73759 5.58664 5.33709 5.98094C4.93659 6.37524 4.61853 6.84527 4.40143 7.36367C4.18433 7.88208 4.07252 8.43849 4.07252 9.00052C4.07252 9.56254 4.18433 10.119 4.40143 10.6374C4.61853 11.1558 4.93659 11.6258 5.33709 12.0201C5.73759 12.4144 6.21253 12.7251 6.73426 12.9341C7.25598 13.1431 7.81407 13.2462 8.37603 13.2374C9.48828 13.2201 10.5491 12.766 11.3295 11.9734C12.1099 11.1807 12.5473 10.1129 12.5473 9.00052C12.5473 7.88813 12.1099 6.82036 11.3295 6.02768C10.5491 5.235 9.48828 4.78098 8.37603 4.76362V4.76362ZM8.37603 6.24966C9.10547 6.24966 9.80503 6.53942 10.3208 7.05521C10.8366 7.571 11.1264 8.27056 11.1264 9C11.1264 9.72944 10.8366 10.429 10.3208 10.9448C9.80503 11.4606 9.10547 11.7503 8.37603 11.7503C7.6466 11.7503 6.94703 11.4606 6.43124 10.9448C5.91545 10.429 5.62569 9.72944 5.62569 9C5.62569 8.27056 5.91545 7.571 6.43124 7.05521C6.94703 6.53942 7.6466 6.24966 8.37603 6.24966V6.24966Z" fill="#FFFFFF"/>
                  </svg>
                  </a>
                  </div>
                </div>

                  <div className="tagandcat">
                    <div className="tag">
                    <span style={tagandcatleft}>Tags:</span> &nbsp; <span style={tagandcatright}>Safe, Services</span>
                    </div>
                    <div className="categories">
                    <span style={tagandcatleft}>Categories:</span> &nbsp; <span style={tagandcatright}>logistics planner</span>
                    </div>
                  </div>

                <br /> 
                <div className="blogauthor">
                    <div className="authorcontent">
                      <div className="leftcontent">
                        <img src= {authorpic} alt="" />
                      </div>
                      <div className="rightcontent">
                        <div className="about">
                          About
                        </div>
                        <div className="name">
                          John Smith
                        </div>
                        <div className="desc">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        </div>
                      </div>
                    </div>
                </div>


                </div>
                
              </div>
              <div className="right">
                <br />
                <br />

                <div className="blogCategory">
                  Categories
                </div>
                    <br />
                        <div className="blogcategories">
                            <a href="">
                                <svg width="7" height="12"  viewBox="0 0 7 12" style={{marginRight : "1rem"}} fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.000274595 1.81599L0.000273792 10.996C0.000273714 11.886 1.08027 12.336 1.71027 11.706L6.30027 7.11599C6.69027 6.72599 6.69027 6.09599 6.30027 5.70599L1.71027 1.11599C1.08027 0.485986 0.000274673 0.925987 0.000274595 1.81599Z" fill="#4D0043"/>
                                </svg>Air Cargo News
                            </a>
                            <a href="">
                                <svg width="7" height="12" viewBox="0 0 7 12" style={{marginRight : "1rem"}} fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.000274595 1.81599L0.000273792 10.996C0.000273714 11.886 1.08027 12.336 1.71027 11.706L6.30027 7.11599C6.69027 6.72599 6.69027 6.09599 6.30027 5.70599L1.71027 1.11599C1.08027 0.485986 0.000274673 0.925987 0.000274595 1.81599Z" fill="#4D0043"/>
                                </svg>Distribution/Materials
                            </a>
                            <a href="">
                                <svg width="7" height="12" viewBox="0 0 7 12" style={{marginRight : "1rem"}} fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.000274595 1.81599L0.000273792 10.996C0.000273714 11.886 1.08027 12.336 1.71027 11.706L6.30027 7.11599C6.69027 6.72599 6.69027 6.09599 6.30027 5.70599L1.71027 1.11599C1.08027 0.485986 0.000274673 0.925987 0.000274595 1.81599Z" fill="#4D0043"/>
                                </svg>Logistics Planner
                            </a>
                            <a href="">
                                <svg width="7" height="12" viewBox="0 0 7 12" style={{marginRight : "1rem"}} fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.000274595 1.81599L0.000273792 10.996C0.000273714 11.886 1.08027 12.336 1.71027 11.706L6.30027 7.11599C6.69027 6.72599 6.69027 6.09599 6.30027 5.70599L1.71027 1.11599C1.08027 0.485986 0.000274673 0.925987 0.000274595 1.81599Z" fill="#4D0043"/>
                                </svg>Supply Chain Research
                            </a>
                            <a href="">
                                <svg width="7" height="12" viewBox="0 0 7 12" style={{marginRight : "1rem"}} fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.000274595 1.81599L0.000273792 10.996C0.000273714 11.886 1.08027 12.336 1.71027 11.706L6.30027 7.11599C6.69027 6.72599 6.69027 6.09599 6.30027 5.70599L1.71027 1.11599C1.08027 0.485986 0.000274673 0.925987 0.000274595 1.81599Z" fill="#4D0043"/>
                                </svg>Transport Digest
                            </a>
                            <a href="">
                                <svg width="7" height="12" viewBox="0 0 7 12" style={{marginRight : "1rem"}} fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.000274595 1.81599L0.000273792 10.996C0.000273714 11.886 1.08027 12.336 1.71027 11.706L6.30027 7.11599C6.69027 6.72599 6.69027 6.09599 6.30027 5.70599L1.71027 1.11599C1.08027 0.485986 0.000274673 0.925987 0.000274595 1.81599Z" fill="#4D0043"/>
                                </svg>World Expert Insight
                            </a>
                        </div>
                        <br />
                        <br />
                        <center><div className="hr"></div></center>

                        <br /><br />

                        <div className="search">

                            <div className="searchHeading">
                                Search
                            </div>

                            <br /><br />

                            <div className="searchBar">
                                <input type="text" name="" id=""  placeholder='Keyword'/>
                                <i className = "fa fa-search searchicon " aria-hidden="true"></i>
                            </div>
                        </div>
              </div>
            </div>
            <div className="bottom">
              <br /><br /><br />
              <div className="noOfcmts">
                2 Comments
              </div>
              <br /><br />

              <div className="commenter">
                <div className="commentercontent">
                  <div className="leftcontent">
                    <img src= {authorpic} alt="" />
                  </div>
                  <div className="rightcontent">
                    <div className="about">
                    <span style={{color :  "#898B92"}}>By</span> 
                    &nbsp;
                     <span style={tagandcatleft}>Wade Warren</span>
                     &nbsp;&nbsp;
                     <span style={barstyle}></span> 
                      &nbsp;&nbsp;
                      <span style={{color :  "#898B92"}}>Posted</span>
                      &nbsp;
                      <span style={tagandcatleft}>Oct 27,2022</span>
                      &nbsp;&nbsp;
                       <span style={barstyle}></span> 
                       &nbsp;&nbsp;
                       <span style={{color :  "#898B92"}}>10:00 am</span>
                       &nbsp;
                    </div>
                    <div className="comment">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </div>
                    <div className="reply">
                        REPLY
                    </div>
                  </div>
                </div>
              </div>

              <br /><br /><br />
              <div className="addcmt">
                ADD COMMENT
              </div>
                <br /><br />
              <form action="" onSubmit={handleSubmit} className="form">

                  <div className="nameandemail">
                    <input type="text" name='name' className='name' placeholder='Name*' value = {Name} onChange = {(e) => setName(e.target.value)} autocomplete="off"/> 
                    <input type="text" name='email' className='email' placeholder='E-mail*' value = {Email} onChange = {(e) => setEmail(e.target.value)} autocomplete="off"/>                    
                  </div>
                  <textarea className="messageText" name="" id="" cols="30" rows="10" placeholder='Message*' value={Message} onChange = {(e) => setMessage(e.target.value)}/>
                  <div className="postcmt">
                  <button type='submit' className='submit'><span>Post Comment</span></button>
                  </div>
              </form>
            </div>
          </div>
        </div>
        <Footer/>
        <BackToTopButton/>
    </div>
  )
}

export default FRSO