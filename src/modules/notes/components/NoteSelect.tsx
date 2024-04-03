import React, {FC} from 'react';
import {BiSolidTrash} from 'react-icons/bi';
import SelectWithIcon from '../../../ui/SelectWithIcon';
import {selectNote} from '../redux/noteSlice';
import {useAppDispatch} from '../../app';
import {handleRemove} from "../redux/thunks";

interface SelectIconButtonProps {
  id: number;
  value: string;
  isEdited: boolean;
  isSelected: boolean;
  isNew: boolean;
  handleClose: () => void;
}

// todo does it not the same thing as SelectWithIcon
export const NoteSelect: FC<SelectIconButtonProps> = (
  {id,
    isSelected,
    value,
    isEdited,
    isNew,
    handleClose}
) => {
  const dispatch = useAppDispatch();

  const handleSelect = () => {
    dispatch(selectNote(id));
    handleClose();
  }

  return (
    <SelectWithIcon id={id}
                    handleClick={handleSelect}
                    value={value !== '' ? value : 'untitled'}
                    isSelected={isSelected}
                    isUnsaved={isEdited}
                    secondaryButton={{
                      handleClick: () => dispatch(handleRemove())
                    }}
    >
      {/*todo does it hurt bundle size?*/}
      <BiSolidTrash size={28} className='p-1 rounded hover:bg-red-600 hover:fill-white' />
    </SelectWithIcon>
  );
};
