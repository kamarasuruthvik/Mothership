import React from "react";
import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  btnClassName="medium",
  btnLink,
  icon,
  btnLabel
}) => {
  return(
    <button className={btnClassName ? `${styles.btn}`: `${styles.btn} ${styles[btnClassName]}`}>
      <a href={btnLink || "#"}>
        {btnLabel}
        {icon && <img src={icon}/>}
      </a>
    </button>
  );
}

export default Button;
