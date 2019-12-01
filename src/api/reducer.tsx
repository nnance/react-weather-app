import { WeatherLocation } from "./weather";

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

export const reducer = (state: ActiveState, action: Action): ActiveState => {
  switch (action.type) {
    case ActionTypes.setLocation:
      return {
        status: StateStatus.set,
        location: action.location
      };

    case ActionTypes.setStatus:
      return state.status === StateStatus.empty
        ? { status: StateStatus.empty }
        : { ...state, status: StateStatus.loading };

    case ActionTypes.setResults:
      return state.status === StateStatus.empty
        ? { status: StateStatus.empty }
        : { ...state, status: StateStatus.success, results: action.results };

    case ActionTypes.setError:
      return state.status === StateStatus.empty
        ? { status: StateStatus.empty }
        : { ...state, status: StateStatus.error, error: action.error };

    default:
      return state;
  }
};
