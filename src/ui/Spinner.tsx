import React, {FC} from 'react';
import {CgSpinner} from 'react-icons/cg';

interface SpinnerProps {
  color?: string;
  size?: number;
}

const Spinner: FC<SpinnerProps> = ({color, size}) => {
  const spinnerColor = color || 'rgb(252 211 77)';
  const spinnerSize = size || 48;
  return (
    <div className='flex justify-center items-center flex-auto bg-zinc-50'>
        <CgSpinner color={spinnerColor} size={spinnerSize} className='animate-spin' />
    </div>
  );
};

export default Spinner;
