import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAlert} from '../types/types';

const slice = createSlice({
  name: 'alerts',
  initialState: {
    alerts: [] as IAlert[]
  },
  reducers: {
    addAlert: (state, action: PayloadAction<IAlert>) => {
      const existingAlert = state.alerts.find((a) => a.id === action.payload.id);
      if (!existingAlert) {
        state.alerts.push({...action.payload});
      }
    },
    removeAlert: (state, action) => {
      state.alerts = state.alerts.filter((alert) => alert.id !== action.payload)
    }
  }
})

export const {
  addAlert,
  removeAlert
} = slice.actions
export const alertReducer = slice.reducer;