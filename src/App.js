import { useEffect, useState } from "react";
import "./assets/styles/styles.scss";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import getFinalWeatherData from "./Links/fetch";
import sunny from "./assets/images/sun.jpg";
import cloudy from "./assets/images/cloud.jpg";

function App() {
  const [city, setCity] = useState({ q: "New York" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [bg, setBg] = useState(sunny);
  useEffect(() => {
    const SearchFetch = async () => {
      await getFinalWeatherData({ ...city, units }).then((data) => {
        setWeather(data);
        const temperature = 5;
        if (data.temp <= temperature) setBg(cloudy);
        else setBg(sunny);
      });
    };
    SearchFetch();
  }, [city, units]);
  return (
    <>
      {weather && (
        <div
          className="weather_card"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Hero weather={weather} />
          <Navbar
            weather={weather}
            setCity={setCity}
            units={units}
            setUnits={setUnits}
          />
        </div>
      )}
    </>
  );
}

export default App;
