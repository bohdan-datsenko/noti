import React, {FC} from 'react';
import {colors} from '../../../modules/app';
import ToolbarAction from '../../../components/toolbar/components/ToolbarAction';
import {BiTrash} from 'react-icons/bi';

// todo with "I" prefix?
interface RemoveActionProps {
  isDisabled: boolean,
  handleRemove: () => void
}

const RemoveAction: FC<RemoveActionProps> = ({ isDisabled, handleRemove }) => {
  return (
    <ToolbarAction handleClick={handleRemove}
                   tooltipMsg={'Shortcut: Ctrl + D'}
                   color={colors.ERROR}
                   disabled={isDisabled}
    >
      <BiTrash size={22} />
    </ToolbarAction>
  );
};

export default RemoveAction;