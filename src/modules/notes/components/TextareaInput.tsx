import React, {ChangeEvent, FC, useState} from 'react';
import {useAppDispatch} from '../../app';
import {handleUpdateDraft} from "../redux/thunks";

interface TextareaInputProps {
  initText: string;
}

const TextareaInput: FC<TextareaInputProps> = ({initText}) => {
  const dispatch = useAppDispatch();
  const [text, setText] = useState(initText);

  const updateNoteText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    dispatch(handleUpdateDraft({text: newText}));
  }

  return (
    <textarea
      value={text}
      onChange={updateNoteText}
      name='noteText'
      id='noteText'
      maxLength={15000}
      placeholder='Start typing...'
      className='text-neutral-700 text-xl flex-1 resize-none rounded bg-zinc-100 placeholder:text-zinc-400
                      focus:outline-none focus:bg-zinc-200'/>
  );
}

export default TextareaInput;