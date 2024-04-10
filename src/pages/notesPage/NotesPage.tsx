import React, {useEffect, useRef, useState} from 'react';
import Layout from '../../components/Layout';
import NoteForm, {getSelectedNote} from '../../modules/notes';
import {useAppDispatch, useAppSelector} from '../../modules/app';
import {useKeyboardShortcut} from '../../modules/app';
import {shortcuts} from '../../modules/notes';
import {handleAddDraft, handleSave} from '../../modules/notes';
import CreateAction from './toolbarActions/CreateAction';
import SaveAction from './toolbarActions/SaveAction';
import RemoveAction from './toolbarActions/RemoveAction';
import Sidebar from '../../components/Sidebar';
import {useHandleErrors} from '../../modules/app';
import {useFetchNotesQuery} from '../../modules/notes';
import {setNotes} from '../../modules/notes';
import {handleRemove} from '../../modules/notes';

export const NotesPage = () => {
  const dispatch = useAppDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {data, isLoading} = useFetchNotesQuery();
  const selectedNote = useAppSelector(getSelectedNote);

  // store note in ref to allow useKeyboardShortcuts() have actual version
  // instead of version set during first mount
  const noteRef = useRef({selectedNote: selectedNote});
  noteRef.current.selectedNote = selectedNote;

  useEffect(() => {
    if (data !== undefined) {
      dispatch(setNotes(data));
    }
  }, [data]);

  const saveNote = () => dispatch(handleSave(noteRef.current.selectedNote));
  const addDraft = () => dispatch(handleAddDraft());
  const removeNote = () => dispatch(handleRemove(noteRef.current.selectedNote));

  // handle keyboard shortcuts for whole page
  useKeyboardShortcut(shortcuts.SAVE, saveNote); // todo add focus?
  useKeyboardShortcut(shortcuts.ADD_DRAFT, addDraft);
  useKeyboardShortcut(shortcuts.REMOVE, removeNote);

  // handle async errors from api requests
  useHandleErrors();

  const actions = [
    <CreateAction handleAddDraft={addDraft} />,
    <SaveAction isDisabled={!selectedNote?.isEdited} handleSave={saveNote} />,
    <RemoveAction isDisabled={selectedNote === undefined} handleRemove={removeNote} />
  ];

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
