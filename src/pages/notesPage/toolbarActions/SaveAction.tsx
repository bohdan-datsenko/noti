import React from 'react';
import {useAppDispatch, useAppSelector} from '../../../modules/app';
import ToolbarAction from '../../../components/toolbar/components/ToolbarAction';
import {handleSave} from '../../../modules/notes';
import {BiSave} from 'react-icons/bi';
import {getSelectedNote} from '../../../modules/notes';

const SaveAction = () => {
  const dispatch = useAppDispatch();
  const selectedNote = useAppSelector(getSelectedNote);

  return (
    <ToolbarAction handleClick={() => dispatch(handleSave())} tooltipMsg={'Shortcut: Ctrl + S'} disabled={!selectedNote?.isEdited}>
      <BiSave size={22} />
    </ToolbarAction>
  );
};

export default SaveAction;