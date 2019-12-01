import { WeatherLocation } from "./weather";

export enum StateStatus {
  empty,
  loading,
  error,
  success,
  set
}

export type Action =
  | { type: "setLocation"; location: string }
  | { type: "setStatus"; status: StateStatus }
  | { type: "setResults"; results: WeatherLocation }
  | { type: "setError"; error: string };

export type ActiveState =
  | { status: StateStatus.empty }
  | { status: StateStatus.set | StateStatus.loading; location: string }
  | { status: StateStatus.error; location: string; error: string }
  | { status: StateStatus.success; location: string; results: WeatherLocation };

export const reducer = (state: ActiveState, action: Action): ActiveState => {
  switch (action.type) {
    case "setLocation":
      return {
        status: StateStatus.set,
        location: action.location
      };

    case "setStatus":
      return state.status === StateStatus.empty
        ? { status: StateStatus.empty }
        : { ...state, status: StateStatus.loading };

    case "setResults":
      return state.status === StateStatus.empty
        ? { status: StateStatus.empty }
        : { ...state, status: StateStatus.success, results: action.results };

    case "setError":
      return state.status === StateStatus.empty
        ? { status: StateStatus.empty }
        : { ...state, status: StateStatus.error, error: action.error };

    default:
      return state;
  }
};
