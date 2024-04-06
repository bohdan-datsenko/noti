import React, {useEffect, useMemo, useState} from 'react';
import Layout from "../../components/Layout";
import NoteForm from "../../modules/notes";
import {useAppDispatch, useAppSelector} from '../../modules/app';
import {fetchNotes} from '../../modules/notes';
import {useKeyboardShortcut} from '../../modules/app';
import {shortcuts} from '../../modules/notes';
import {handleAddDraft, handleRemove, handleSave} from '../../modules/notes';
import CreateAction from './toolbarActions/CreateAction';
import SaveAction from './toolbarActions/SaveAction';
import RemoveAction from './toolbarActions/RemoveAction';
import Sidebar from '../../components/Sidebar';

export const NotesPage = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.noteReducer.isLoading);
  const error = useAppSelector(state => state.noteReducer.error);

  useEffect(() => {
    dispatch(fetchNotes());
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // handle keyboard shortcuts for whole page
  useKeyboardShortcut(shortcuts.SAVE, () => dispatch(handleSave()));
  useKeyboardShortcut(shortcuts.ADD_DRAFT, () => dispatch(handleAddDraft()));
  useKeyboardShortcut(shortcuts.REMOVE,  () => dispatch(handleRemove()));

  const actions = useMemo(() => [
    <CreateAction />, <SaveAction />, <RemoveAction />
  ], []);

  return (
    <Layout isLoading={isLoading}
            handleOpenMenu={() => setIsMenuOpen(true)}
            toolbarActions={actions}
    >
      <Sidebar
        isOpen={isMenuOpen}
        handleClose={() => setIsMenuOpen(false)}
      />
      <NoteForm />
    </Layout>
  );
}
