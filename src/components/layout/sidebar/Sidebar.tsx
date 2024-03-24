import React, {FC} from 'react';
import {Drawer} from "../../ui/Drawer";
import {INote} from '../../../types/notes';
import {BiSolidTrash} from 'react-icons/bi';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {removeNote, selectNote} from '../../../store/slices/noteSlice';
import IconButton from '../../ui/IconButton';

interface SidebarProps {
    items: INote[];
    isOpen: boolean;
    handleClose: () => void;
    handleSelect: (id: number) => void;
    action?: React.ReactNode;
}

const Sidebar: FC<SidebarProps> = ({items, isOpen, handleClose, handleSelect, action}) => {
  const dispatch = useAppDispatch();
  const selectedId = useAppSelector(state => state.noteReducer.selectedId);

  const handleRemove = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    dispatch(removeNote(id));
    if(selectedId === id) {
      dispatch(selectNote(-1));
    }
  }

  const menuItemButton = (id: number, value: string) =>
    <IconButton handleClick={() => handleSelect(id)}
                value={value !== '' ? value : 'untitled'}
                isSelected={id === selectedId}
                secondaryButton={{
                  handleClick: (e) => handleRemove(e, id)
                }}
    >
      <BiSolidTrash size={28} className='p-1 rounded hover:bg-red-600 hover:fill-white' />
    </IconButton>;

  const noteTitles = <ul>
    {items.map((item) => (
      <li key={item.id} className='flex justify-center'>
        {menuItemButton(item.id, item.title)}
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
                  <div className='flex justify-between items-center'>
                    <h2 className='px-4 text-2xl mb-4'>Your notes</h2>
                    {action}
                  </div>

                <hr className='w-3/4 mb-2 mx-auto border-t-2 border-t-zinc-300' />
              </div>
            {noteTitles}
          </div>
      </>
  );
};

export default Sidebar;
