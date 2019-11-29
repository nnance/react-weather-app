import React from "react";

import classes from "./App.module.css";
import assetMapping from "../../assets/assetMapping.json";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import Card from "../../elements/Card/Card";
import WeatherDetails from "../../components/WeatherDetails/WeatherDetails";
import { WeatherStatus } from "../../types";
import Preview from "../../components/Preview/Preview";
import ErrorNotice from "../../components/ErrorNotice/ErrorNotice";

type Props = {
  status: WeatherStatus;
  degrees: number;
  error?: string;
};

const App: React.FC<Props> = (props: Props) => {
  const headerColor =
    assetMapping.colors[
      // Set header color based on weather condition; if error, set color to red
      props.error ? "error" : props.status
    ];

  return (
    <div className={classes.AppWrapper}>
      <Header color={headerColor} />
      <main className={classes.AppMain}>
        <SearchBar />
        <Card>
          {/* <Preview /> */}
          <WeatherDetails status={props.status} degrees={props.degrees} />
          {/* <ErrorNotice /> */}
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default App;
