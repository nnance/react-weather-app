import React from "react";

import classes from "./Logo.module.css";

type LogoProps = {
  colorScheme: string;
};

const logo: React.FC<LogoProps> = (props: LogoProps) => {
  const logoWithColorScheme = [
    classes.Logo,
    props.colorScheme === "dark" ? classes.Dark : classes.Light
  ];
  return <h1 className={logoWithColorScheme.join(" ")}>My Weather</h1>;
};

export default logo;
