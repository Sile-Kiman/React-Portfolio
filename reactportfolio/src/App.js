import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './pages/About/about';
import Contact from './pages/Contact/contact';
import Portfolio from './pages/Portfolio/portfolio';
import Nav from './components/Nav/navbar'
import Footer from './components/Footer/footer'
import Wrapper from "./components/Wrapper/index";


function App() {
  return (
    <Router>
      <div>
        < Nav/>
         <Wrapper>
          <Route path={["/", "/about"]}component={About} />
          {/* <Route path= "/contact" component={Contact} /> */}
          {/* <Route exact path= "/portfolio" component ={Portfolio} /> */}
         </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
