import {createAsyncThunk} from '@reduxjs/toolkit';
import {NotesAPI} from '../api/NotesAPI';
import {INote} from '../types/notes';

export const fetchNotes = createAsyncThunk(
  'notes/fetchNotes',
  async () => {
    try {
      const {data, status} = await NotesAPI.fetchAll();
      if(status === 200) {
        return data;
      }
    } catch (err) {
      throw err;
    }

    return [];
  }
);

export const updateNoteById = createAsyncThunk(
  'notes/updateNoteById',
  async (note: INote) => {
    try {
      const {status} = await NotesAPI.updateById(note);
      if (status === 200) {
        return note.id;
      }
      throw Error; // TODO
    } catch (err) {
      throw err;
    }
  }
);

export const removeNoteById = createAsyncThunk(
  'notes/removeNoteById',
  async (id: number) => {
    try {
      const {status} = await NotesAPI.removeNoteById(id);
      return status;
    } catch (err) {
      throw err;
    }
  }
);

export const createNote = createAsyncThunk(
  'notes/createNote',
  async (note: INote) => {
    try {
      const {data, status} = await NotesAPI.createNote(note.title, note.text);
      if (status === 201) {
        return data.id;
      }
      throw Error; // TODO
    } catch (err) {
      throw err;
    }
  }
);
