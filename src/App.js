import React from "react";
import "./App.scss";
import MenuSlider from "./Component/MenuSlider/MenuSlider";

const slides = [];
slides.push(<img src="./menu.jpg" alt="error" />);
slides.push(<img src="./menu.jpg" alt="error" />);
slides.push(<img src="./menu.jpg" alt="error" />);
slides.push(<img src="./menu.jpg" alt="error" />);
slides.push(<img src="./menu.jpg" alt="error" />);
slides.push(<img src="./menu.jpg" alt="error" />);

function App() {
  return (
    <div className="App">
      <MenuSlider slides={slides}></MenuSlider>
    </div>
  );
}

export default App;
