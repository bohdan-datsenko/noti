import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout";
import NoteForm from "../modules/notes/components/NoteForm";
import {IDraftNote} from '../modules/notes/types/notes';
import {useAppDispatch, useAppSelector} from '../modules/app';
import {fetchNotes} from '../modules/notes/redux/thunks';
import {useKeyboardShortcut} from '../modules/app/hooks/useKeyboardShortcut';
import {shortcuts} from '../modules/notes/constants/notes';
import {SidebarComponent} from '../modules/app/components/SidebarCompoment';
import {handleSave} from '../modules/notes/utils/notes';

export const NotesPage = () => {
  const dispatch = useAppDispatch();
  const notes = useAppSelector(state => state.noteReducer.notes);
  const selectedId = useAppSelector(state => state.noteReducer.selectedId);
  const isLoading = useAppSelector(state => state.noteReducer.isLoading);
  const selectedNote: IDraftNote | undefined = notes.find(note => note.id === selectedId);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // handle keyboard shortcuts for whole page
  useKeyboardShortcut(shortcuts.SAVE, () => handleSave(selectedNote, dispatch));

  return (
    <Layout isLoading={isLoading} handleOpenMenu={() => setIsMenuOpen(true)}>
      <SidebarComponent
        isMenuOpen={isMenuOpen}
        handleCloseMenu={() => setIsMenuOpen(false)}
      />
      <NoteForm />
    </Layout>
  );
}
