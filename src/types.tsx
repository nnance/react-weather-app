import { WeatherLocation } from "./api/weather";

export enum StateStatus {
  empty,
  loading,
  error,
  success,
  set
}

export enum ActionTypes {
  setLocation,
  setStatus,
  setResults,
  setError
}

export type Action =
  | { type: ActionTypes.setLocation; location: string }
  | { type: ActionTypes.setStatus; status: StateStatus }
  | { type: ActionTypes.setResults; results: WeatherLocation }
  | { type: ActionTypes.setError; error: string };

export type ActiveState =
  | { status: StateStatus.empty }
  | { status: StateStatus.set | StateStatus.loading; location: string }
  | { status: StateStatus.error; location: string; error: string }
  | { status: StateStatus.success; location: string; results: WeatherLocation };

export enum ColorScheme {
  dark = "dark",
  light = "light"
}

export enum ButtonPosition {
  onForm = "onForm",
  onErrorNotice = "onErrorNotice"
}

export const DateFormat = "dddd, mmmm dd";
