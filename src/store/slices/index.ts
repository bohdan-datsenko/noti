import {combineReducers} from '@reduxjs/toolkit';
import {noteReducer} from './noteSlice';

export const rootReducer = combineReducers({
  noteReducer: noteReducer,
});