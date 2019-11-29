import React from "react";

import classes from "./WeatherDetails.module.css";
import Icon from "../../elements/Icon/Icon";
import Temperature from "./Temperature/Temperature";

type Props = {
  status: string;
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
      </div>
    </div>
  );
};

export default WeatherDetails;
