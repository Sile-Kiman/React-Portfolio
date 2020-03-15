import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import './portfolio.css' 
function Portfolio() {

  return (
    <div>
         
      <div className="container-fluid main">
         
          <div id="line">
            <h1 id="sub_text">Portfolio</h1>
          </div>

            <div className="row full_row">
                <div className="col-md-1"></div>
                <div className="col-md-4">   
                    <div className="all_images">
                        <div id="codelink_wrapper">
                          <a href="https://github.com/Sile-Kiman/Web-API-Code-Quiz" target="_blank"> View Code </a>&#124;
                          <a href="https://sile-kiman.github.io/Web-API-Code-Quiz/index.html" target="_blank"> View Site </a>&#124;
                        </div>  
                        <img src="/responsive-portfolio/assets/images/startQuizPage.PNG" alt="quiz" /> 
  
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <div className="all_images">
                        <div id="codelink_wrapper">
                            <a href="https://github.com/Sile-Kiman/5-Days-Forecast_Weather_Dashboard" target="_blank"> View Code </a>&#124;
                            <a href="https://sile-kiman.github.io/5-Days-Forecast_Weather_Dashboard/" target="_blank"> View Site </a>&#124;
                        </div>
                        <img src="/responsive-portfolio/assets/images/mult.PNG" alt="forecast"/> 
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <div className="all_images">
                        <div id="codelink_wrapper">
                            <a href="https://github.com/Sile-Kiman/Note-Taker" target="_blank"> View Code </a>&#124;
                            <a href="https://cryptic-river-86772.herokuapp.com/notes" target="_blank"> View Site </a>&#124;
                        </div> 
                       <img src="../assets/images/noteTaker.PNG" alt="project"/> 
                        
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                    <div className="all_images">
                        <div id="codelink_wrapper">
                            <a href="https://github.com/Sile-Kiman/Burger" target="_blank"> View Code </a>&#124;
                            <a href="https://pacific-ravine-38343.herokuapp.com/" target="_blank"> View Site </a>&#124;
                        </div>    
                         <img src="../assets/images/burger.PNG" alt="calendar"/>
                     </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-4">

                    <div className="all_images">
                        <div id="codelink_wrapper">
                            <a href="https://github.com/Sile-Kiman/EventFinder-Group9" target="_blank"> View Code </a>&#124;
                            <a href="https://sile-kiman.github.io/EventFinder-Group9/" target="_blank"> View Site </a>&#124;
                        </div>
                        

                        <img src="../assets/images/desktopView.png" alt="event"/>
                         
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">

                    <div className="all_images">
                        <div id="codelink_wrapper">
                            <a href="https://github.com/Sile-Kiman/All-Booked" target="_blank"> View Code </a>&#124;
                            <a href="https://cryptic-chamber-77839.herokuapp.com/" target="_blank"> View Site </a>&#124;
                    
                        </div>
                         <img src="../assets/images/allBooked.PNG" alt="library"/>
                          
                    </div>
                </div>
             
      </div>
      </div>
    </div>

    );

  }


export default Portfolio;
