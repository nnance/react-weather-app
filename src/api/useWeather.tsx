import React from "react";
import { useStateValue } from "../components/AppContext";
import { getWeather, WeatherLocation, LocationError } from "./weather";
import { StateStatus } from "./reducer";

export const useWeather = (): void => {
  const [activeState, dispatch] = useStateValue();

  React.useEffect(() => {
    if (activeState.status === StateStatus.set) {
      dispatch({ type: "setStatus", status: StateStatus.loading });

      getWeather(activeState.location)
        .then((results: WeatherLocation) => {
          dispatch({
            type: "setResults",
            results
          });
        })
        .catch((err: LocationError) => {
          dispatch({
            type: "setError",
            error: err.description
          });
        });
    }
  }, [activeState, dispatch]);
};
