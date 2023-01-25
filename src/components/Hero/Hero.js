import React from "react";
import "./hero.scss";
import { iconUrl } from "../../Links/fetch";
export const Hero = ({ weather: { dt, temp, name, country, info, icon } }) => {
  // let days = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ];
  // function dateFunc(date) {
  //   let nwDate = new Date(date * 1000);
  //   let nwHour = nwDate.getHours().toString().padStart(2, 0);
  //   let nwMinut = nwDate.getMinutes().toString().padStart(2, 0);
  //   return `${nwHour} : ${nwMinut}`;
  // }
  return (
    <>
      <div className="weather_cards">
        <div className="weather_info">
          <h1 className="weather_gradus">{`${temp.toFixed()}°C`}</h1>
          <div className="weather_area">
            <h3 className="weather_location">{`${name}, ${country}`}</h3>
            <p className="weather_time">{`${dt}`}</p>
          </div>
          <div className="weather_climate">
            <img
              src={iconUrl(icon)}
              alt="iconimg"
              className="weather_climate_icon"
              width="100"
            />
            <p className="weather_climate_info">{info}</p>
          </div>
        </div>
      </div>
    </>
  );
};
