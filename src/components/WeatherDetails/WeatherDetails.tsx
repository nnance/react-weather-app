import React from "react";

import classes from "./WeatherDetails.module.css";
import Icon from "../../elements/Icon/Icon";

type Props = {
  status: string;
};

const WeatherDetails: React.FC<Props> = (props: Props) => {
  return (
    <div className={classes.WeatherDetailsWrapper}>
      <div className={classes.WeatherIconWrapper}>
        <Icon type={props.status} />
      </div>
      <div className={classes.WeatherDataWrapper}></div>
    </div>
  );
};

export default WeatherDetails;
