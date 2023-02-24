import React from 'react'
import { useState } from 'react';
import './DropMessage.css';
import validator from "validator";
// import 'react-notifications/lib/notifications.css';
// import {NotificationContainer, NotificationManager} from 'react-notifications';
import axios from 'axios';

const DropMessage = () => {
const [validmessage, setValidMessage] = useState("");
const [Name, setName] = useState("");
const [Email, setEmail] = useState("");
const [Message, setMessage] = useState("");


const handleSubmit = async() =>{

  if(Name && !validmessage && Message){

    const data = {
      "name" : Name,
      "email" : Email,
      "message" : Message
    };
    
    try {
      const result = await axios.post("url",data);

      // const result = await fetch("url",{
      //   method : 'post',
      //   body : JSON.stringify({
      //     title: "foo",
      //     body: "bar",
      //     userId: 1
      // }),
        
      //   headers: {
      //     "Content-type": "application/json; charset=UTF-8"
      // }
      // })

      // console.log(result)
    } 
    
    catch (error) {
      console.log(error);
    }

  }
  
  else{

    // if(validmessage && !Name && !Message){
    //   NotificationManager.error('Please, enter valid Email!');
    //   NotificationManager.info('Please, enter a Name');
    //   NotificationManager.info('Type a Message');
    // }
  
    // else if(!Name && !Message){
    //   NotificationManager.info('Please, enter a Name');
    //   NotificationManager.info('Type a Message');
    // }
  
    // else if(validmessage && !Message){
    //   NotificationManager.error('Please, enter valid Email!');
    //   NotificationManager.info('Type a Message');
    // }

    // else if(validmessage && !Name){
    //   NotificationManager.error('Please, enter valid Email!');
    //   NotificationManager.info('Please, enter a Name');
    // }

    // else if(!Name){
    //   NotificationManager.info('Please, enter a Name');
    // }

    // else if(!Message){
    //   NotificationManager.info('Type a Message');
    // }

    // else if(validmessage){
    //   NotificationManager.error('Please, enter valid Email!');
    // }
  }

  
}

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
    <div className="dropmessage">
        <div className="main">
            <div className="top">
                <div className="heading">Drop A Message</div>
                <div className="bar"></div>
            </div>

            <div className="bottom">
                <div className="nameandemail">
                    <input type="text" name='name' className='name' placeholder='Name*' value={Name} onChange = {(e) => setName(e.target.value)} autocomplete="off"/> 
                    <input type="text" name='email' className='email' placeholder='E-mail*' value={Email} onChange={(e) => validateEmail(e)} autocomplete="off"/>                    
                </div>
                    <span
                    style={{
                    fontWeight: "bold",
                    color: "red",
                    position : "relative",
                    left : "18rem"
                    }}
                    >
                    {validmessage}
                    </span>                
                <div id ='messageText'>
                <textarea className="messageText" name="" id="" cols="30" rows="10" placeholder='Message*' value={Message} onChange = {(e) => setMessage(e.target.value)}></textarea>
                </div>
                <div className="messagebox"><button className='sendmsg' onClick={handleSubmit}><span>Send message</span></button></div>
                {/* <NotificationContainer/> */}
            </div>
        </div>
    </div>
  )
}

export default DropMessage