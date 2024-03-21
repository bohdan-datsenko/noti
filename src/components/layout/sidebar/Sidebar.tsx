import React, {FC} from 'react';
import {Drawer} from "../../ui/Drawer";

interface SidebarProps {
    items: string[];
    isOpen: boolean;
    handleClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({items, isOpen, handleClose}) => {
  const noteTitles = <ul>
    {items.map((item, index) => (
      <li key={index} className='flex justify-center'>
        <button className='w-full inline-block text-start px-4 py-2 font-semibold truncate border-b-2 border-b-neutral-200
                            hover:border-b-amber-300 hover:bg-amber-100
                            active:border-b-amber-400 active:bg-amber-200'
        >{item}</button>
      </li>
    ))}
  </ul>;

  return (
      <>
          <Drawer isOpen={isOpen} handleClose={handleClose}>
            {noteTitles}
          </Drawer>
          <div className='hidden sm:block border-r-2 border-zinc-300 bg-zinc-50'>
              <div className='p-2'>
                  <h2 className='px-4 text-2xl mb-4'>Your notes</h2>
                  <hr className='w-3/4 mb-2 mx-auto border-t-2 border-t-amber-300' />
              </div>
            {noteTitles}
          </div>
      </>
  );
};

export default Sidebar;
