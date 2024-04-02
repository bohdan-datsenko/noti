import React, {FC} from 'react';
import {NoteSelect} from './NoteSelect';
import {useAppSelector} from '../../app';

interface NotesSelectListProps {
  handleClose: () => void;
}

export const NotesSelectList: FC<NotesSelectListProps> = ({handleClose}) => {
  const notes = useAppSelector((state) => state.noteReducer.notes);
  const selectedId = useAppSelector((state) => state.noteReducer.selectedId);
  return (
    <div className='overflow-hidden h-full'>
      <ul className='overflow-auto h-full'>
        {notes.map((note) => (
          <li key={note.id} className='flex justify-center'>
            <NoteSelect id={note.id}
                        value={note.title}
                        isEdited={note.isEdited}
                        isSelected={note.id === selectedId}
                        isNew={note.isNew}
                        handleClose={handleClose}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
