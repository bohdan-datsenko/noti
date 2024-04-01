import React, {FC} from 'react';
import {IconButton} from './IconButton';
import {PiPlus} from 'react-icons/pi';

interface CreateButtonProps {
  size: number;
  handleCreate: () => void;
}

export const CreateButton: FC<CreateButtonProps> = ({size, handleCreate}) => {
  return (
    <IconButton handleClick={handleCreate}>
      <PiPlus size={size} />
    </IconButton>
  );
};
