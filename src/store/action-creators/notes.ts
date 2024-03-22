import {INote, NoteActionTypes} from '../../types/notes';
export const selectNote = (payload: number) => ({type: NoteActionTypes.SELECT_NOTE, payload});
export const addNote = (payload: Omit<INote, string>) => ({type: NoteActionTypes.ADD_NOTE, payload});
export const updateNote = (payload: Omit<INote, string>) => ({type: NoteActionTypes.UPDATE_NOTE, payload});
export const removeNote = (payload: number) => ({type: NoteActionTypes.REMOVE_NOTE, payload});