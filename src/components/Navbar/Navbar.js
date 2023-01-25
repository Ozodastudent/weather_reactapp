import React, { useState } from "react";
import { SearchIcon } from "../../assets/images/icons";
import "./navbar.scss";

export const Navbar = ({ weather: { humidity, speed, all }, setCity }) => {
  const [location, setLocation] = useState("");
  const handleSearch = () => {
    if (location !== "") {
      setCity({
        q: location,
        //  localStorage.getItem("location")
        //   ? JSON.parse(localStorage.getItem("location"))
        //   : "",
      });
    }
    // localStorage.setItem("location", JSON.stringify(location));
  };
  return (
    <>
      <nav className="site_nav">
        <div className="search_card">
          <div className="search_input_card">
            <input
              value={location}
              className="search_input"
              type="search"
              placeholder="Search by cities"
              onChange={(e) => setLocation(e.currentTarget.value)}
            />
          </div>
          <div className="search_box">
            <button className="search_icon" onClick={handleSearch}>
              <SearchIcon />
            </button>
          </div>
        </div>
        <div className="regions_card">
          <ul className="regions">
            <li className="regions_item">
              <button
                className="regions_button"
                onClick={() => setCity({ q: "Toshkent" })}
              >
                Toshkent
              </button>
            </li>
            <li className="regions_item">
              <button
                className="regions_button"
                onClick={() => setCity({ q: "Farg'ona" })}
              >
                Farg'ona
              </button>
            </li>
            <li className="regions_item">
              <button
                className="regions_button"
                onClick={() => setCity({ q: "Andijon" })}
              >
                Andijon
              </button>
            </li>
            <li className="regions_item">
              <button
                className="regions_button"
                onClick={() => setCity({ q: "Samarqand" })}
              >
                Samarqand
              </button>
            </li>
          </ul>
        </div>
        <div className="weather_details_card">
          <h4 className="weather_details_title">Weather details</h4>
          <div className="weather_details_info">
            <div className="cloudy weather_details_item">
              <p className="cloudy_text">Cloudy</p>
              <p className="cloudy_result">{`${all}%`}</p>
            </div>
            <div className="humidity weather_details_item">
              <p className="humidity_text">Humidity</p>
              <p className="humidity_result">{`${humidity.toFixed()}%`}</p>
            </div>
            <div className="wind weather_details_item">
              <p className="wind_text">Wind</p>
              <p className="wind_result">{`${speed.toFixed()}km/h`}</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
