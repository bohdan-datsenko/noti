import React, {FC} from 'react';
import {BiSolidTrash} from 'react-icons/bi';
import SelectWithIcon from './ui/SelectWithIcon';
import {fetchNotes, removeNoteById} from '../store/slices/notes/thunks';
import {removeDraftNote, selectNote} from '../store/slices/notes/noteSlice';
import {useAppDispatch} from '../hooks/redux';

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

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();

    const isConfirmed = window.confirm('Are you sure you want to remove note?');
    if (!isConfirmed){
      return;
    }

    if (!isNew) {
      dispatch(removeNoteById(id)).then(() => {
        dispatch(fetchNotes());
      });
    } else {
      dispatch(removeDraftNote(id));
    }
  }

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
                    secondaryButton={{handleClick: handleRemove}}
    >
      {/*todo does it hurt bundle size?*/}
      <BiSolidTrash size={28} className='p-1 rounded hover:bg-red-600 hover:fill-white' />
    </SelectWithIcon>
  );
};
