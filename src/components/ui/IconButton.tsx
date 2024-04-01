import React, {FC} from 'react';

// TODO not reusable
interface IconButton {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

export const IconButton: FC<IconButton> = ({handleClick, children}) => {
  return (
    <button onClick={handleClick}
            className='rounded-full box-border p-1 text-white bg-amber-300 transition-colors
                                         hover:scale-105 hover:bg-amber-400
                                         active:scale-110'>
      {children}
    </button>
  );
};