import React, {FC} from 'react';
import {Drawer} from "../../ui/Drawer";
import {NotesSelectList} from '../../NotesSelectList';
import {useAppDispatch} from '../../../hooks/redux';
import {addDraftNote} from '../../../store/slices/notes/noteSlice';

interface SidebarProps {
    isOpen: boolean;
    handleClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({isOpen, handleClose}) => {
  const dispatch = useAppDispatch();
  const handleCreate = () => {
    dispatch(addDraftNote({title: '', text: ''}));
  };

  const handleCreateDrawer = () => {
    handleCreate();
    handleClose();
  };

  const createButton =
    <button onClick={handleCreate} className='mx-auto w-full px-4 py-2 bg-amber-300 text-white rounded uppercase transition-colors
                      hover:bg-amber-400'>
      Create
    </button>;

  const createButtonDrawer =
    <button onClick={handleCreateDrawer} className='mx-auto w-full px-4 py-2 bg-amber-300 text-white rounded uppercase transition-colors
                      hover:bg-amber-400'>
      Create
    </button>;
  return (
      <>
        <Drawer actions={[createButtonDrawer]} isOpen={isOpen} handleClose={handleClose}>
          <NotesSelectList handleClose={handleClose} />
        </Drawer>
        <div className='hidden overflow-hidden sm:flex sm:flex-col border-r-2 border-zinc-300 bg-zinc-50'>
          <div className='p-2'>
            <div className='flex justify-between items-center'>
              <h2 className='px-4 text-2xl mb-4'>Your notes</h2>
            </div>
            <hr className='w-3/4 mb-2 mx-auto border-t-2 border-t-zinc-300' />
          </div>
          <NotesSelectList handleClose={handleClose} />
          <div className='mb-2 w-11/12 mx-auto'>
            {createButton}
          </div>
        </div>
      </>
  );
};

export default Sidebar;
