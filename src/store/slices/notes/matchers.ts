import {isFulfilled, isPending, isRejected, UnknownAction} from '@reduxjs/toolkit';
import { createNote, fetchNotes, removeNoteById, updateNoteById } from './thunks';

export const notesMatchers = (action: UnknownAction) => {
  return (
    isFulfilled(fetchNotes, createNote, updateNoteById, removeNoteById)({type: action.type}) ||
    isPending(fetchNotes, createNote, updateNoteById, removeNoteById)({type: action.type}) ||
    isRejected(fetchNotes, createNote, updateNoteById, removeNoteById)({type: action.type})
  );
};
