import React from 'react';
import {useAppSelector} from '../../app';
import TitleInput from './TitleInput';
import TextareaInput from './TextareaInput';
import {getSelectedNote} from '../redux/noteSelectors';

const NoteForm = () => {
  const note = useAppSelector(getSelectedNote);

  return (
    <>
      {note &&
        <div key={note.id} className='flex flex-col overflow-hidden max-w-full p-2 gap-2 bg-zinc-50'>
          {/*{todo}*/}
          <TitleInput initTitle={note.isEdited && note.draftTitle ? note.draftTitle : note.title} />
          <TextareaInput initText={note.isEdited && note.draftText ? note.draftText : note.text} />
        </div>
      }

      {!note &&
        <div className='flex justify-center items-center h-full w-full bg-zinc-100'>
          <h2 className='text-3xl'>No note is selected</h2>
        </div>
      }
    </>
  );
};

export default NoteForm;