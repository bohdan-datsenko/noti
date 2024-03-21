import React, {FC} from 'react';
import {INote} from '../types/types';

const NotePage: FC<INote> = (note) => {
    return (
        <div className='flex flex-col gap-2 p-2 bg-zinc-50'>
          <input value={note.title} type='text' maxLength={26} placeholder='Title...'
                 className='text-neutral-600 text-3xl px-2 bg-transparent placeholder:text-zinc-400 border-b-2 border-zinc-300
                 focus:outline-none focus:border-amber-300 focus:bg-zinc-100' />
          <textarea value={note.text} name="noteText" id='noteText' maxLength={15000} placeholder='Text...'
                    className='text-neutral-700 text-xl flex-1 p-2 resize-none rounded bg-zinc-100 placeholder:text-zinc-400
                    focus:outline-none focus:bg-zinc-200' />
        </div>
    );
};

export default NotePage;
