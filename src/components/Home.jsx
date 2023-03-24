import React from "react";
// import bg from "../src/assets/bg.jpg";

function Home(props,{ searchQuery }) {
  return (
    <div className="section1">
      <div className="main">
        <div className="weather-card">
          <h3>Weather Details</h3>
          <div className="details-card">
            <p>
              Cloudly <span id="leftside">{props.clouds}</span>
            </p>
            <p>
              Humnicity <span id="leftside">{props.main.humidity}%</span>
            </p>
            <p>
              Wind <span id="leftside">{props.wind}km/h</span>
            </p>
          </div>
        </div>
      </div>

      <div className="bottom-show">
        <div className="bottom-value">
          <h1 style={{fontSize: "5rem",marginTop: "15px"}}>{Math.ceil(props.main.temp)}°C </h1>
          <div className="city">
            <h1>{props.name}</h1>
            <span>{props.time} {props.day} {props.date} </span>
          </div>
          <span style={{margin:"auto"}}>☀️</span>
        </div>
      </div>
    </div>
  );
}

export default Home;
