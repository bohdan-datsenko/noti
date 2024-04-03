import React, {FC} from 'react';
import {Tooltip} from './Tooltip';

interface IconButtonProps {
  handleClick: () => void;
  value: string;
  isSelected?: boolean;
  isUnsaved?: boolean;
}

const SelectWithInfo: FC<IconButtonProps> = ({value, isSelected, isUnsaved, handleClick}) => {
  let buttonClasses = 'group w-11/12 flex justify-between gap-1 px-4 py-2 rounded border-b transition-colors cursor-pointer select-none hover:bg-zinc-300';
  if (isSelected) {
    buttonClasses += ' bg-zinc-200';
  }

  return (
      <button onClick={handleClick} className={buttonClasses}>
        <div className='overflow-x-hidden overflow-ellipsis whitespace-nowrap'>
          {value ?? ''}
        </div>

        <div className='flex text-zinc-400'>
          {isUnsaved &&
            <Tooltip message='Press [Ctrl + S] to save note'>
              Unsaved
            </Tooltip>
          }
        </div>
      </button>
  );
};

export default SelectWithInfo;
