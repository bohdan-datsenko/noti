import React, {FC} from 'react';
import {Drawer} from "./Drawer";
import {NotesSelectList} from '../modules/notes/components/NotesSelectList';
import {useAppDispatch} from '../modules/app';
import {CreateButton} from "../modules/notes/components/CreateButton";
import PrimaryButton from "../ui/PrimaryButton";
import {handleAddDraft, handleRemove} from "../modules/notes";

interface SidebarProps {
    isOpen: boolean;
    handleClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({isOpen, handleClose}) => {
  const dispatch = useAppDispatch();

  const handleCreateDrawer = () => {
    dispatch(handleAddDraft());
    handleClose();
  };

  const actions = [
    <CreateButton handleCreate={handleCreateDrawer} />,
    <PrimaryButton handleClick={() => dispatch(handleRemove())}>Delete</PrimaryButton>
  ]

  return (
      <>
        <Drawer
          actions={actions}
          isOpen={isOpen} handleClose={handleClose}
        >
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
            {/*{get dispatch in func?}*/}
            <CreateButton handleCreate={() => dispatch(handleAddDraft())} />
          </div>
        </div>
      </>
  );
};

export default Sidebar;
