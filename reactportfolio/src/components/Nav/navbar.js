import React from "react";

export default Nav =>{
  return (
   <section id="heading">
      <nav className="navbar navbar-expand-lg" id="heading">
        <a className="navbar-brand main-header" href="index.html">
            <h1>Sile Kiman</h1>
        </a>
        <button className="navbar-toggler icon" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "><i className="fa fa-bars" aria-hidden="true"></i></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link a_link " href="index.html">About</a>
                </li>
                <li className="nav-item active">
                    <a className="a_link nav-link" href="portfolio.html">Portfolio </a>
                </li>
                <li className="nav-item">
                    <a className="a_link nav-link" href="contact.html">Contact</a>
                </li>
               
            </ul>
        </div>
    </nav>
</section>
  );
}

 
