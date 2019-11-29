import React from "react";

import classes from "./Header.module.css";
import Logo from "../../elements/Logo/Logo";
import { ColorScheme } from "../../types";

type HeaderProps = React.PropsWithChildren<{
  color: string;
}>;

const header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <header className={classes.Header} style={{ backgroundColor: props.color }}>
      <Logo colorScheme={ColorScheme.light} />
    </header>
  );
};

export default header;
