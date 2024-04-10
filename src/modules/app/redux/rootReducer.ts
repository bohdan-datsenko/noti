import {combineReducers} from '@reduxjs/toolkit';
import {noteReducer} from '../../notes';
import {alertReducer} from '../../alerts';
import {errorReducer} from './errorSlice';
import notesApi from '../../notes/api/notesApi';

export const rootReducer = combineReducers({
  alertReducer: alertReducer,
  noteReducer: noteReducer,
  errorReducer: errorReducer,
  [notesApi.reducerPath]: notesApi.reducer,
});