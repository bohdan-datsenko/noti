import React, {FC, useState} from 'react';
import {INote} from '../types/notes';
import {addNote, updateNote} from '../store/slices/noteSlice';
import {useAppDispatch} from '../hooks/redux';

interface NotePageProps {
  note?: INote;
}

const NotePage: FC<NotePageProps> = ({note}) => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState(note?.text ?? '');

  const isNoteSelected = note !== undefined;

  const updateTitle = (title: string) => {
    if (note !== undefined) {
      dispatch(updateNote({...note, title}));
    } else {
      alert(1)

      dispatch(addNote({title, text}));
    }
  };

  const updateText = (text: string) => {
    if (note !== undefined) {
      dispatch(updateNote(
        {...note, text}
      ));
    } else {
      setText(text);
    }
  };

  return (
    <>
      {isNoteSelected ?
        <div className='flex flex-col gap-2 p-2 bg-zinc-50'>
          <input value={note.title} onChange={(e) => updateTitle(e.target.value)} type='text' maxLength={26} placeholder='Title...'
                 className='text-neutral-600 text-3xl px-2 bg-transparent placeholder:text-zinc-400 border-b-2 border-zinc-300
                   focus:outline-none focus:border-amber-300 focus:bg-zinc-100' />
          <textarea
            value={note.text}
            onChange={(e) => updateText(e.target.value)}
            name="noteText"
            id='noteText'
            maxLength={15000}
            placeholder='Start typing...'
            className='text-neutral-700 text-xl flex-1 p-2 resize-none rounded bg-zinc-100 placeholder:text-zinc-400
                      focus:outline-none focus:bg-zinc-200' />
        </div>
        :
        <div className='flex justify-center items-center h-full w-full bg-zinc-100'>
          <h2 className='text-3xl'>No note is selected</h2>
        </div>
      }
    </>
  );
};

export default NotePage;
