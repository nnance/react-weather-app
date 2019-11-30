import React from "react";

import classes from "./App.module.css";
import assetMapping from "../../assets/assetMapping.json";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import { WeatherStatus, isLocation, ActiveState } from "../../types";
import MainCard from "../../components/MainCard/MainCard";

const App: React.FC = () => {
  const [activeState, setActiveState] = React.useState<ActiveState>();

  const getHeaderColor = (state: ActiveState): string => {
    return assetMapping.colors[
      !state
        ? WeatherStatus.default
        : isLocation(state)
        ? state.status
        : WeatherStatus.error
    ];
  };

  const toggleActiveState = (): void => {
    if (!activeState) {
      setActiveState({
        location: "Norman, OK",
        status: WeatherStatus.Clear,
        degrees: 40
      });
    } else if (isLocation(activeState)) {
      setActiveState({
        code: 404,
        description: "Not Found"
      });
    } else {
      setActiveState(undefined);
    }
  };

  return (
    <div className={classes.AppWrapper}>
      <Header color={getHeaderColor(activeState)} />
      <main className={classes.AppMain}>
        <SearchBar onClick={toggleActiveState} />
        <MainCard location={activeState} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
