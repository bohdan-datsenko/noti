import {createAppAsyncThunk} from '../hooks/redux';
import {generateAlert, Severity} from '../../alerts';

export const exhaustiveCheck = (param: never) => {};

export enum colors {
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  TRANSPARENT = 'TRANSPARENT',
  DELETE = 'DELETE',
  ERROR = 'ERROR',
}

// todo move to another file? const enum?
export const calculateColor = (color: colors) => {
  switch (color) {
    case colors.PRIMARY:
      return {color: 'bg-amber-300', hover: 'hover:bg-amber-400', disabled: 'disabled:bg-zinc-300'};
    case colors.SECONDARY:
      return {color: 'bg-amber-300', hover: 'hover:bg-amber-400', disabled: 'disabled:bg-zinc-300'};
    case colors.TRANSPARENT:
      return {color: 'bg-transparent', hover: 'hover:ring-1 hover:ring-white', disabled: 'disabled:bg-zinc-300'};
    case colors.ERROR:
    case colors.DELETE:
      return {color: 'bg-red-400', hover: 'hover:bg-red-500', disabled: 'disabled:bg-zinc-300'};
    default:
      exhaustiveCheck(color);
  }
}

interface HandleErrorPayload {
  message: string;
  path: string;
}

export const handleError = createAppAsyncThunk(
  'handleError',
  (data: HandleErrorPayload, {dispatch}) => {
    dispatch(generateAlert({id: data.path, time: 5000, message: data.message, severity: Severity.ERROR}));
  }
);
