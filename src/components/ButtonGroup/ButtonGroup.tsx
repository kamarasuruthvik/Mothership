import React, { useState } from "react";
import Button from "../Button/Button";
import { ButtonProps } from "../Button/button.types";

interface ButtonGroupProps{
  ButtonList: ButtonProps[];
}

const ButtonGroup : React.FC<ButtonGroupProps> = ({
  ButtonList
}) => {
  return(
    <div className="button-group">
      {
        ButtonList.map((BtnProps) => (
          <Button {...BtnProps} />
        ))
      }
    </div>
  );
};

export default ButtonGroup;