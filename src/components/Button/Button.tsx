import React, { useState } from "react";
import styles from "./Button.module.scss";
import { ButtonProps } from "./button.types";

const Button: React.FC<ButtonProps> = ({
  btnClassName,
  btnLink,
  icon,
  btnLabel
}) => {
  return(
    <button className={`${styles.btn}`}>
      <a href={btnLink || "#"}>
        {btnLabel}
        {icon && <img src={icon}/>}
      </a>
    </button>
  );
}

export default Button;
