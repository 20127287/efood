import React from "react";
import "./App.css";
import Slider from "./Component/Slider/Slider";

const url = [];
url.push("https://www.easyslidertexas.com/img/easy-slider-festival-five.jpg");
url.push("https://www.easyslidertexas.com/img/easy-slider-festival-five.jpg");
url.push("https://www.easyslidertexas.com/img/easy-slider-festival-five.jpg");
url.push("https://www.easyslidertexas.com/img/easy-slider-festival-five.jpg");
url.push("https://www.easyslidertexas.com/img/easy-slider-festival-five.jpg");
url.push("https://www.easyslidertexas.com/img/easy-slider-festival-five.jpg");

function App() {
  return (
    <div className="App">
      <Slider url={url}></Slider>
    </div>
  );
}

export default App;
