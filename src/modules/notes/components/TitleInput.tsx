import React, {ChangeEvent, FC, useState} from 'react';
import {handleUpdateDraft} from '../redux/thunks';
import {useAppDispatch} from '../../app';

interface TitleInputProps {
  initTitle: string;
}

const TitleInput: FC<TitleInputProps> = ({initTitle}) => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState(initTitle);

  const updateNoteTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    dispatch(handleUpdateDraft({title: newTitle}));
  }

  return (
    <div className='flex flex-col sm:flex-row gap-2 max-w-full'>
      <input value={title} onChange={updateNoteTitle} type='text' maxLength={26} placeholder='Title...'
             className='flex-auto text-neutral-600 text-3xl px-2 bg-transparent placeholder:text-zinc-400 border-b-2 border-zinc-300
                   focus:outline-none focus:border-amber-300 focus:bg-zinc-100'/>
    </div>
  );
};

export default TitleInput;