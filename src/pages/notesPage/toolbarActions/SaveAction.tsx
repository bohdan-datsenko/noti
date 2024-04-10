import React, {FC} from 'react';
import ToolbarAction from '../../../components/toolbar/components/ToolbarAction';
import {BiSave} from 'react-icons/bi';

interface SaveActionProps {
  isDisabled: boolean;
  handleSave: () => void;
}

const SaveAction: FC<SaveActionProps> = ({isDisabled, handleSave}) => {

  return (
    <ToolbarAction handleClick={handleSave} tooltipMsg={'Shortcut: Ctrl + S'} disabled={isDisabled}>
      <BiSave size={22} />
    </ToolbarAction>
  );
};

export default SaveAction;