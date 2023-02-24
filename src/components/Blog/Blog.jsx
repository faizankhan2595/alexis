import React from 'react'
import Footer from '../Footer'
import Template from '../Template'
import './Blog.css';
import blogpic from '../../assests/blogpic.jpg'
import { Link } from 'react-router-dom';
import BackToTopButton from '../BackToTopButton';

const data = [
  { 
    img : blogpic,
    head : "Freight Rail Supply Optimization",
    content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    datencmt : "Oct 21, 2022   2 Comment(s)"
  },
  { 
    img : blogpic,
    head : "Freight Rail Supply Optimization",
    content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    datencmt : "Oct 21, 2022   2 Comment(s)"
  },
  { 
    img : blogpic,
    head : "Freight Rail Supply Optimization",
    content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    datencmt : "Oct 21, 2022   2 Comment(s)"
  },
  { 
    img : blogpic,
    head : "Freight Rail Supply Optimization",
    content : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    datencmt : "Oct 21, 2022   2 Comment(s)"
  },
]

const Blog = () => {
  return (
    <div >
        <Template name = "Blogs"/>
        <div className="blog">
          <div className="main">

              <div className="left">

                {data.map((item, index) => {
                  return(
                    <Link to = "/blog/frso"  key = {index}>
                    <div className="box">
                      
                      <div className="top">
                        <img src = {item.img} alt="" />
                      </div>
                      <div className="bottom">
    
                        <div className="datencmt">
                          {item.datencmt}
                        </div>
    
                        <div className="blogheading">
                          {item.head}
                        </div>
                        <div className="blogcontent">
                          {item.content}
                        </div>
                      </div>
                    </div>
                    </Link>                    
                  )
                })}

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
        </div>
        <Footer/>
        <BackToTopButton/>
    </div>
  )
}

export default Blog