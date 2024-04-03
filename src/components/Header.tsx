import React, {FC, ReactNode} from 'react';
import Toolbar from "./toolbar/Toolbar";

interface HeaderProps {
  actions: ReactNode;
  toolbarActions: React.ReactElement[];
}

const Header: FC<HeaderProps> = ({actions, toolbarActions}) => {
    return (
        <header className='flex flex-col justify-between md:rounded-t'>
          <div className='flex justify-between w-full px-8 py-4 text-white bg-amber-300'>
            <h2 className='text-2xl font-bold uppercase'>noti</h2>
            {actions}
          </div>

          <Toolbar primaryActions={toolbarActions} />
        </header>
    );
};

export default Header;
