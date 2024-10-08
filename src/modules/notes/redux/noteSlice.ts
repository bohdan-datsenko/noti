import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IEditedNote, INote} from '../types/notes';

// todo where to store interfaces
interface NotesState {
  selectedId: number;
  notes: IEditedNote[];
  isLoading: boolean;
}

const initialState: NotesState = {
  selectedId: -1,
  notes: [],
  isLoading: false,
};

const notesSlice = createSlice({
  name: 'notes',
  initialState: initialState,
  reducers: {
    setNotes: (state, action:PayloadAction<INote[]>) => {
      const draftNotes = state.notes.filter((note) => note.isEdited);
      const draftNotesIds = draftNotes.map((note) => note.id);
      const fetchedNotes = action.payload
        .filter((fetchedNote) => !draftNotesIds.includes(fetchedNote.id))
        .map((fetchedNote) => ({...fetchedNote,
          draftTitle: '',
          draftText: '',
          isEdited: false,
          isNew: false
        }));
      const fetchedNotesIds = fetchedNotes.map((note) => note.id);

      state.notes = [...fetchedNotes, ...draftNotes.filter((draftNote) => !fetchedNotesIds.includes(draftNote.id))];
    },
    selectNote: (state, action: PayloadAction<number>) => {
      state.selectedId = action.payload;
    },
    addDraftNote: (state, action: PayloadAction<Omit<INote, 'id'>>) => {
      const length = state.notes.length;
      let id = length > 0 ? state.notes[length - 1].id + 1 : 0;
      const note: IEditedNote = {...action.payload,
        id, draftTitle: '',
        draftText: '',
        isEdited: true,
        isNew: true
      };

      state.notes.push(note);
      state.selectedId = note.id;
    },
    updateDraftNote: (state, action: PayloadAction<IEditedNote>) => {
      const {id,
        title,
        text,
        draftTitle,
        draftText,
        isEdited} = action.payload;

      const index = state.notes.findIndex(note => note.id === id);
      state.notes[index] = {...state.notes[index], title, text, draftTitle: draftTitle, draftText: draftText, isEdited};
    },
    removeDraftNote: (state, action) => {
      state.notes = state.notes.filter(({id}) => id !== action.payload);
    },
  },
});

export const {
  setNotes,
  selectNote,
  addDraftNote,
  updateDraftNote,
  removeDraftNote,
} = notesSlice.actions;
export const noteReducer = notesSlice.reducer;