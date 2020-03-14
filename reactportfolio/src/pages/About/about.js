import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from '../../components/Nav/navbar'
import Footer from '../../components/Footer/footer'
import '../../components/Nav/navbar.css'

function About() {

  return (
    <div>
     
      <div class="container-fluid main">

        <div class="row sub_row">
          <div class="col-12 line">
            <h2 id="sub_text">About me</h2></div>
        </div>
        <div class="row full_row">
          <div class="col-md-1"></div>
        </div>
        <div class="col-md-10 clearfix">
          <img class="P-img rounded" src="../assets/images/Sile-profile.jpg" alt="Sile"/>
            <p>
              My name is Mamessile Kiman. I go by "Sile Kiman".
              I moved to Charlotte several years ago from Nebraska where I went to school and graduated from
              Bellevue University with Bachelor of Science (Computer Information
              System.) I've been here ever since</p>
            <p>
            <span class="decoration">Personal life:</span> 
            I'm a wife and a mother. I love to travel, meet new people and learn new technologies.  
            </p>
            <p>
              <span class="decoration">Professional background:</span>  
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
