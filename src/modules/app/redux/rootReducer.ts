import {combineReducers} from '@reduxjs/toolkit';
import {noteReducer} from '../../notes/redux/noteSlice';

export const rootReducer = combineReducers({
  noteReducer: noteReducer,
});