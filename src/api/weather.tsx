/* eslint-disable no-undef */
export enum WeatherStatus {
  default = "default",
  error = "error",
  Rain = "Rain",
  Clear = "Clear",
  Thunderstorm = "Thunderstorm",
  Snow = "Snow",
  Drizzle = "Drizzle",
  Clouds = "Clouds"
}

export type WeatherLocation = {
  location: string;
  status: WeatherStatus;
  degrees: number;
};

export type LocationError = {
  code: number;
  description: string;
};

export const getWeather = (location: string): Promise<WeatherLocation> => {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const URL = API_URL + `?q=${location}&appid=${API_KEY}&units=imperial`;
  return fetch(URL)
    .then(resp => resp.json())
    .then(data => {
      if (data.cod === 200) {
        return {
          location,
          status: data.weather[0].main as WeatherStatus,
          degrees: data.main.temp as number
        };
      } else {
        throw new Error("not found");
      }
    })
    .catch(() => {
      throw new Error("not found");
    });
};

export const getWeatherMock = (location: string): Promise<WeatherLocation> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (location.toLowerCase().indexOf("norman") > -1) {
        resolve({
          location: "Norman, OK",
          status: WeatherStatus.Clear,
          degrees: 40
        });
      } else {
        reject({
          code: 404,
          description: "Not Found"
        });
      }
    }, 1500);
  });
};
