export type WeatherLocation = {
  location: string;
  status: WeatherStatus;
  degrees: number;
};

export type LocationError = {
  code: number;
  description: string;
};

export function isLocation(
  x: WeatherLocation | LocationError
): x is WeatherLocation {
  return (x as WeatherLocation).location !== undefined;
}

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

export enum ColorScheme {
  dark = "dark",
  light = "light"
}

export enum ButtonPosition {
  onForm = "onForm",
  onErrorNotice = "onErrorNotice"
}

export const DateFormat = "dddd, mmmm dd";
