import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './pages/About/about';
import Nav from './components/Nav/navbar'
import Footer from './components/Footer/footer'
import Wrapper from "./components/Wrapper/index";


function App() {
  return (
    <Router>
      <div>
        < Nav/>
         <Wrapper>
          <Route exact path="/" component={About} />
         </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
