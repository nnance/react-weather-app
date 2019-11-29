import React from "react";

import classes from "./Footer.module.css";
import Logo from "../../elements/Logo/Logo";
import { ColorScheme } from "../../types";

const footer: React.FC = () => {
  return (
    <footer className={classes.Footer}>
      <Logo colorScheme={ColorScheme.dark} />
      <div className={classes.Separator}></div>
    </footer>
  );
};

export default footer;
