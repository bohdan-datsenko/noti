import React from 'react';
import {colors, useAppDispatch, useAppSelector} from '../../../modules/app';
import ToolbarAction from '../../../components/toolbar/components/ToolbarAction';
import {handleRemove} from '../../../modules/notes';
import {BiTrash} from 'react-icons/bi';

const RemoveAction = () => {
  const dispatch = useAppDispatch();
  const selectedId = useAppSelector((state) => state.noteReducer.selectedNote?.id);

  return (
    <ToolbarAction handleClick={() => dispatch(handleRemove())}
                   tooltipMsg={'Shortcut: Ctrl + D'}
                   color={colors.ERROR}
                   disabled={selectedId === -1}
    >
      <BiTrash size={22} />
    </ToolbarAction>
  );
};

export default RemoveAction;