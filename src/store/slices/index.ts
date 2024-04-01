import {combineReducers} from '@reduxjs/toolkit';
import {noteReducer} from './notes/noteSlice';

export const rootReducer = combineReducers({
  noteReducer: noteReducer,
});