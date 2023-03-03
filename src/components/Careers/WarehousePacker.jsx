import React, { useState } from "react";
import BackToTopButton from "../BackToTopButton";
import Footer from "../Footer";
import Template from "../Template";
import "./RPManager.css";
import validator from "validator";
import UploadCV from "./UploadCV";
import { NavLink } from "react-router-dom";
// import 'react-notifications/lib/notifications.css';
import axios from "axios";
// import {NotificationContainer, NotificationManager} from 'react-notifications';

const RPManager = () => {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNo, setPhoneNo] = useState("");
  const [fileData, setfileData] = useState(null);
  const [validmessage, setValidMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (fName && lName && !validmessage && PhoneNo) {
      const data = {
        fName,
        lName,
        Email,
        PhoneNo,
        fileData,
      };

      try {
        const result = await axios.post("url", data);

        // const result = await fetch("url",{
        //   method : 'post',
        //   body : JSON.stringify(data),
        //   headers: {
        //     "Content-type": "application/json; charset=UTF-8"
        // }
        // })
      } catch (error) {
        console.log(error);
      }
    } else {
      if (!fName && !lName && (validmessage || "") && !PhoneNo) {
        // NotificationManager.info('Please, enter First Name');
        // NotificationManager.info('Please, enter Last Name');
        // NotificationManager.error('Please, enter valid Email!');
        // NotificationManager.info('Please, enter a Phone No');
      }
    }
  };

  const validateEmail = (e) => {
    var email = e.target.value;
    setEmail(e.target.value);
    if (validator.isEmail(email)) {
      setValidMessage("");
    } else {
      setValidMessage("Please, enter valid Email!");
    }
  };

  return (
    <div className="">
      <Template name="Careers" fname="/Warehouse Packer" />
      <div className="rpmanager">
        <div className="main">
          <div className="top">
            <div className="left">
              {/* <div className="rpinfo">
                <div className="date">Started Oct 27, 2022</div> <div>|</div>{" "}
                <div className="application">20 Applicants</div>
              </div> */}
              <br />

              <div className="jobHeading">Job Introduction</div>
              <br />

              <div className="jobdesc">
                We are looking for a Packer to join our team to ensure products
                are shipped quickly and safely.
                <br />
                <br />
                Packers must also be able to seal each container, use hand tools
                and adhesives to protect the package from harm during
                transportation and observe all company safety standards.
                <br />
                <br />
                Ultimately, you will work in a fast-paced environment, and you will be responsible for the wellbeing and accuracy of items shipped to our customers.
                <br />
                <br />
                <h2 className="jobHeading">Responsibilities</h2>
                {/* 1. &nbsp; Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry <br /> <br />
                2. &nbsp; Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry <br /> <br />
                3. &nbsp; Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry <br /> <br />
                4. &nbsp; Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry <br /> <br />
                5. &nbsp; Lorem Ipsum is simply dummy text of the printing and
                typesetting industry.Lorem Ipsum is simply dummy text of the
                printing and typesetting industry <br /> <br /> */}
                <ul>
                    <li>Pack and label completed items for shipment or storage.</li>
                    <li>Follow all company guidelines regarding packaging to ensure items arrive at their destination.</li>
                    <li>Identify and dispose of defective items before they are shipped to customers.</li>
                    <li>Properly use packaging materials, including hand tools, glues, nails, padding, etc.</li>
                    <li>Keep complete records of all materials that go through the warehouse.</li>
                </ul>
                <br />
                <br />
                <h2 className="jobHeading">Requirements and skills</h2>
                <ul>
                    <li>Proven work experience as a Packer or similar role.</li>
                    <li>Experience in manufacturing or related field is preferred.</li>
                    <li>Basic shop skills, such as using hand tools.</li>
                    <li>Ability to follow verbal and written instructions.</li>
                    <li>Strong communication skills and desire to work with other team members.</li>
                    <li>Able to speak and write English.</li>
                    <li>Able to operate and follow safety measure in operating heavy machinery etc, pallet jack and forklifts.</li>
                </ul>
                <br />
                <br />
                <center>
                  <div className="hr"></div>
                </center>
              </div>
            </div>
            <div className="right">
              {/* <br />
              <br />
              <div className="jobCatergory">Categories</div>
              <br />
              <div className="categories">
                <a href="">
                  <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    style={{ marginRight: "1rem" }}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.000274595 1.81599L0.000273792 10.996C0.000273714 11.886 1.08027 12.336 1.71027 11.706L6.30027 7.11599C6.69027 6.72599 6.69027 6.09599 6.30027 5.70599L1.71027 1.11599C1.08027 0.485986 0.000274673 0.925987 0.000274595 1.81599Z"
                      fill="#4D0043"
                    />
                  </svg>
                  Job category 1
                </a>
                <a href="">
                  <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    style={{ marginRight: "1rem" }}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.000274595 1.81599L0.000273792 10.996C0.000273714 11.886 1.08027 12.336 1.71027 11.706L6.30027 7.11599C6.69027 6.72599 6.69027 6.09599 6.30027 5.70599L1.71027 1.11599C1.08027 0.485986 0.000274673 0.925987 0.000274595 1.81599Z"
                      fill="#4D0043"
                    />
                  </svg>
                  Job category 2
                </a>
                <a href="">
                  <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    style={{ marginRight: "1rem" }}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.000274595 1.81599L0.000273792 10.996C0.000273714 11.886 1.08027 12.336 1.71027 11.706L6.30027 7.11599C6.69027 6.72599 6.69027 6.09599 6.30027 5.70599L1.71027 1.11599C1.08027 0.485986 0.000274673 0.925987 0.000274595 1.81599Z"
                      fill="#4D0043"
                    />
                  </svg>
                  Job category 3
                </a>
                <a href="">
                  <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    style={{ marginRight: "1rem" }}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.000274595 1.81599L0.000273792 10.996C0.000273714 11.886 1.08027 12.336 1.71027 11.706L6.30027 7.11599C6.69027 6.72599 6.69027 6.09599 6.30027 5.70599L1.71027 1.11599C1.08027 0.485986 0.000274673 0.925987 0.000274595 1.81599Z"
                      fill="#4D0043"
                    />
                  </svg>
                  Job category 4
                </a>
                <a href="">
                  <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    style={{ marginRight: "1rem" }}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.000274595 1.81599L0.000273792 10.996C0.000273714 11.886 1.08027 12.336 1.71027 11.706L6.30027 7.11599C6.69027 6.72599 6.69027 6.09599 6.30027 5.70599L1.71027 1.11599C1.08027 0.485986 0.000274673 0.925987 0.000274595 1.81599Z"
                      fill="#4D0043"
                    />
                  </svg>
                  Job category 5
                </a>
                <a href="">
                  <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    style={{ marginRight: "1rem" }}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.000274595 1.81599L0.000273792 10.996C0.000273714 11.886 1.08027 12.336 1.71027 11.706L6.30027 7.11599C6.69027 6.72599 6.69027 6.09599 6.30027 5.70599L1.71027 1.11599C1.08027 0.485986 0.000274673 0.925987 0.000274595 1.81599Z"
                      fill="#4D0043"
                    />
                  </svg>
                  Job category 6
                </a>
              </div>

              <br />
              <br />
              <center>
                <div className="hr"></div>
              </center>

              <br />
              <br /> */}

              <div className="search">
                <div className="searchHeading">Search</div>

                <br />
                <br />

                <div className="searchBar">
                  <input type="text" name="" id="" placeholder="Keyword" />
                  <i
                    className="fa fa-search searchicon "
                    aria-hidden="true"
                  ></i>
                </div>
              </div>

              <br />
              <br />
              <center>
                <div className="hr"></div>
              </center>

              <br />
              <br />

              <div className="recentJobs">
                <div className="recentJobHeading">Recent Jobs</div>

                <br />

                <div className="recentJobList">
                  <NavLink exact to="/careers/driver">
                    <a href="">
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        style={{ marginRight: "1rem" }}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.000274595 1.81599L0.000273792 10.996C0.000273714 11.886 1.08027 12.336 1.71027 11.706L6.30027 7.11599C6.69027 6.72599 6.69027 6.09599 6.30027 5.70599L1.71027 1.11599C1.08027 0.485986 0.000274673 0.925987 0.000274595 1.81599Z"
                          fill="#4D0043"
                        />
                      </svg>
                      Delivery Driver
                    </a>
                  </NavLink>
                  <NavLink exact to="/careers/warehouse-packer">
                    <a href="">
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        style={{ marginRight: "1rem" }}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.000274595 1.81599L0.000273792 10.996C0.000273714 11.886 1.08027 12.336 1.71027 11.706L6.30027 7.11599C6.69027 6.72599 6.69027 6.09599 6.30027 5.70599L1.71027 1.11599C1.08027 0.485986 0.000274673 0.925987 0.000274595 1.81599Z"
                          fill="#4D0043"
                        />
                      </svg>
                      Warehouse Packer
                    </a>
                  </NavLink>
                  <NavLink exact to="/careers/office-administrator">
                    <a href="">
                      <svg
                        width="7"
                        height="12"
                        viewBox="0 0 7 12"
                        style={{ marginRight: "1rem" }}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.000274595 1.81599L0.000273792 10.996C0.000273714 11.886 1.08027 12.336 1.71027 11.706L6.30027 7.11599C6.69027 6.72599 6.69027 6.09599 6.30027 5.70599L1.71027 1.11599C1.08027 0.485986 0.000274673 0.925987 0.000274595 1.81599Z"
                          fill="#4D0043"
                        />
                      </svg>
                      Office Admin
                    </a>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <br />
            <div className="interest">
              <svg
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.7817 25.7226C34.8723 24.4953 35.2133 24.6788 34.2517 23.3826C32.4102 20.9363 29.2097 20.5536 28.9717 20.0926C36.8417 18.3727 39.5616 23.5727 39.7817 25.7226Z"
                  fill="#EFEEEE"
                />
                <path
                  d="M41.2215 32.6027C39.8515 32.1627 38.5315 31.4727 37.1015 31.3127C37.2015 29.7927 36.7015 28.2327 35.7215 27.0527C35.1015 26.3027 34.2815 25.7127 33.3815 25.3327C33.1715 25.2427 32.2115 25.1027 32.1915 24.8228C32.1815 24.5428 33.2515 24.6228 33.4815 24.6228C35.6315 24.6228 37.7216 25.1928 39.7916 25.8428C39.8015 25.9828 39.8015 26.1028 39.7916 26.2028C41.5879 27.5999 41.6146 30.3728 41.2215 32.6027Z"
                  fill="#EFEEEE"
                />
                <path
                  d="M16.623 48.347C21.4091 48.347 25.289 42.1672 25.289 34.544C25.289 26.9208 21.4091 20.741 16.623 20.741C11.8369 20.741 7.95703 26.9208 7.95703 34.544C7.95703 42.1672 11.8369 48.347 16.623 48.347Z"
                  fill="#5772FF"
                />
                <path
                  d="M36.2511 39.6627L36.2011 39.7027C38.3711 40.1127 39.9411 41.6327 40.2311 43.3227C40.8311 46.5927 36.6311 50.4527 22.8011 47.8326C12.4132 44.0642 10.4672 33.446 15.7211 26.3227C17.2763 24.2278 21.1512 21.619 20.5511 15.6727C20.0007 9.99542 18.6226 7.81092 18.8811 4.69272C19.276 -0.172981 25.3472 0.661319 27.5711 4.05272C29.2752 6.60862 30.1584 15.3036 28.3611 20.2227C36.0886 18.3835 40.0948 23.1494 39.7912 26.2027C41.772 27.7433 41.4916 30.5687 41.1612 33.0527C43.2837 35.6223 41.5954 40.0907 36.2511 39.6627Z"
                  fill="white"
                />
                <path
                  d="M22.8014 47.8326C19.6314 46.6826 16.7114 44.6626 14.9014 41.8126C11.9514 37.1826 12.4614 30.7427 15.7214 26.3227C16.2114 25.6627 16.7514 25.0427 17.3414 24.4727C19.7014 22.1927 20.8814 18.9427 20.5514 15.6727C20.3914 14.0227 20.1314 12.3927 19.7714 10.7827C19.3214 8.77265 18.7114 6.74265 18.8814 4.69265C18.9114 4.32265 18.9714 3.94265 19.0814 3.59265C19.0914 3.61265 19.1114 3.62265 19.1214 3.63265C23.3714 7.22265 25.4714 13.2827 24.0614 18.6627C22.4333 24.907 15.9407 30.5937 17.4014 37.3827C18.3714 41.8727 22.9114 44.8927 27.4714 45.5027C32.1351 46.117 37.8821 44.7976 40.2313 43.3227C40.8315 46.5927 36.6314 50.4528 22.8014 47.8326Z"
                  fill="#EFEEEE"
                />
                <path
                  d="M36.9915 39.7028C36.4715 39.6328 35.9415 39.5628 35.4215 39.4828C37.909 38.2852 38.6648 34.6466 36.1515 32.6428C35.9115 32.4528 34.3215 31.8327 34.5715 31.4128C34.8315 31.0028 37.1915 31.4028 37.6415 31.4528C43.9398 32.1758 43.2825 39.7028 36.9915 39.7028Z"
                  fill="#EFEEEE"
                />
                <path
                  d="M42.5399 35.5659C42.5599 34.6459 42.2799 33.7659 41.7599 33.0159C41.9546 32.6265 42.7102 27.9831 40.2999 25.9759C40.2799 24.8859 39.5599 22.6759 37.5599 21.0759C36.0599 19.8759 33.4099 18.6759 29.1099 19.5459C29.98 16.5558 30.0799 12.6659 29.3899 7.94588C29.2099 6.72588 28.8899 5.13588 27.9899 3.77588C26.6999 1.80588 24.2599 0.615883 21.92 0.815883C19.9108 1.00068 18.6006 2.08148 18.38 4.65588C18.2094 6.84868 18.8542 8.93918 19.28 10.8859C20.1832 14.8502 20.5657 17.804 19.25 20.8359C18.42 20.4459 17.54 20.2359 16.62 20.2359C11.57 20.2359 7.45996 26.6559 7.45996 34.546C7.45996 42.4259 11.57 48.846 16.62 48.846C18.05 48.846 19.4 48.336 20.6 47.426C21.3254 47.8004 22.2912 48.1935 22.63 48.306C22.7324 48.306 26.8462 49.206 30.94 49.206C37.13 49.206 39.37 47.236 40.13 46.176C41.03 44.9161 41.09 43.396 40.31 42.016C39.87 41.246 39.22 40.606 38.43 40.146C40.7399 39.7259 42.4999 37.8259 42.5399 35.5659ZM16.6199 47.8459C12.1199 47.8459 8.45986 41.8759 8.45986 34.5459C8.45986 27.2059 12.1199 21.2358 16.6199 21.2358C17.3799 21.2358 18.1199 21.4058 18.8199 21.7259C17.6924 23.7931 16.7994 24.0435 15.3199 26.0259C11.8199 30.7659 11.4799 37.3659 14.4799 42.0859C15.6899 43.9959 17.4699 45.6459 19.6299 46.9059C18.6999 47.5159 17.6899 47.8459 16.6199 47.8459ZM37.2099 39.2159C36.2999 39.1559 35.3899 39.1259 34.4699 39.1059C34.1799 39.0759 33.9699 39.3159 33.9699 39.5959C33.9699 39.7159 34.0099 39.8359 34.0699 39.9159C34.1199 40.1459 34.3399 40.3059 34.5899 40.2859C36.6699 40.1159 38.5699 40.9759 39.4399 42.5059C40.0199 43.5359 39.9799 44.6659 39.3099 45.5959C36.6729 49.3101 24.7222 48.6336 20.5099 46.2459C18.3199 45.0459 16.5199 43.4259 15.3199 41.5459C12.5399 37.1758 12.8699 31.0359 16.1199 26.6158C17.7393 24.4452 18.8054 24.2805 20.1399 21.3258C21.6309 17.9425 21.1577 14.7163 20.2599 10.6758C19.7406 8.53458 19.2373 6.53498 19.3799 4.73578C19.5354 2.74068 20.4196 1.95728 21.9999 1.81578C23.9899 1.64578 26.0599 2.65578 27.1599 4.32578C27.7699 5.25578 28.1499 6.42578 28.3999 8.09578C29.1299 13.1058 28.9599 17.1258 27.8899 20.0558C27.8199 20.2258 27.8599 20.4258 27.9899 20.5558C28.1099 20.6958 28.2999 20.7558 28.48 20.7058C31.98 19.8258 34.9 20.2158 36.94 21.8558C38.29 22.9358 38.94 24.2958 39.19 25.2258C37.48 24.3658 34.92 24.0758 31.33 24.3458C31.05 24.3658 30.85 24.6058 30.87 24.8758C30.89 25.1558 31.13 25.3558 31.4 25.3358C40.2129 24.6948 41.426 27.4359 40.89 32.0758C40.01 31.3658 38.86 30.9658 37.64 30.9958C36.49 31.0058 34.92 31.0758 33.53 31.1758C33.25 31.1858 33.04 31.4258 33.06 31.7058C33.08 31.9758 33.33 32.1858 33.59 32.1658C34.97 32.0758 36.52 32.0058 37.68 31.9958C38.74 31.9758 39.82 32.3958 40.55 33.1258C41.2 33.7758 41.56 34.6458 41.5401 35.5458C41.5067 37.7573 39.3419 39.41 37.2099 39.2159Z"
                  fill="black"
                />
              </svg>

              <div className="interestHeading">Interested?</div>
            </div>

            <br />

            <div className="subhead">Great! Submit your application below.</div>

            <br />
            <br />

            <form action="" onSubmit={handleSubmit} className="form">
              <div className="fullname">
                <input
                  type="text"
                  name="fname"
                  id=""
                  className="fname"
                  placeholder="First Name*"
                  value={fName}
                  onChange={(e) => setfName(e.target.value)}
                  autoComplete="off"
                />
                <input
                  type="text"
                  name="lname"
                  id=""
                  className="lname"
                  placeholder="Last Name*"
                  value={lName}
                  onChange={(e) => setlName(e.target.value)}
                  autoComplete="off"
                />
              </div>

              <input
                type="text"
                name="email*"
                className="email"
                placeholder="Email Id*"
                value={Email}
                onChange={(e) => validateEmail(e)}
                autoComplete="off"
              />

              <input
                type="text"
                name="phoneno"
                id=""
                className="phoneno"
                placeholder="Phone Number*"
                value={PhoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                autoComplete="off"
              />

              <label htmlFor="jobfile" className="uploadcv">
                <UploadCV />
              </label>
              <input
                type="file"
                name=""
                id="jobfile"
                className="file"
                onChange={(e) => setfileData(e.target.files[0])}
              />

              <div className="consent">
                <input type="checkbox" name="" id="" />
                <div>
                  I allow Alexis Enterprise to use my contact information to
                  send me e-mail updates about Alexis Enterprise activities.
                </div>
              </div>

              <button type="submit" className="submit">
                Submit Application
              </button>
              {/* <NotificationContainer/> */}
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default RPManager;
