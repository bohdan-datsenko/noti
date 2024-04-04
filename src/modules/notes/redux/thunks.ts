import {NotesAPI} from '../api/NotesAPI';
import {INote} from '../types/notes';
import {addDraftNote, removeDraftNote, selectNote, updateDraftNote} from "./noteSlice";
import {createAppAsyncThunk} from "../../app/hooks/redux";

export const fetchNotes = createAppAsyncThunk(
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

export const updateNoteById = createAppAsyncThunk(
  'notes/updateNoteById',
  async (note: INote) => {
    try {
      const {status} = await NotesAPI.updateById(note);
      if (status === 200) {
        return note.id;
      }
      throw Error('Failed to update note with id: ' + note.id); // TODO
    } catch (err) {
      throw err;
    }
  }
);

export const removeNoteById = createAppAsyncThunk(
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

export const createNote = createAppAsyncThunk(
  'notes/createNote',
  async (note: INote) => {
    try {
      const {data, status} = await NotesAPI.createNote(note.title, note.text);
      if (status === 201) {
        return data.id;
      }
      throw Error('Failed to create note'); // TODO
    } catch (err) {
      throw err;
    }
  }
);

export const handleSave = createAppAsyncThunk(
  'notes/save',
  async (_, {dispatch, getState}) => {
    const selectedId = getState().noteReducer.selectedId;
    const note = getState().noteReducer.notes.find(note => note.id === selectedId);

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

interface HandleUpdateDraftProps {
  title: string;
  text: string;
}

export const handleUpdateDraft = createAppAsyncThunk(
  'notes/updateDraft',
  (data: HandleUpdateDraftProps, {dispatch, getState}) => {
    const selectedId = getState().noteReducer.selectedId;
    const note = getState().noteReducer.notes.find((n) => n.id === selectedId)!; // todo
    const isEditSame = note.title === data.title
      && note.text === data.text;
    const isNoteNotEdited = note.title === data.title
      && note.text === data.text;

    const isDataEqual = isEditSame || isNoteNotEdited;

    if (isDataEqual && !note.isNew) {
      dispatch(updateDraftNote({...note, newTitle: data.title, newText: data.text, isEdited: false}))
    } else {
      dispatch(updateDraftNote({...note, isEdited: true, newTitle: data.title, newText: data.text}));
    }
});

