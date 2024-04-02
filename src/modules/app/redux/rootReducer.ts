import {combineReducers} from '@reduxjs/toolkit';
import {noteReducer} from '../../notes';

export const rootReducer = combineReducers({
  noteReducer: noteReducer,
});