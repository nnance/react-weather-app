import React from "react";

import classes from "./Footer.module.css";
import Logo from "../../elements/Logo/Logo";

const footer: React.FC = () => {
  return (
    <footer className={classes.Footer}>
      <Logo colorScheme="dark" />
      <div className={classes.Separator}></div>
    </footer>
  );
};

export default footer;
