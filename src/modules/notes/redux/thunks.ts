import {NotesAPI} from '../api/NotesAPI';
import {INote} from '../types/notes';
import {
  addDraftNote,
  removeDraftNote,
  selectNote,
  updateDraftNote,
} from './noteSlice';
import {createAppAsyncThunk} from '../../app/redux/store';
import {handleError} from '../../app';

export const fetchNotes = createAppAsyncThunk(
  'notes/fetchNotes',
  async (_, {dispatch}) => {
    try {
      const {data, status} = await NotesAPI.fetchAll();
      return data;
    } catch (err) {
      dispatch(handleError( {path: 'notes/fetchNotes', message: 'Failed to fetch notes'}));
    }

    return []; // TODO
  }
);

export const updateNoteById = createAppAsyncThunk(
  'notes/updateNoteById',
  async (note: INote, {dispatch}) => {
    try {
      await NotesAPI.updateById(note);
      return note.id;
    } catch (err) {
      dispatch(handleError({path: 'notes/updateNoteById', message: `Failed to update note with id: ${note.id}`}));
    }
  }
);

export const removeNoteById = createAppAsyncThunk(
  'notes/removeNoteById',
  async (id: number, {dispatch}) => {
    try {
      const {status} = await NotesAPI.removeNoteById(id);
      return status;
    } catch (err: any) {
      dispatch(handleError({path: 'notes/removeNoteById', message: err.message}));
    }
  }
);

export const createNote = createAppAsyncThunk(
  'notes/createNote',
  async (note: INote, {dispatch}) => {
    try {
      const {data} = await NotesAPI.createNote(note.title, note.text);
      return data.id;
    } catch (err: any) {
      dispatch(handleError({path: 'notes/removeNoteById', message: err.message}));
    }
  }
);

// todo make selectedNote instead of selectedId?
export const handleSave = createAppAsyncThunk(
  'notes/handleSave',
  async (_, {dispatch, getState}) => {
    const selectedId = getState().noteReducer.selectedId;
    const note = getState().noteReducer.notes.find(note => note.id === selectedId);

    if (note === undefined || note.draftTitle === undefined || note.draftText === undefined) return;

    if (note.isNew) {
      const newNote = {id: note.id, title: note.draftTitle, text: note.draftText} as INote;
      await dispatch(createNote(newNote));
      dispatch(removeDraftNote(note.id));
    } else {
      await dispatch(updateNoteById({
        id: note.id,
        title: note.draftTitle,
        text: note.draftText
      }));
    }
    dispatch(fetchNotes());
});

export const handleAddDraft = createAppAsyncThunk(
  'notes/create',
  (_, {dispatch}) => {
    dispatch(addDraftNote({title: '', text: ''}));
});

export const handleRemove = createAppAsyncThunk(
  'notes/remove',
  async (_, {dispatch, getState}) => {
  const selectedId = getState().noteReducer.selectedId;
  const selectedNote = getState().noteReducer.notes.find(note => note.id === selectedId);

  const isConfirmed = window.confirm('Are you sure you want to remove note?');
  if (!isConfirmed || !selectedNote){
    return;
  }

  if (!selectedNote.isNew) {
    dispatch(removeNoteById(selectedNote.id)).then(() => {
      dispatch(fetchNotes());
    });
  } else {
    dispatch(removeDraftNote(selectedNote.id));
  }

  dispatch(selectNote(-1));
  });

interface IUpdatedNoteData {
  title?: string;
  text?: string;
}

export const handleUpdateDraft = createAppAsyncThunk(
  'notes/updateDraftNote',
  (data: IUpdatedNoteData, {dispatch, getState}) => {
    const selectedId = getState().noteReducer.selectedId;
    const note = getState().noteReducer.notes.find((n) => n.id === selectedId);

    if (note) {
      const title = note.isEdited ? note.draftTitle : note.title;
      const text = note.isEdited ? note.draftText : note.text;

      const newTitle = data.title !== undefined ? data.title : title;
      const newText = data.text !== undefined ? data.text : text;

      const isTitleEdited = newTitle !== note.title;
      const isTextEdited = newText !== note.text;

      dispatch(updateDraftNote({...note,
        draftTitle: newTitle,
        draftText: newText,
        isEdited: isTitleEdited || isTextEdited}));
    }
});
