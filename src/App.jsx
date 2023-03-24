import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Navbar, Cities, News, Footer } from "./components";

function App() {
  const API_KEY = "9f9ee85db50fbb3d0e171986f8dcba0e";
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("London");
  const [searchQuery, setSearchQuery] = useState("");

  const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString();
  const currentDay = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
  });

  const fetchWeatherData = async () => {
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();
    setWeatherData(data);
  };

  const handleSearchQueryChange = (query) => {
    setSearchQuery(query);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setCity(value);
  };

  // useEffect(() => {
  //   fetchWeatherData();
  // }, [city]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchWeatherData();
    }, 2000); 

    return () => {
      clearTimeout(timer);
    };
  }, [city]); 

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const { main, wind, clouds, name, weather } = weatherData;

  return (
    <BrowserRouter>
      <div className="pages">
        
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                main={main}
                clouds={clouds.all}
                wind={wind.speed}
                name={name}
                date={currentDate.toDateString()}
                day={currentDay}
                time={currentTime}
                searchQuery={searchQuery}
                handleSearchQueryChange={handleSearchQueryChange}
                icon={weather[0]}
              />
            }
          />
        </Routes>
      </div>
      <div className="searchInputWrapper">
          <input
            type="text"
            placeholder="Search..."
            value={city}
            onChange={handleChange}
            className="searchInput"
          />
          <i className="searchInputIcon fa fa-search"></i>
        </div>
      <Cities handleSearchQueryChange={handleSearchQueryChange} />
      <News />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
