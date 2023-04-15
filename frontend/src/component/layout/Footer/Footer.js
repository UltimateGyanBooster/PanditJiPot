import React from "react";
import logo from "../../../images/PanditJiPot10.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>CONTACT US</h4>
        <p>For more info</p>
       
      <span>
        <p><strong>Address:</strong> Bhatti klan New Delhi 110074</p>
        <p><strong>Phone:</strong>+91 9315061711/+91 9891366446</p>
          <p><strong>Hours:</strong> 24/7</p>
          </span>
      </div>

      <div className="midFooter">
          <img src={logo} alt="PanditJiPot" />
        
        {/* <h1>PanditJiPot</h1> */}
        {/* <p>High Quality is our first priority</p> */}
        <p>Make India <span id="clean">Clean</span>  and <span id="green">Green</span> </p>

        <p>Copyrights 2023 &copy; PanditJiPot</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/PanditJiPot">Instagram</a>
        <a href="http://youtube.com/PanditJiPot">Youtube</a>
        <a href="http://instagram.com/PanditJiPot">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
