import React from "react";
import Boxes from "./components/Boxes.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import Slider from "./components/Slider.js";
import TwoParas from "./components/TwoParas.js";

import './components/App.css';

function App(){
  return(
    <div>

      <main>
        <Header />
        <Slider />
        <TwoParas />
        <div style={{clear:'both'}} ></div>
        <Boxes />
        <div style={{clear:'both'}} ></div>
        <Footer />
      </main>


    </div>
  )
}

export default App;