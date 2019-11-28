import React from "react";

import classes from "./Logo.module.css";

type LogoProps = {
  colorScheme: string;
  clicked: () => void;
};

const logo: React.FC<LogoProps> = (props: LogoProps) => {
  const logoWithColorScheme = [
    classes.Logo,
    props.colorScheme === "dark" ? classes.Dark : classes.Light
  ];
  return (
    <h1 className={logoWithColorScheme.join(" ")} onClick={props.clicked}>
      My Weather
    </h1>
  );
};

export default logo;
