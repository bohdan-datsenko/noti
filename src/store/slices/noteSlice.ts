import {createSlice} from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    selectedId: 0,
    notes: [
      { id: 0, title: 'First note', text: 'First' },
      { id: 1, title: 'Second note', text: 'Second' },
      { id: 2, title: 'Third note', text: 'Third' },
    ]
  },
  reducers: {
    selectNote: (state, action) => {
      state.selectedId = action.payload;
    },
    addNote: (state, action) => {
      const length = state.notes.length;
      let id = length > 0 ?
        state.notes[length - 1].id + 1
      : 0;
      state.notes.push({...action.payload, id: id});
      state.selectedId = id; // todo split it?
    },
    updateNote: (state, action) => {
      const note = state.notes.find(note => note.id === action.payload.id)!;
      note.title = action.payload.title;
      note.text = action.payload.text;
    },
    removeNote: (state, action) => {
      const index = state.notes.findIndex((note) => action.payload === note.id);
      state.notes.splice(index, 1);
    }
  }
});

export const {selectNote, addNote, updateNote, removeNote} = notesSlice.actions;
export const noteReducer = notesSlice.reducer;