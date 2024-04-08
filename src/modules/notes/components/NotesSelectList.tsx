import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from '../../app';
import SelectWithInfo from '../../../ui/SelectWithInfo';
import {selectNote} from '../redux/noteSlice';
import {getNotes} from '../redux/noteSelectors';

interface NotesSelectListProps {
  handleClose: () => void;
}

export const NotesSelectList: FC<NotesSelectListProps> = ({handleClose}) => {
  const dispatch = useAppDispatch();
  const notes = useAppSelector(getNotes);

  const handleSelect = (id: number) => {
    dispatch(selectNote(id));
    handleClose(); // todo
  }

  return (
    <div className='overflow-hidden h-full'>
      <ul className='overflow-auto h-full'>
        {notes.map((note) => (
          <li key={note.id} className='flex justify-center'>
            <SelectWithInfo id={note.id}
                            handleClick={() => handleSelect(note.id)}
                            value={note.title !== '' ? note.title : 'untitled'}
                            isUnsaved={note.isEdited}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
