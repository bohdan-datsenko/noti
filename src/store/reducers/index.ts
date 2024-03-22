import {combineReducers} from '@reduxjs/toolkit';
import {noteReducer} from './noteReducer';

export const rootReducer = combineReducers({
  noteReducer: noteReducer
});