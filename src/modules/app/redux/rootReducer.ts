import {combineReducers} from '@reduxjs/toolkit';
import {noteReducer} from '../../notes';
import {alertReducer} from '../../alerts/redux/slice';

export const rootReducer = combineReducers({
  alertReducer: alertReducer,
  noteReducer: noteReducer,
});