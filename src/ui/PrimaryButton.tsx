import React, {FC} from 'react';
import {ColorsUtils} from "../modules/app/utils/utils";
import colors = ColorsUtils.colors;
import calculateColor = ColorsUtils.calculateColor;

interface PrimaryButtonProps {
  handleClick: () => void;
  children: React.ReactNode;
  color?: colors;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({handleClick, children, color = colors.PRIMARY}) => {
  let colorPalette = calculateColor(color);
  return (
    <button onClick={handleClick} className={'mx-auto w-full px-4 py-2 text-white rounded uppercase transition-colors' + colorPalette}>
      {children}
    </button>
  );
};

export default PrimaryButton;