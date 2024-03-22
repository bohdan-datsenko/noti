import React, {useState} from 'react';
import '../../src/styles/main.css'
import Layout from "./layout/Layout";
import NotePage from "./NotePage";
import Sidebar from "./layout/sidebar/Sidebar";
import {INote} from '../types/notes';
import {useTypedSelector} from '../hooks/useTypedSelector';
import {useActions} from '../hooks/useActions';

function App() {
  const {selectNote} = useActions();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const notes = useTypedSelector(state => state.noteReducer.notes);
  const selectedId = useTypedSelector(state => state.noteReducer.selectedId);

  const selectedNote: INote | undefined = notes.find(note => note.id === selectedId);

  const selectNoteHandler = (id: number) => {
    selectNote(id);
    setIsMenuOpen(false);
  }

  return (
    <div className="container md:w-11/12 lg:w-3/4 mx-auto text-zinc-700">
      <Layout handleOpenMenu={() => setIsMenuOpen(true)}>
        <Sidebar items={notes}
                 isOpen={isMenuOpen}
                 handleClose={() => setIsMenuOpen(false)}
                 handleSelect={selectNoteHandler}
        />
        <NotePage note={selectedNote} />
      </Layout>
    </div>
  );
}

export default App;
