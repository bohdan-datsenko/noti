import React, {FC} from 'react';
import {useAppDispatch, useAppSelector} from '../../app';
import SelectWithInfo from "../../../ui/SelectWithInfo";
import {selectNote} from "../redux/noteSlice";

interface NotesSelectListProps {
  handleClose: () => void;
}

export const NotesSelectList: FC<NotesSelectListProps> = ({handleClose}) => {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.noteReducer.notes);
  const selectedId = useAppSelector((state) => state.noteReducer.selectedId);

  const handleSelect = (id: number) => {
    dispatch(selectNote(id));
    handleClose(); // todo
  }

  return (
    <div className='overflow-hidden h-full'>
      <ul className='overflow-auto h-full'>
        {notes.map((note) => (
          <li key={note.id} className='flex justify-center'>
            <SelectWithInfo handleClick={() => handleSelect(note.id)}
                            value={note.title !== '' ? note.title : 'untitled'}
                            isSelected={note.id === selectedId}
                            isUnsaved={note.isEdited}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
