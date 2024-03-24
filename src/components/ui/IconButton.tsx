import React, {FC, useState} from 'react';

interface IconButtonProps {
  handleClick: () => void;
  value?: string;
  isSelected?: boolean;
  secondaryButton: {
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  }
  children: React.ReactElement;
}

const IconButton: FC<IconButtonProps> = (props) => {
  const [isEnter, setIsEnter] = useState(false);

  const childrenClasses = props.children.props.className;
  const modifiedClasses = isEnter
    ? childrenClasses + ' fill-white'
    : childrenClasses + ' fill-zinc-400';
  const icon = React.cloneElement(props.children, {...props.children.props, className: modifiedClasses});

  let buttonClasses = 'w-full flex justify-between gap-1 px-4 py-2 bg-zinc-100 ring-zinc-200 ring-1 transition-colors cursor-pointer select-none hover:bg-zinc-300';
  if (props.isSelected) {
    buttonClasses += ' bg-zinc-200';
  }
  const handleMouseEnter = () => {
    setIsEnter(true);
  }

  const handleMouseLeave = () => {
    setIsEnter(false);
  }

  return (
    <div onClick={props.handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={buttonClasses}>
      <div className='overflow-x-hidden overflow-ellipsis whitespace-nowrap'>
        {props.value ?? ''}
      </div>
      <button onClick={(e) => props.secondaryButton.handleClick(e)}>
        {icon}
      </button>
    </div>
  );
};

export default IconButton;
