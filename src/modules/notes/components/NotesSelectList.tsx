import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from '../../app';
import SelectWithInfo from '../../../ui/SelectWithInfo';
import {setSelectedNote} from '../redux/noteSlice';
import {shallowEqual} from 'react-redux';

interface NotesSelectListProps {
  handleClose: () => void;
}

export const NotesSelectList: FC<NotesSelectListProps> = ({handleClose}) => {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.noteReducer.notes, shallowEqual);

  // todo
  const handleSelect = (id: number) => {
    const newSelectedNote = notes.find((n) => n.id === id)!;
    dispatch(setSelectedNote(newSelectedNote));
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
