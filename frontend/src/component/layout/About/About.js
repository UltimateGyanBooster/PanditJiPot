import React from "react";
import "./aboutSection.css";
import { Button, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/PanditJiPot";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
                 <h1>About Us</h1> 

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/de44ifnv5/image/upload/v1681282486/avatars/myprofileimg_djlszo.png"
              alt="Founder"
            />
           <p>Aashish</p> 
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample website made by @Aashish. Only with the
              purpose to sales clayPot.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <h2>Our Brands</h2>
            <a
              href="https://www.youtube.com/channel/UCl-dsUW_uoOTXpmvN7G1y5g"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/PanditJiPot" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
