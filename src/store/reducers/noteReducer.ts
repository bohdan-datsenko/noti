import {NoteAction, NoteActionTypes, NotesState} from '../../types/notes';

const initState: NotesState = {
  selectedId: 0,
  notes: [
    { id: 1, title: 'First note', text: 'First' },
    { id: 2, title: 'Second note', text: 'Second' },
    { id: 3, title: 'Third note', text: 'Third' },
  ]
};

export const noteReducer = (state = initState, action: NoteAction): NotesState => {
  switch (action.type) {
    case NoteActionTypes.SELECT_NOTE:
      return {
        ...state,
        selectedId: action.payload
      };
    case NoteActionTypes.ADD_NOTE:
      const nextId = state.notes[state.notes.length - 1].id;

      return {
        ...state,
        notes: [...state.notes, {...action.payload, id: nextId}]
      };
    case NoteActionTypes.UPDATE_NOTE:
      return {
        ...state,
        notes: state.notes.map(note =>
          note.id === action.payload.id ? { ...note, ...action.payload } : note
        )
      };
    case NoteActionTypes.REMOVE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(note => note.id !== action.payload)
      };
    default:
      return state;
  }
}
