/* eslint-disable react/no-unescaped-entities */
import React from "react";

import classes from "./ErrorNotice.module.css";
import Button from "../../elements/Button/Button";
import { ButtonPosition } from "../../types";

const ErrorNotice: React.FC = () => {
  return (
    <div className={classes.ErrorNoticeWrapper}>
      <h1 className={classes.NotFound404}>404</h1>
      <div className={classes.ErrorTextWrapper}>
        <h2 className={classes.NotFoundHeading}>Oops!</h2>
        <p className={classes.NotFoundDetails}>
          We can't find the city you are looking for.
        </p>
        <Button
          name="tryAgain"
          type="button"
          position={ButtonPosition.onErrorNotice}
        >
          Try again
        </Button>
      </div>
    </div>
  );
};

export default ErrorNotice;
