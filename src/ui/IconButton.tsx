import React, {FC} from 'react';
import {ColorsUtils} from "../modules/app/utils/utils";
import colors = ColorsUtils.colors;
import calculateColor = ColorsUtils.calculateColor;

// TODO not reusable
interface IconButton {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactElement;
  disabled?: boolean;
  color?: colors;
}

export const IconButton: FC<IconButton> = ({
                                             handleClick,
                                             children,
                                             disabled = false,
                                             color = colors.PRIMARY}) => {
  const colorPalette = calculateColor(color);
  const classes = 'rounded p-1 text-white transition-colors enabled:hover:scale-105 enabled:active:scale-110'
    + ` ${colorPalette.color} ${colorPalette.hover} ${colorPalette.disabled}`;

  return (
    <button disabled={disabled} onClick={handleClick} className={classes}>
      {children}
    </button>
  );
};