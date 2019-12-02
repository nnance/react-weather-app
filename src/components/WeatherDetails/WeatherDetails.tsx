import React from "react";

import classes from "./WeatherDetails.module.css";
import Icon from "../../elements/Icon/Icon";
import Temperature from "./Temperature/Temperature";
import Description from "./Description/Description";
import Date from "./Date/Date";
import { WeatherStatus } from "../../api/weather";

type Props = {
  status: WeatherStatus;
  degrees: number;
};

const WeatherDetails: React.FC<Props> = (props: Props) => {
  return (
    <div className={classes.WeatherDetailsWrapper}>
      <div className={classes.WeatherIconWrapper}>
        <Icon type={props.status} />
      </div>
      <div className={classes.WeatherDataWrapper}>
        <Temperature degrees={props.degrees} />
        <Description type={props.status} />
        <Date />
      </div>
    </div>
  );
};

export default WeatherDetails;
