import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../app';
import {updateDraftNote} from '../redux/noteSlice';
import {handleSave} from '../redux/thunks';

const NoteForm = () => {
  const dispatch = useAppDispatch();
  const selectedNoteId = useAppSelector(state => state.noteReducer.selectedId);
  const note = useAppSelector(state => state.noteReducer.notes.find((n) => n.id === selectedNoteId)); // todo;

  const initTitle = note?.isEdited ? note.newTitle : note?.title;
  const initText = note?.isEdited ? note.newText : note?.text;

  const [title, setTitle] = useState(initTitle ?? ''); // todo
  const [text, setText] = useState(initText ?? ''); // todo

  // TODO
  useEffect(() => {
    setTitle(initTitle ?? '');
    setText(initText ?? '');
  }, [initTitle, initText]);


  useEffect(() => {
    if (note === undefined) {
      return;
    }

    const isEditSame = note.title === title
      && note.text === text;
    const isNoteNotEdited = note.title === title
      && note.text === text;

    const isDataEqual = isEditSame || isNoteNotEdited;

    if (isDataEqual && !note.isNew) {
      dispatch(updateDraftNote({...note, newTitle: title, newText: text, isEdited: false}))
    } else {
      dispatch(updateDraftNote({...note, isEdited: true, newTitle: title, newText: text}));
    }
  }, [title, text]); // TODO check dep array

  return (
    <>
      {note !== undefined ?
        <div className='flex flex-col overflow-hidden max-w-full p-2 gap-2 bg-zinc-50'>
          <div className='flex flex-col sm:flex-row gap-2 max-w-full'>
            <input value={title} onChange={(e) => setTitle(e.target.value)} type='text' maxLength={26} placeholder='Title...'
                   className='flex-auto text-neutral-600 text-3xl px-2 bg-transparent placeholder:text-zinc-400 border-b-2 border-zinc-300
                   focus:outline-none focus:border-amber-300 focus:bg-zinc-100' />
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            name="noteText"
            id='noteText'
            maxLength={15000}
            placeholder='Start typing...'
            className='text-neutral-700 text-xl flex-1 resize-none rounded bg-zinc-100 placeholder:text-zinc-400
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

export default NoteForm;