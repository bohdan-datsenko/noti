import React from 'react';
import ReactDOM from 'react-dom/client';
import {NotesPage} from './pages/NotesPage';
import {Provider} from 'react-redux';
import {setupStore} from "./modules/app";

import './main.css';

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <NotesPage />
    </Provider>
  </React.StrictMode>
);
