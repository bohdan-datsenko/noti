import {RootState} from '../../app';

export const getNotes = (state: RootState) => state.noteReducer.notes;
export const getSelectedNoteId = (state: RootState) => state.noteReducer.selectedId;

// public api?
export const getSelectedNote = (state: RootState) => {
  const selectedId = getSelectedNoteId(state);
  const notes = getNotes(state);
  return notes.find((note) => note.id === selectedId);
};