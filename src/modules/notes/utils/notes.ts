import {AppDispatch} from '../../app';
import {createNote, fetchNotes, removeNoteById, updateNoteById} from '../redux/thunks';
import {addDraftNote, removeDraftNote} from '../redux/noteSlice';
import {IDraftNote, INote} from '../types/notes';
import React from "react";

export const handleSave = async (note: IDraftNote | undefined, dispatch: AppDispatch) => {
  if (!note || !note.isEdited) return;

  if (note.isNew) {
    const newNote = { id: note.id, title: note.newTitle, text: note.newText } as INote;
    await dispatch(createNote(newNote));
    dispatch(removeDraftNote(note.id));
  } else {
    await dispatch(updateNoteById({
      id: note.id,
      title: note.newTitle!,  // todo
      text: note.newText! // todo
    }));
  }

  dispatch(fetchNotes());
};

export const handleCreate = (dispatch: AppDispatch) => {
  dispatch(addDraftNote({title: '', text: ''}));
}

export const handleRemove = (id: number,
                             isNew: boolean,
                             dispatch: AppDispatch,
                             e?: React.MouseEvent<HTMLButtonElement>) =>
{
  if (e) {
    e.stopPropagation();
  }

  const isConfirmed = window.confirm('Are you sure you want to remove note?');
  if (!isConfirmed){
    return;
  }

  if (!isNew) {
    dispatch(removeNoteById(id)).then(() => {
      dispatch(fetchNotes());
    });
  } else {
    dispatch(removeDraftNote(id));
  }
}
