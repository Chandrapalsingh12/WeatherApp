import React, { useRef, useEffect, useState } from "react";
import bg from "../assets/bg.jpg";
import { EarthLink,Thunder, CloudlyLink, Sunny } from "../utils/linkss";

function Cities({ handleSearchQueryChange }) {
  const [searchTerm, setSearchTerm] = useState("");

  const [isZoomedIn, setIsZoomedIn] = useState(false);
  const elementRef = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;
      if (element) {
        const { top } = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight) {
          setInView(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleZoomIn = () => {
    setIsZoomedIn(true);
  };

  const handleZoomOut = () => {
    setIsZoomedIn(false);
  };

  const handleDoubleTap = () => {
    setIsZoomedIn(!isZoomedIn);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    handleSearchQueryChange(searchTerm)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
    
  };

  return (
    <div
      className={`animated-element ${inView ? "animate" : ""} cities-1`}
      ref={elementRef}
    >
      <h1>Cities</h1>
      <div className="weather-cards">
        <div className="card-city">
          <div
            className="card-style"
            style={{
              backgroundImage: `url(${Thunder})`,
            }}
          >
            <div style={{ position: "absolute", bottom: 0 }}>
              <h1 style={{ color: "white", fontSize: "40px", margin: "0" }}>
                Thunder
              </h1>
            </div>
          </div>
          <div className="card-style-bottom">
            <h2 style={{ margin: "0", fontSize: "40px" }}>32°C </h2>
            <h2 style={{ margin: "0", lineHeight: "0.5" }}>
              Pune <p>23/12/2022</p>{" "}
            </h2>
          </div>
        </div>
        <div className="card-city">
          <div
            className="card-style"
            style={{
              backgroundImage: `url(${CloudlyLink})`,
            }}
          >
            <div style={{ position: "absolute", bottom: 0 }}>
              <h1 style={{ color: "white", fontSize: "40px", margin: "0" }}>
                Cloud
              </h1>
            </div>
          </div>
          <div className="card-style-bottom">
            <h2 style={{ margin: "0", fontSize: "40px" }}>32°C </h2>
            <h2 style={{ margin: "0", lineHeight: "0.5" }}>
              Pune <p>23/12/2022</p>{" "}
            </h2>
          </div>
        </div>
        <div className="card-city">
          <div
            className="card-style"
            style={{
              backgroundImage: `url(${Sunny})`,
            }}
          >
            <div style={{ position: "absolute", bottom: 0 }}>
              <h1 style={{ color: "white", fontSize: "40px", margin: "0" }}>
                Sunny
              </h1>
            </div>
          </div>
          <div className="card-style-bottom">
            <h2 style={{ margin: "0", fontSize: "40px" }}>32°C </h2>
            <h2 style={{ margin: "0", lineHeight: "0.5" }}>
              Pune <p>23/12/2022</p>{" "}
            </h2>
          </div>
        </div>
        
      </div>

      {/* <div className="searchInputWrapper">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
          className="searchInput"
        />
        <i className="searchInputIcon fa fa-search"></i>
      </div> */}

      <div className="app">
        <div className="img-container">
          <img src={EarthLink} alt="meditation" />
        </div>
      </div>
    </div>
  );
}

export default Cities;
