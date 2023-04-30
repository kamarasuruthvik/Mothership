import React, { useState } from "react";
import styles from "./Button.module.scss";

interface ButtonProps{
  btnClassName?: string;
  icon?: string;
  btnLabel?: string;
  btnLink?: string;
}


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
