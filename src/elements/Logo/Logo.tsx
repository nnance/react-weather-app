import React from "react";

import classes from "./Logo.module.css";
import { ColorScheme } from "../../types";

type LogoProps = {
  colorScheme: ColorScheme;
};

const logo: React.FC<LogoProps> = (props: LogoProps) => {
  const logoWithColorScheme = [
    classes.Logo,
    props.colorScheme === ColorScheme.dark ? classes.Dark : classes.Light
  ];
  return <h1 className={logoWithColorScheme.join(" ")}>My Weather</h1>;
};

export default logo;
