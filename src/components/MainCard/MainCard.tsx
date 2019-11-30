import React from "react";
import Card from "../../elements/Card/Card";
import Preview from "../Preview/Preview";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import { WeatherLocation, LocationError, isLocation } from "../../types";
import ErrorNotice from "../ErrorNotice/ErrorNotice";

type Props = {
  location: WeatherLocation | LocationError | undefined;
};

const MainCard: React.FC<Props> = (props: Props) => {
  return (
    <Card>
      {!props.location ? (
        <Preview />
      ) : isLocation(props.location) ? (
        <WeatherDetails
          status={props.location.status}
          degrees={props.location.degrees}
        />
      ) : (
        <ErrorNotice />
      )}
    </Card>
  );
};

export default MainCard;
