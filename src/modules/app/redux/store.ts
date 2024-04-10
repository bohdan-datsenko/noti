import {configureStore, createAsyncThunk} from '@reduxjs/toolkit';
import {rootReducer} from './rootReducer';
import notesApi from '../../notes/api/notesApi';

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(notesApi.middleware)
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export type ThunkApiConfig = {
  state: RootState
  dispatch: AppDispatch
};
export const createAppAsyncThunk = createAsyncThunk.withTypes<ThunkApiConfig>();