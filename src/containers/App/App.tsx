import React from "react";

import classes from "./App.module.css";
import assetMapping from "../../assets/assetMapping.json";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import {
  WeatherLocation,
  WeatherStatus,
  LocationError,
  isLocation
} from "../../types";
import MainCard from "../../components/MainCard/MainCard";

const App: React.FC = () => {
  const [location, setLocation] = React.useState<
    WeatherLocation | LocationError
  >();

  return (
    <div className={classes.AppWrapper}>
      <Header
        color={
          assetMapping.colors[
            !location
              ? "default"
              : isLocation(location)
              ? location.status
              : "error"
          ]
        }
      />
      <main className={classes.AppMain}>
        <SearchBar
          onClick={(): void =>
            setLocation({
              location: "Norman, OK",
              status: WeatherStatus.Clear,
              degrees: 40
            })
          }
        />
        <MainCard location={location} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
