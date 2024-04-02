import React, {FC} from 'react';

interface PrimaryButtonProps {
  handleClick: () => void;
  children: React.ReactNode;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({handleClick, children}) => {
  return (
    <button onClick={handleClick} className='mx-auto w-full px-4 py-2 bg-amber-300 text-white rounded uppercase transition-colors
                      hover:bg-amber-400'>
      {children}
    </button>
  );
};

export default PrimaryButton;