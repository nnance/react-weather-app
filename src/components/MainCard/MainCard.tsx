import React from "react";
import Card from "../../elements/Card/Card";
import Preview from "../Preview/Preview";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import ErrorNotice from "../ErrorNotice/ErrorNotice";
import { ActiveState, StateStatus } from "../../api/reducer";
import { useWeather } from "../../api/useWeather";

type Props = {
  location: ActiveState;
};

const MainCard: React.FC<Props> = (props: Props) => {
  useWeather();
  return (
    <Card>
      {props.location.status === StateStatus.empty ? (
        <Preview />
      ) : props.location.status === StateStatus.success ? (
        <WeatherDetails
          status={props.location.results.status}
          degrees={props.location.results.degrees}
        />
      ) : (
        <ErrorNotice />
      )}
    </Card>
  );
};

export default MainCard;
