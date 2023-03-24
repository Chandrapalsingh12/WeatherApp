import React, { useEffect, useRef, useState } from "react";
import { EarthLink,Thunder, CloudlyLink, Sunny } from "../utils/linkss";

function News() {
  const [showButton, setShowButton] = useState(false);
  const [hovered, setHovered] = useState(false);
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


  const handleMouseEnter = () => {
    setShowButton(true);
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setShowButton(false);
    setHovered(false);
  };
  return (
    <div className={`animated-element ${inView ? "animate" : ""} cities-1`}
    ref={elementRef}>
      <h1>News</h1>
      <div className="weather-cards">
        <div
          className="card-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="card-image"
            style={{
              backgroundImage: `url(${Sunny})`,
              opacity: hovered ? 0.4 : 1,
            }}
          ></div>
          <div
            className="card-text"
            style={{
              backgroundColor: hovered ? "black" : "rgba(0, 0, 0, 0.5)",
            }}
          >
            Sunny In Pune
          </div>
          {showButton && (
            <button className="read-more-button" style={{ display: "block" }}>
              Read More
            </button>
          )}
        </div><div
          className="card-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="card-image"
            style={{
              backgroundImage: `url(${Thunder})`,
              opacity: hovered ? 0.4 : 1,
            }}
          ></div>
          <div
            className="card-text"
            style={{
              backgroundColor: hovered ? "black" : "rgba(0, 0, 0, 0.5)",
            }}
          >
            Thunder Strick in Delhi
          </div>
          {showButton && (
            <button className="read-more-button" style={{ display: "block" }}>
              Read More
            </button>
          )}
        </div><div
          className="card-container"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="card-image"
            style={{
              backgroundImage: `url(${CloudlyLink})`,
              opacity: hovered ? 0.4 : 1,
            }}
          ></div>
          <div
            className="card-text"
            style={{
              backgroundColor: hovered ? "black" : "rgba(0, 0, 0, 0.5)",
            }}
          >
           Cloudstorms in ManiPur
          </div>
          {showButton && (
            <button className="read-more-button" style={{ display: "block" }}>
              Read More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default News;
