import React from "react";

import classes from "./Temperature.module.css";

type Props = {
  degrees: number;
};

const Temperature: React.FC<Props> = (props: Props) => {
  return (
    <div className={classes.TemperatureWrapper}>
      {Math.round(props.degrees)}
      <span className={classes.TemperatureSymbol}>°</span>
    </div>
  );
};

export default Temperature;
