import React, {FC} from 'react';

interface ToolbarProps {
  primaryActions: React.ReactNode[];
  secondaryActions?: React.ReactNode[];
}

const Toolbar: FC<ToolbarProps> = ({primaryActions, secondaryActions}) => {
  return (
    <div className='grid sm:grid-cols-[35%_65%] lg:grid-cols-[25%_75%] py-1 w-full bg-zinc-200 border-b-4 border-b-zinc-50'>
      <div className='flex gap-4 px-4 border-r-2 border-r-zinc-100'>
        {primaryActions.map((action) => action)}
      </div>

      <div className='px-4'>
        {secondaryActions?.map((action) => action)}
      </div>
    </div>
  );
};

export default Toolbar; // todo add public api?