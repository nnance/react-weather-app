import React from "react";
import Card from "../../elements/Card/Card";
import Preview from "../Preview/Preview";
import WeatherDetails from "../WeatherDetails/WeatherDetails";
import ErrorNotice from "../ErrorNotice/ErrorNotice";
import { ActiveState } from "../AppContext";

type Props = {
  location: ActiveState;
};

const MainCard: React.FC<Props> = (props: Props) => {
  return (
    <Card>
      {props.location.status === "empty" ? (
        <Preview />
      ) : props.location.status === "success" ? (
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
