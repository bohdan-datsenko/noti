import {AppDispatch} from '../store/store';
import {createNote, fetchNotes, updateNoteById} from '../store/slices/notes/thunks';
import {removeDraftNote} from '../store/slices/notes/noteSlice';
import {IDraftNote, INote} from '../types/notes';

export const handleSave = async (note: IDraftNote | undefined, dispatch: AppDispatch) => {
  if (!note || !note.isEdited) return;

  if (note.isNew) {
    const newNote = { id: note.id, title: note.newTitle, text: note.newText } as INote;
    await dispatch(createNote(newNote));
    await dispatch(removeDraftNote(note.id));
  } else {
    await dispatch(updateNoteById({
      id: note.id,
      title: note.newTitle!,  // todo
      text: note.newText! // todo
    }));
  }

  dispatch(fetchNotes());
};

export const isIncluded = (items: number[], item: number) => items.includes(item);
