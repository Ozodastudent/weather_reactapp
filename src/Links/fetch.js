const APIKEY = "80fbb911eca93f4b3742894cadf7acf5";
const INITIAL_URL = "https://api.openweathermap.org/data/2.5";

const getWeatherInfo = (dataType, params) => {
  const url = new URL(INITIAL_URL + "/" + dataType);
  url.search = new URLSearchParams({ ...params, appid: APIKEY });
  return fetch(url).then((res) => res.json());
};

const currentWeatherData = (data) => {
  const {
    main: { temp, humidity },
    name,
    dt,
    sys: { country },
    weather,
    wind: { speed },

    clouds: { all },
  } = data;
  const { main: info, icon } = weather[0];
  return {
    temp,
    humidity,
    name,
    dt,
    country,
    info,
    icon,
    speed,

    all,
  };
};

const getFinalWeatherData = async (params) => {
  const finalCurrentWeather = await getWeatherInfo("weather", params).then(
    currentWeatherData
  );
  return finalCurrentWeather;
};
const iconUrl = (code) => `https://openweathermap.org/img/wn/${code}@2x.png`;
export default getFinalWeatherData;
export { iconUrl };
