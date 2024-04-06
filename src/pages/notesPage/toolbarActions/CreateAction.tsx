import React from 'react';
import ToolbarAction from "../../../components/toolbar/components/ToolbarAction";
import {handleAddDraft} from "../../../modules/notes";
import {BiPlus} from "react-icons/bi";
import {useAppDispatch} from "../../../modules/app";

const CreateAction = () => {
  const dispatch = useAppDispatch();

  return (
    <ToolbarAction handleClick={() => dispatch(handleAddDraft())} tooltipMsg={'Shortcut: Ctrl + N'}>
      <BiPlus size={22} />
    </ToolbarAction>
  );
};

export default CreateAction;