import React, {FC} from 'react';
import PrimaryButton from "../../../ui/PrimaryButton";

interface CreateButtonProps {
  handleCreate: () => void;
}

export const CreateButton: FC<CreateButtonProps> = ({handleCreate}) => {
  return (
    <PrimaryButton handleClick={handleCreate}>
      Create
    </PrimaryButton>
  );
};
