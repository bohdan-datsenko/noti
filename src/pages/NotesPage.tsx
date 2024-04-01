import React, {useEffect, useState} from 'react';
import Layout from "../components/layout/Layout";
import NoteForm from "../components/NoteForm";
import {IDraftNote} from '../types/notes';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {selectNote} from '../store/slices/notes/noteSlice';
import {fetchNotes} from '../store/slices/notes/thunks';
import {useKeyboardShortcut} from '../hooks/useKeyboardShortcut';
import {shortcuts} from '../constants/notes';
import {SidebarComponent} from '../components/ui/SidebarCompoment';
import {handleSave} from '../utils/notes';

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
