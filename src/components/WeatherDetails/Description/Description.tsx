import React from "react";

import classes from "./Description.module.css";

type Props = {
  type: string;
};

const Description: React.FC<Props> = (props: Props) => {
  return <div className={classes.DescriptionWrapper}>{props.type}</div>;
};

export default Description;
