import React from "react";
import "./App.css";
import Slider from "./Component/Slider/Slider";

const url = [];
url.push("https://www.easyslidertexas.com/img/easy-slider-festival-five.jpg");
url.push("https://voyagesetvagabondages.com/wp-content/uploads/2014/10/P1010113-1400x600.jpg");
url.push("https://eycb.eu/wp-content/uploads/2020/02/hrlvr2zlunk-1400x600.jpg");
url.push("https://www.easyslidertexas.com/img/easy-slider-festival-five.jpg");
url.push("https://voyagesetvagabondages.com/wp-content/uploads/2014/10/P1010113-1400x600.jpg");
url.push("https://eycb.eu/wp-content/uploads/2020/02/hrlvr2zlunk-1400x600.jpg");

function App() {
  return (
    <div className="App">
      <Slider url={url}></Slider>
    </div>
  );
}

export default App;
