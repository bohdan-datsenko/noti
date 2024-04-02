import {rootReducer} from './redux/rootReducer';
import {setupStore} from './redux/store'
import {useAppDispatch, useAppSelector} from './hooks/redux'

export {
  rootReducer,
  setupStore,
  useAppDispatch,
  useAppSelector,
};

export type {AppDispatch} from './redux/store';
