import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import NoteForm from "../../modules/notes/components/NoteForm";
import {useAppDispatch, useAppSelector} from '../../modules/app';
import {fetchNotes} from '../../modules/notes/redux/thunks';
import {useKeyboardShortcut} from '../../modules/app/hooks/useKeyboardShortcut';
import {shortcuts} from '../../modules/notes/constants/notes';
import {SidebarComponent} from '../../modules/app/components/SidebarCompoment';
import {handleAddDraft, handleRemove, handleSave} from '../../modules/notes';
import CreateAction from "./toolbarActions/CreateAction";
import SaveAction from "./toolbarActions/SaveAction";
import RemoveAction from "./toolbarActions/RemoveAction";

export const NotesPage = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.noteReducer.isLoading);

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // handle keyboard shortcuts for whole page
  useKeyboardShortcut(shortcuts.SAVE, () => dispatch(handleSave()));
  useKeyboardShortcut(shortcuts.CREATE, () => dispatch(handleAddDraft()));
  useKeyboardShortcut(shortcuts.REMOVE,  () => dispatch(handleRemove()));

  return (
    <Layout isLoading={isLoading}
            handleOpenMenu={() => setIsMenuOpen(true)}
            toolbarActions={[<CreateAction />, <SaveAction />, <RemoveAction />]}
    >
      <SidebarComponent
        isMenuOpen={isMenuOpen}
        handleCloseMenu={() => setIsMenuOpen(false)}
      />
      <NoteForm />
    </Layout>
  );
}
