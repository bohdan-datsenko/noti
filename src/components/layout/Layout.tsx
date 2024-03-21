import React, {FC} from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

interface LayoutProps {
  handleOpenMenu: () => void;
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({handleOpenMenu, children}) => {
  const openBtn =
    <button onClick={handleOpenMenu} className='relative h-full w-8 sm:hidden self-end rounded hover:bg-gray-200 active:scale-110
                                                before:absolute before:block before:bg-white before:rounded before:h-0.5 before:w-full before:top-0
                                                after:absolute after:block rounded after:bg-white after:h-0.5 after:w-full after:bottom-0'>&nbsp;
      <span className='absolute block h-0.5 w-8 bg-white top-1/2 -translate-y-1/2'></span>
    </button>

  return (
      <div className='flex flex-col min-h-screen'>
          <Header actions={[openBtn]} />
          <Main>
            {children}
          </Main>
          <Footer />
      </div>
  );
};

export default Layout;
