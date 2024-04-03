import React, {FC} from 'react';
import {Tooltip} from "../../../ui/Tooltip";
import {IconButton} from "../../../ui/IconButton";
import {handleSave} from "../../../modules/notes";
import {ColorsUtils} from "../../../modules/app/utils/utils";
import {useAppDispatch} from "../../../modules/app";
import colors = ColorsUtils.colors;

interface ToolbarActionProps {
  tooltipMsg: string;
  color?: colors;
  disabled?: boolean;
  handleClick: () => void;
  children: React.ReactElement;
}

const ToolbarAction: FC<ToolbarActionProps> = ({children,
                                                 handleClick,
                                                 tooltipMsg,
                                                 color = colors.PRIMARY,
                                                 disabled = false
}) => {
  const dispatch = useAppDispatch();

  return (
    <Tooltip message={tooltipMsg}>
      <IconButton
        handleClick={handleClick}
        color={color}
        disabled={disabled}
      >
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default ToolbarAction;