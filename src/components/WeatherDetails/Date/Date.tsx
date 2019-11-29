import React from "react";

import classes from "./Date.module.css";
import dateformat from "dateformat";

const date: React.FC = () => {
  return (
    <div className={classes.DateWrapper}>
      {dateformat(Date.now(), "dddd, mmmm dd")}
    </div>
  );
};

export default date;
