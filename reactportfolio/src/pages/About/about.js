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
              My name is Mamessile Kiman. I go by "Sile Kiman".
              I moved to Charlotte several years ago from Nebraska where I went to school and graduated from
              Bellevue University with Bachelor of Science (Computer Information
              System.) I've been here ever since</p>
            <p>
            <span className="decoration">Personal life:</span> 
            I'm a wife and a mother. I love to travel, meet new people and learn new technologies.  
            </p>
            <p>
              <span className="decoration">Professional background:</span>  
                For the past ten years I worked as Technical Software Analyst and recently became a Web Developer.
                I have experience in developing a functional web applications using the newest Framework such as ReactJS and software testing.  I’ve demonstrated hands-on skills with
                various software development languages and tools. I have several years of experience working with
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
