/* eslint-disable no-undef */
import { WeatherStatus } from "../types";

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
    }, 100);
  });
};
