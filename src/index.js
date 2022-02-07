import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/Fonts.css";
import Search from "./Search.js";
import Forecast from "./Forecast.js";
import Week from "./Week.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Forecast
          city="london"
          temperature={9}
          humidity={73}
          windSpeed={0.45}
        />
        <Week />
        <Footer />
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
