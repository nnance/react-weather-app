import React from "react";
import { useStateValue } from "../components/AppContext";
import { getWeather, WeatherLocation, LocationError } from "./weather";
import { StateStatus, ActionTypes } from "./reducer";

export const useWeather = (): void => {
  const [activeState, dispatch] = useStateValue();

  React.useEffect(() => {
    if (activeState.status === StateStatus.set) {
      dispatch({ type: ActionTypes.setStatus, status: StateStatus.loading });

      getWeather(activeState.location)
        .then((results: WeatherLocation) => {
          dispatch({
            type: ActionTypes.setResults,
            results
          });
        })
        .catch((err: LocationError) => {
          dispatch({
            type: ActionTypes.setError,
            error: err.description
          });
        });
    }
  }, [activeState, dispatch]);
};
