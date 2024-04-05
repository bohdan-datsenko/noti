import React from 'react';
import ReactDOM from 'react-dom/client';
import {NotesPage} from './pages/notesPage/NotesPage';
import {Provider} from 'react-redux';
import {setupStore} from "./modules/app";

import './main.css';
import AlertProvider from "./modules/alerts";

const store = setupStore();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <NotesPage />
      <AlertProvider />
    </Provider>
  </React.StrictMode>
);
