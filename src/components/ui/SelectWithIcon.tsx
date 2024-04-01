import React, {FC} from 'react';
import {Tooltip} from './Tooltip';

interface IconButtonProps {
  id: number;
  handleClick: () => void;
  value?: string;
  isSelected?: boolean;
  isUnsaved?: boolean;
  secondaryButton: {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  }
  children: React.ReactElement;
}

const SelectWithIcon: FC<IconButtonProps> = (props) => {
  const childrenClasses = props.children.props.className + ' group-hover:fill-white transition-colors duration-300';
  const icon = React.cloneElement(props.children, {...props.children.props, className: childrenClasses});

  let buttonClasses = 'group w-full flex justify-between gap-1 px-4 py-2 bg-zinc-100 ring-zinc-200 ring-1 transition-colors cursor-pointer select-none hover:bg-zinc-300';
  if (props.isSelected) {
    buttonClasses += ' bg-zinc-200';
  }

  return (
    <div onClick={props.handleClick} className={buttonClasses}>
      <div className='overflow-x-hidden overflow-ellipsis whitespace-nowrap'>
        {props.value ?? ''}
      </div>

      <div className='flex text-zinc-400'>
        {props.isUnsaved &&
          <Tooltip message='Press [Ctrl + S] to save note'>
            <span onClick={e => {e.stopPropagation()}}>
              Unsaved
            </span>
          </Tooltip>
        }
        <button onClick={props.secondaryButton.handleClick} className='flex text-zinc-400'>
          {icon}
        </button>
      </div>
    </div>
  );
};

export default SelectWithIcon;
