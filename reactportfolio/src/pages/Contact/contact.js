import React from "react";
import './contact.css'
 

function About() {

  return (
    <div>
    <div class="mainC">
 
     <form id="clear" name="Contact" action="mailto:sile.kiman@yahoo.com" method="POST" enctype="text/plain" subject="">
      
    <div id="line">
        <h1 id="sub_text">Contact</h1>
    </div>

    <div id="fields">
        Name:<br/>
        <input class ="allFields" name="Flname" type="text"  placeholder="Your Name"></input>
        <br/>
        Subject:<br/>
        <input type="text" placeholder="Subject"></input>
        <br/>
        Message:<br/>
        <textarea name="text" placeholder="Enter your message"></textarea>
        <br/>
         <div id="plink_wrapper">
            <input type="submit" class = "subBtn" value="Submit" /> 
         </div>
         
        </div>
     </form>

      </div>
    </div>
  );

}


export default About;
