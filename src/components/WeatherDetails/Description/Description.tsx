import React from "react";

import classes from "./Description.module.css";
import { WeatherStatus } from "../../../api/weather";

type Props = {
  type: WeatherStatus;
};

const Description: React.FC<Props> = (props: Props) => {
  return <div className={classes.DescriptionWrapper}>{props.type}</div>;
};

export default Description;
