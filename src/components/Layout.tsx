import React, {FC} from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Spinner from '../ui/Spinner';

interface LayoutProps {
  isLoading: boolean;
  toolbarActions: React.ReactElement[];
  handleOpenMenu: () => void;
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({isLoading, toolbarActions, handleOpenMenu, children}) => {
  const openBtn =
    <button onClick={handleOpenMenu} className='relative w-8 sm:hidden self-end active:scale-110
                                                before:absolute before:block before:bg-white before:rounded before:h-0.5 before:w-full before:top-0
                                                after:absolute after:block rounded after:bg-white after:h-0.5 after:w-full after:bottom-0'>&nbsp;
      <span className='absolute block h-0.5 w-8 bg-white top-1/2 -translate-y-1/2'></span>
    </button>

  return (
      <div className='flex flex-col container h-screen md:w-11/12 lg:w-3/4 mx-auto text-zinc-700'>
        <Header actions={openBtn} toolbarActions={toolbarActions} />
        {isLoading ?
          <Spinner />
          :
          <Main>
            {children}
          </Main>
        }
        <Footer />
      </div>
  );
};

export default Layout;
