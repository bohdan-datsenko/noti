import React, {FC} from 'react';
import {INote} from '../types/notes';
import {useActions} from '../hooks/useActions';

interface NotePageProps {
  note?: INote;
}

const NotePage: FC<NotePageProps> = ({note}) => {
  const {updateNote} = useActions();

  const updateTitle = (title: string) => {
    updateNote({...note, title});
  };

  const updateText = (text: string) => {
    updateNote({...note, text});
  };

  return (
      <div className='flex flex-col gap-2 p-2 bg-zinc-50'>
        <input value={note?.title ?? ''} onChange={(e) => updateTitle(e.target.value)} type='text' maxLength={26} placeholder='Title...'
               className='text-neutral-600 text-3xl px-2 bg-transparent placeholder:text-zinc-400 border-b-2 border-zinc-300
               focus:outline-none focus:border-amber-300 focus:bg-zinc-100' />
        <textarea value={note?.text ?? ''} onChange={(e) => updateText(e.target.value)} name="noteText" id='noteText' maxLength={15000} placeholder='Text...'
                  className='text-neutral-700 text-xl flex-1 p-2 resize-none rounded bg-zinc-100 placeholder:text-zinc-400
                  focus:outline-none focus:bg-zinc-200' />
      </div>
  );
};

export default NotePage;
