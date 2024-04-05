import React, {FC} from 'react';
import {Tooltip} from "../../../ui/Tooltip";
import {IconButton} from "../../../ui/IconButton";
import {colors} from "../../../modules/app";

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