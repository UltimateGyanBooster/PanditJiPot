import React from "react";
import "./Contact.css";
import { FcCallback } from "react-icons/fc";  
import { FcClock} from "react-icons/fc";
import { FaLocationArrow } from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contactContainer">

      <div className="page-header" >
      </div>
      <div className="page-header-text"><h2>#let's_talk</h2>
        <p>LEAVE A MESSAGE, We love to hare form you!</p>
      </div>
      <div className="location">
      <div class="details">
        <span>GET IN TOUCH </span>
        <h2>Visit one of our factory locations or contact us today</h2>
        <h3>Location</h3>
          <li>
           <FaLocationArrow/>
            <p>Hno 32 Bhatti klan New Delhi 110074</p>
          </li>
          <li>
          <FaEnvelope/>
            <p>PanditJiPot@gmail.com</p>
          </li>
          <li>
           <FcCallback/>
            <p>+91 9315061711 , +91 9891366446</p>
          </li>
          <li>
            <FcClock/>
            <p>24/7</p>
          </li>
        </div>
      
      <div class="map"> 
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.
          830386739266!2d77.18748481463868!3d28.424374382500382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
          1!3m3!1m2!1s0x390d2136538edbb5%3A0x4dd50a009c91174c!2sPandit%20ji%20pot%20(Gamla%20vala)
          !5e0!3m2!1sen!2sin!4v1679144024732!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
</div>

    
  );
};



 
export default Contact;