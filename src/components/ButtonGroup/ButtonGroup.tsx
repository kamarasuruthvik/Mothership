import React from "react";
import Button from "../Button/Button";
import { ButtonProps } from "../Button/Button.types";

interface ButtonGroupProps{
  ButtonList: ButtonProps[];
}

const ButtonGroup : React.FC<ButtonGroupProps> = ({
  ButtonList
}) => {
  return(
    <div className="button-group">
      {
        ButtonList.map((BtnProps, index) => (
          <Button key={index} {...BtnProps} />
        ))
      }
    </div>
  );
};

export default ButtonGroup;