import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IError} from '../types/types';

const errorSlice = createSlice({
  name: 'errors',
  initialState: {
    errors: [] as IError[]
  },
  reducers: {
    addError: (state, action: PayloadAction<IError>) => {
      const existingError = state.errors
        .find((e) => e.path === action.payload.path);
      if (!existingError) {
        state.errors.push(action.payload);
      }
    },
    removeError: (state, action) => {
      state.errors = state.errors.filter(({path}) => path !== action.payload);
    }
  },
});

export const {
  addError,
  removeError
} = errorSlice.actions;
export const errorReducer = errorSlice.reducer;