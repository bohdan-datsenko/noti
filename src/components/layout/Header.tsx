import React, {FC, ReactNode} from 'react';

interface HeaderProps {
  actions: ReactNode[];
}

const Header: FC<HeaderProps> = ({actions}) => {
    return (
        <header className='flex justify-between px-8 py-4 md:rounded-t text-white bg-amber-300'>
          <h2 className='text-2xl font-bold uppercase'>noti</h2>
          {actions}
        </header>
    );
};

export default Header;
