import React from "react";

import classes from "./Icon.module.css";

type Props = {
  type: string;
};

const Icon: React.FC<Props> = (props: Props) => {
  return (
    <img
      src={require(`../../assets/images/${props.type}.svg`)}
      alt={props.type}
      className={classes.Icon}
    />
  );
};

export default Icon;
