import React from 'react'
import '../Footer/footer.css'

export default footer =>{

   return(
       
      <footer className="footer mt-auto py-3">

           <div className="container">
              <br />
              <div id="plink_wrapper">
               
               <a href="#"><i className="fas fa-phone-volume"> 980-339-2136</i></a> &#124;
               <a href="#"><i className="fas fa-envelope-open-text"> Sile.Kiman@yahoo.com</i></a>  &#124;
               <a href="#"><i className="fas fa-map-marker-alt"> Charlotte, NC</i></a> &#124;
               <a href="https://www.linkedin.com/in/sile-kiman-2a4478b3" target="_blank"><i className="fab fa-linkedin"> LinkedIn</i></a>  &#124;
               <a href="https://github.com/Sile-Kiman" target="_blank"><i className="fab fa-github"> GitHub</i></a>  &#124;
               <a href="./resume.html" target="_blank"><i className="far fa-file"> Resume </i></a>
            </div>
            <br />
            <span> &copy;2020 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.</span>
        </div>

    </footer>
    )
}