import React from 'react'
import '../Footer/footer.css' 
 
 
export default footer =>{

   return(
       
      <footer className="footer mt-auto py-3">

           <div className="container">
              <br />
              <div id="plink_wrapper">
               
               <a href="#"><i className="fas fa-phone-volume"> 980-339-2136</i></a> &#32 &#124;
               <a href="#"><i className="fas fa-envelope-open-text"> Sile.Kiman@gmail.com</i></a>&#32  &#124;
               <a href="#"><i className="fas fa-map-marker-alt">  Charlotte, NC</i></a>&#32  &#124;
               <a href="https://www.linkedin.com/in/sile-kiman" target="_blank"><i className="fab fa-linkedin"> LinkedIn</i></a>&#32  &#124;
               <a href="https://github.com/Sile-Kiman" target="_blank"><i className="fab fa-github"> GitHub</i></a> &#32 &#124;
               <a href='/resume' target="_blank"><i className="far fa-file"> Resume </i></a>
            </div>
             
            <span> &copy;2020 www.silekiman.com. All Rights Reserved.</span>
        </div>

    </footer>
    )
}