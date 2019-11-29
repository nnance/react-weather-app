import React from "react";

import classes from "./Date.module.css";
import dateformat from "dateformat";
import { DateFormat } from "../../../types";

const date: React.FC = () => {
  return (
    <div className={classes.DateWrapper}>
      {dateformat(Date.now(), DateFormat)}
    </div>
  );
};

export default date;
