import React, {useState} from 'react';
import '../../src/styles/main.css'
import Layout from "./layout/Layout";
import NotePage from "./NotePage";
import Sidebar from "./layout/sidebar/Sidebar";
import {INote} from '../types/notes';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {addNote, selectNote} from '../store/slices/noteSlice';
import {PiPlus} from 'react-icons/pi';

function App() {
  const dispatch = useAppDispatch();
  const notes = useAppSelector(state => state.noteReducer.notes);
  const selectedId = useAppSelector(state => state.noteReducer.selectedId);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const selectedNote: INote | undefined = notes.find(note => note.id === selectedId);

  const selectHandler = (id: number) => {
    dispatch(selectNote(id));
    setIsMenuOpen(false);
  }

  const handleCreate = async () => {
    dispatch(addNote({title: '', text: ''}));
  };

  const createButton = <button onClick={handleCreate}
                               className='rounded-full box-border p-1 text-white bg-amber-300 transition-colors
                                         hover:scale-105 hover:bg-amber-400
                                         active:scale-110'>
    <PiPlus size={28} />
  </button>;

  return (
    <div className="container md:w-11/12 lg:w-3/4 mx-auto text-zinc-700">
      <Layout handleOpenMenu={() => setIsMenuOpen(true)}>
        <Sidebar items={notes}
                 isOpen={isMenuOpen}
                 handleClose={() => setIsMenuOpen(false)}
                 handleSelect={selectHandler}
                 action={createButton}
        />
        <NotePage note={selectedNote} />
      </Layout>
    </div>
  );
}

export default App;
