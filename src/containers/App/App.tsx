import React from "react";

import classes from "./App.module.css";
import assetMapping from "../../assets/assetMapping.json";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import { WeatherStatus } from "../../types";
import MainCard from "../../components/MainCard/MainCard";
import {
  StateProvider,
  ActiveState,
  StateContext
} from "../../components/AppContext";
import { reducer } from "./reducer";

const App: React.FC = () => {
  const getHeaderColor = (state: ActiveState): string => {
    return assetMapping.colors[
      state.status === "empty"
        ? WeatherStatus.default
        : state.status === "success"
        ? state.results.status
        : WeatherStatus.error
    ];
  };

  return (
    <StateProvider initialState={{ status: "empty" }} reducer={reducer}>
      <StateContext.Consumer>
        {([state]): React.ReactFragment => (
          <div className={classes.AppWrapper}>
            <Header color={getHeaderColor(state)} />
            <main className={classes.AppMain}>
              <SearchBar />
              <MainCard location={state} />
            </main>
            <Footer />
          </div>
        )}
      </StateContext.Consumer>
    </StateProvider>
  );
};

export default App;
