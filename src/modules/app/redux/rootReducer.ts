import {combineReducers} from '@reduxjs/toolkit';
import {noteReducer} from '../../notes';
import {alertReducer} from '../../alerts';

export const rootReducer = combineReducers({
  alertReducer: alertReducer,
  noteReducer: noteReducer,
});