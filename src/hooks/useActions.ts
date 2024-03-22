import {bindActionCreators} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import * as NoteActions from '../store/action-creators/notes';

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(NoteActions, dispatch);
}