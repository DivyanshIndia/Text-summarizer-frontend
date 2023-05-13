
import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="carde">

      <p className="bold">Our project group is made up of four members:</p>
      <p><em>Divyansh Bhatt, Himanshu Godiyal, Shubhangi Tamata,  Sneha Bisht</em></p>
      
      <hr></hr>
      <p>Our mentor is Aisstent Professor <strong><em>Dr. Jogendra Kumar</em></strong>, who provided valuable guidance and support throughout the project.</p>
      <p>We are all students at GBPIET (Govind Ballabh Pant Institute Of Engineering and Techonology) College, where we are studying Computer Science.</p>
      <hr></hr>
      <img  className="shade" src ={require("./clg.jpg")} alt="College"/>
    </div>
  );
}

export default AboutUs;
