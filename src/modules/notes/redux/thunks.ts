import {IEditedNote} from '../types/notes';
import {
  addDraftNote,
  removeDraftNote,
  selectNote,
  updateDraftNote,
} from './noteSlice';
import {createAppAsyncThunk} from '../../app/redux/store';
import {getSelectedNote} from './noteSelectors';
import {createNote, removeNoteById, updateNote} from '../api/notesApi';

// todo make selectedNote instead of selectedId?
export const handleSave = createAppAsyncThunk(
  'notes/handleSave',
  async (note: IEditedNote | undefined, {dispatch}) => {
    if (!note) return; // todo?

    if (note.isNew) {
      const newNote = {
        id: note.id,
        title: note.draftTitle,
        text: note.draftText
      };

      const createdNote = await dispatch(createNote.initiate(newNote)).unwrap();
      dispatch(selectNote(createdNote.id));
      dispatch(removeDraftNote(note.id)); // todo there is filter already in the createNote?

    } else {
      const newNote = {
        id: note.id,
        title: note.draftTitle,
        text: note.draftText
      };
      const updatedNote = await dispatch(updateNote.initiate(newNote)).unwrap();
      dispatch(selectNote(updatedNote.id));
      dispatch(removeDraftNote(note.id)); // todo there is filter already in the createNote?
    }

});

export const handleAddDraft = createAppAsyncThunk(
  'notes/create',
  (_, {dispatch}) => {
    dispatch(addDraftNote({title: '', text: ''}));
});

export const handleRemove = createAppAsyncThunk(
  'notes/handleRemove',
  async (note: IEditedNote | undefined, {dispatch}) => {
    if (!note) return;

    const isConfirmed = window.confirm('Are you sure you want to remove note?');
    if (!isConfirmed){
      return;
    }

    if (!note.isNew) {
      // does it good practice?
      await dispatch(removeNoteById.initiate(note.id));
      dispatch(selectNote(-1));
    } else {
      dispatch(removeDraftNote(note.id));
      dispatch(selectNote(-1));
    }
});

interface IUpdatedNoteData {
  title?: string;
  text?: string;
}

export const handleUpdateDraft = createAppAsyncThunk(
  'notes/updateDraftNote',
  (data: IUpdatedNoteData, {dispatch, getState}) => {
    const selectedNote = getSelectedNote(getState());

    if (selectedNote) {
      const title = selectedNote.isEdited ? selectedNote.draftTitle : selectedNote.title;
      const text = selectedNote.isEdited ? selectedNote.draftText : selectedNote.text;

      const newTitle = data.title !== undefined ? data.title : title;
      const newText = data.text !== undefined ? data.text : text;

      const isTitleEdited = newTitle !== selectedNote.title;
      const isTextEdited = newText !== selectedNote.text;

      dispatch(updateDraftNote({...selectedNote,
        draftTitle: newTitle,
        draftText: newText,
        isEdited: isTitleEdited || isTextEdited}));
    }
});
