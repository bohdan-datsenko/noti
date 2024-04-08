import React, {FC} from 'react';
import {Tooltip} from './Tooltip';
import {useAppSelector} from '../modules/app';

interface IconButtonProps {
  id: number;
  handleClick: () => void;
  value: string;
  isUnsaved?: boolean;
}

const SelectWithInfo: FC<IconButtonProps> = ({id, value, isUnsaved, handleClick}) => {
  const selectedId = useAppSelector((state) =>
    state.noteReducer.selectedNote?.id);

  let buttonClasses = 'group w-11/12 flex justify-between gap-1 px-4 py-2 rounded border-b transition-colors' +
    ' cursor-pointer select-none hover:bg-zinc-300';
  if (id === selectedId) {
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
