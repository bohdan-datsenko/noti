import React, {FC} from 'react';
import {calculateColor, colors} from '../modules/app';

interface IconButtonProps {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactElement;
  disabled?: boolean;
  color?: colors;
}

export const IconButton: FC<IconButtonProps> = ({
                                             handleClick,
                                             children,
                                             disabled = false,
                                             color = colors.PRIMARY}) => {
  const colorPalette = calculateColor(color);
  const classes = 'rounded p-1 text-white transition-all enabled:hover:scale-105 enabled:active:scale-110'
    + ` ${colorPalette.color} ${colorPalette.hover} ${colorPalette.disabled}`;

  return (
    <button disabled={disabled} onClick={handleClick} className={classes}>
      {children}
    </button>
  );
};