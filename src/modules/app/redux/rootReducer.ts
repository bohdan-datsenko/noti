import {combineReducers} from '@reduxjs/toolkit';
import {noteReducer} from '../../notes';
import {alertReducer} from '../../alerts';
import {errorReducer} from './errorSlice';

export const rootReducer = combineReducers({
  alertReducer: alertReducer,
  noteReducer: noteReducer,
  errorReducer: errorReducer
});