import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './about.css'
import IMG from '../../images/link.jpg'


function About() {

  return (
    <div>
     
      <div className="container-fluid main">

        <div className="row sub_row">
          <div className="col-12 line">
            <h2 id="sub_text">About me</h2></div>
        </div>
        <div className="row full_row">
          <div className="col-md-1"></div>
        </div>
        <div className="col-md-10 clearfix">
          <img className="P-img rounded" src={IMG} alt="Sile"/>
            <p>
              My name is "Sile Kiman".
              I have Bachelor of Science in Computer Information.
              I have a passion for learning new technologies
              As a billingual I'm fluently in French and English</p>
            
            <p>
              <span className="decoration">Professional background:  </span>  
                For the past ten years I worked as Technical Software Analyst.
                I also have experience creating cutting edge websites for clients
                using wordpress and different APIs to meets theirs various needs. 
                I have several years of experience working with
                waterfall and agile methodologies. In short, all these experiences have helped me develop an 
                exceptional communication, teamwork and a strong analytical skills with ability to multitask and quickly
                adjust to people, circumstances and responsibilities.
                      
            </p>
          </div>
       </div>
    </div> 
    );

  }


export default About;
