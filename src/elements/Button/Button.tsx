import React from "react";

import classes from "./Button.module.css";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  position: string;
}

const Button: React.FC<Props> = (props: Props) => {
  const buttonClasses = [
    classes.ButtonWrapper,
    props.position === "onForm" ? classes.FormButtonWrapper : null
  ];
  return (
    <div className={buttonClasses.join(" ")}>
      <button type={props.type} name={props.name}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;