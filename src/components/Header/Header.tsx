import React from "react";

import classes from "./Header.module.css";
import Logo from "../../elements/Logo/Logo";
import assetMapping from "../../assets/assetMapping.json";
import { ActiveState, StateStatus, ColorScheme } from "../../types";
import { WeatherStatus } from "../../api/weather";

type Props = React.PropsWithChildren<{
  state: ActiveState;
}>;

const header: React.FC<Props> = (props: Props) => {
  const getHeaderColor = (state: ActiveState): string => {
    return assetMapping.colors[
      state.status === StateStatus.success
        ? state.results.status
        : state.status === StateStatus.error
        ? WeatherStatus.error
        : WeatherStatus.default
    ];
  };

  return (
    <header
      className={classes.Header}
      style={{ backgroundColor: getHeaderColor(props.state) }}
    >
      <Logo colorScheme={ColorScheme.light} />
    </header>
  );
};

export default header;
