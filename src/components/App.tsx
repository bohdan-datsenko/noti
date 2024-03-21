import React, {useState} from 'react';
import '../../src/styles/main.css'
import Layout from "./layout/Layout";
import NotePage from "./NotePage";
import Sidebar from "./layout/sidebar/Sidebar";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="container md:w-11/12 lg:w-3/4 mx-auto text-zinc-700">
      <Layout handleOpenMenu={() => setIsMenuOpen(true)}>
        <Sidebar items={['1', '2', '3']} isOpen={isMenuOpen} handleClose={() => setIsMenuOpen(false)} />
        <NotePage id={1} title={'title1'} text={'text1'} />
      </Layout>
    </div>
  );
}

export default App;
