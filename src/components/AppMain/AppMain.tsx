import React from "react";

import classes from "./AppMain.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import Card from "../../elements/Card/Card";
import Preview from "../Preview/Preview";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import ErrorNotice from "../ErrorNotice/ErrorNotice";
import { ActiveState, StateStatus } from "../../api/reducer";
import { MoonLoader } from "react-spinners";
import { useWeather } from "../../api/useWeather";

type Props = {
  state: ActiveState;
};

const AppMain: React.FC<Props> = (props: Props) => {
  useWeather();

  return (
    <main className={classes.AppMain}>
      <SearchBar />
      <Card>
        {props.state.status === StateStatus.empty ? (
          <Preview />
        ) : props.state.status === StateStatus.success ? (
          <WeatherDetails
            status={props.state.results.status}
            degrees={props.state.results.degrees}
          />
        ) : props.state.status === StateStatus.error ? (
          <ErrorNotice />
        ) : (
          <MoonLoader />
        )}
      </Card>
    </main>
  );
};

export default AppMain;
