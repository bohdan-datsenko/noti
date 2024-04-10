import React, {FC} from 'react';
import {ToolbarAction} from '../../../components/toolbar';
import {BiPlus} from 'react-icons/bi';
import {useAppDispatch} from '../../../modules/app';


interface CreateActionProps {
  handleAddDraft: () => void;
}

const CreateAction: FC<CreateActionProps> = ({handleAddDraft}) => {
  const dispatch = useAppDispatch();

  return (
    <ToolbarAction handleClick={handleAddDraft} tooltipMsg={'Shortcut: Ctrl + N'}>
      <BiPlus size={22} />
    </ToolbarAction>
  );
};

export default CreateAction;