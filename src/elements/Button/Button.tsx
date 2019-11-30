import React from "react";

import classes from "./Button.module.css";
import { ButtonPosition } from "../../types";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  position?: ButtonPosition;
}

const Button: React.FC<Props> = (props: Props) => {
  const buttonClasses = [
    classes.ButtonWrapper,
    props.position === ButtonPosition.onForm ? classes.FormButtonWrapper : null
  ];
  return (
    <div className={buttonClasses.join(" ")}>
      <button type={props.type} name={props.name} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
