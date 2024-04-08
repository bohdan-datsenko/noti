import React from 'react';
import {useAppDispatch, useAppSelector} from '../../../modules/app';
import ToolbarAction from '../../../components/toolbar/components/ToolbarAction';
import {handleSave} from '../../../modules/notes';
import {BiSave} from 'react-icons/bi';

const SaveAction = () => {
  const dispatch = useAppDispatch();
  const selectedId = useAppSelector((state) => state.noteReducer.selectedNote?.id);
  const note = useAppSelector((state) =>
    state.noteReducer.notes.find((n) => n.id === selectedId));

  return (
    <ToolbarAction handleClick={() => dispatch(handleSave())} tooltipMsg={'Shortcut: Ctrl + S'} disabled={!note?.isEdited}>
      <BiSave size={22} />
    </ToolbarAction>
  );
};

export default SaveAction;