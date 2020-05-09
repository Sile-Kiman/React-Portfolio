import React from "react";
import Quiz from '../../images/startQuizPage.PNG'
import Mult from '../../images/mult.PNG'
import Note from '../../images/noteTaker.PNG'
import Burger from '../../images/burger.PNG'
import Event from '../../images/desktopView.png'
import Library from '../../images/allBooked.PNG'
import '../Portfolio/portfolio.css'
import Shoestring from '../../images/shoestring.png'
import Employee from '../../images/employee.png'
import styled from 'styled-components'

function Portfolio() {

    const HoverText = styled.p`
	color: #000;
	:hover {
		color: #ed1212;
		cursor: pointer;
	}`

    return (
        <div>

            <div className="container-fluid mainP">

                <div id="line">
                    <h1 id="sub1_text">Portfolio</h1>
                </div>


                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                        <div className="all_images">
                            <div id="codelink_wrapper">
                                <a href="https://github.com/cmarshman/shoestring" target="_blank"> View Code </a>&#124;
                            <a href="https://www.shoestring.me/" target="_blank"> View Site </a>&#124;
                    </div>
                            <img src={Shoestring} alt="shoestring" title='Overview: Shoestring, is a peer to peer payment application that integrates international payments no matter where you are in the world. 
                            Tools: JavaScript, API services, JSON, jQuery, JSX templating, CSS3, Bulma Framework, MongoDB, Express, NodeJS, ReactJS. 
                            '/>
                        </div>

                    </div>

                    <div className="col-md-1"></div>
                    <div className="col-md-4">

                        <div className="all_images">
                            <div id="codelink_wrapper">
                                <a href="https://github.com/Sile-Kiman/All-Booked" target="_blank"> View Code </a>&#124;
                            <a href="https://cryptic-chamber-77839.herokuapp.com/" target="_blank"> View Site </a>&#124;
                        </div>
                            <img src={Library} alt="library" title='Overview: All Booked is a library management application that showcases the MVC (Model-View-Controller) framework. Users can search the libraries database to look for books. 
                            Tools: JavaScript, API services, JSON, jQuery, HTML5, CSS3, Bootstrap, MySQL, Express, Node.  
                            ' />
                        </div>
                    </div>


                </div>
                <div className="row full_row">
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                        <div className="all_images">
                            <div id="codelink_wrapper">
                                <a href="https://github.com/Sile-Kiman/Web-API-Code-Quiz" target="_blank"> View Code </a>&#124;
                          <a href="https://sile-kiman.github.io/Web-API-Code-Quiz/index.html" target="_blank"> View Site </a>&#124;
                        </div>
                            <img class="imge" src={Quiz} alt="quiz" title='Overview:This application allows user to a take a JavaScript code quiz after the clicked on the Code Quiz button. When you land on the page, you are presented with some instructions about how to take the quiz and what to do avoid penalties. You will lose 15 seconds worth of points if you miss a question. If you wait too long the time will keep going and affect your score You should be sent to All done page if the time reaches zero and you try to go to the next page. Tool used to build  site. 1- Html5 2- CSS 3- Bootstrap 3- JavaScript '/>

                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                        <div className="all_images">
                            <div id="codelink_wrapper">
                                <a href="https://github.com/Sile-Kiman/5-Days-Forecast_Weather_Dashboard" target="_blank"> View Code </a>&#124;
                            <a href="https://sile-kiman.github.io/5-Days-Forecast_Weather_Dashboard/" target="_blank"> View Site </a>&#124;
                        </div>
                            <img src={Mult} alt="forecast" title ='Overview: This application is to allow users to search and get the current weather along with five days weather forecast for any city in the US. All search histories should append to the left side of the page in a table. Tools used: 1- Html 2- CSS 3- Bootstrap 3- JavaScript 4- jQuery 5- Moments.js'/>
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
                            <img src={Event} alt="event" title='Overview: The purpose of this mobile-friendly application solves that problem. It allows the user to conveniently search a city in NC and display local concerts and restaurants in return to plan the day accordingly. To supply the application with content, API (Application Programming Interface) are used to contact a server and retrieve selective information to display. Tools: JavaScript, API services, JSON, jQuery, HTML5, CSS3, Bootstrap' />
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                        <div className="all_images">
                            <div id="codelink_wrapper">
                                <a href="https://github.com/Sile-Kiman/Employee-Directory" target="_blank"> View Code </a>&#124;
                            <a href="https://fathomless-reaches-03065.herokuapp.com/" target="_blank"> View Site </a>&#124;
                        </div>
                            <img src={Employee} alt="Employee" title='This assignment is to present to user a list of employees from a company employee directory and search from the list presented to them to narrow down their search.
                            Tool used to build my portfolio site. 1- JSON JSX 2- CSS 3- Bootstrap 3- JavaScript 4- ReactJS
                           ' />
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
                            <img src={Note} alt="project" title='This application allows user to a take a note and save it into a server so that after refresh the page can still populate the saved notes. User is also able to delete a note by clicking on the delete icon next to the note. When the page is refreshed, they saved note should render and display on the left side of the page. Tool used to build site. 1- Html5 2- CSS 3- Bootstrap 3- JavaScript 4- Font awesome 5 - jQuery 6- Node JS' />
                        </div>
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                        <div className="all_images">
                            <div id="codelink_wrapper">
                                <a href="https://github.com/Sile-Kiman/Burger" target="_blank"> View Code </a>&#124;
                            <a href="https://pacific-ravine-38343.herokuapp.com/" target="_blank"> View Site </a>&#124;
                        </div>
                            <img src={Burger} alt="burger" title='This application is to allow user to place a burger order.  User should be able to enter the name of the burger they want to order and click submit. The burger entered should display on the left-hand side along with a devout it button and when clicked the burger devoured should move to the right side.  Tool used to build. 1- Handlebars 2- CSS 3- Bootstrap 3- JavaScript 4- jQuery 5- Node JS 6- MySQL' />
                        </div>
                    </div>
                </div>



            </div>
        </div>

    );

}


export default Portfolio;
