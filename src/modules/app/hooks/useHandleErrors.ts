import {useAppDispatch, useAppSelector} from './redux';
import {handleError} from '../utils/utils';
import {removeError} from '../redux/errorSlice';

// make alerts as hook?
export const useHandleErrors = () => {
  const dispatch = useAppDispatch();
  const errors = useAppSelector((state) => state.errorReducer.errors);

  if (errors.length) {
    errors.forEach((error) => {
      dispatch(handleError({path: error.path, message: error.message}));
      dispatch(removeError(error.path));
    });
  }
}