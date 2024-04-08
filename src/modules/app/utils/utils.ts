import {generateAlert, Severity} from '../../alerts';
import {createAppAsyncThunk} from '../redux/store';

export enum colors {
  PRIMARY = 'PRIMARY',
  TRANSPARENT = 'TRANSPARENT',
  ERROR = 'ERROR',
}

type Color = { color: string, hover: string, disabled: string};

// todo move to another file? const enum?
export const calculateColor = (color: colors): Color => {
  switch (color) {
    case colors.PRIMARY:
      return {color: 'bg-amber-300', hover: 'hover:bg-amber-400', disabled: 'disabled:bg-zinc-300'};
    case colors.TRANSPARENT:
      return {color: 'bg-transparent', hover: 'hover:ring-1 hover:ring-white', disabled: 'disabled:bg-zinc-300'};
    case colors.ERROR:
      return {color: 'bg-red-400', hover: 'hover:bg-red-500', disabled: 'disabled:bg-zinc-300'};
  }
}

interface HandleErrorPayload {
  message: string;
  path: string;
}

export const handleError = createAppAsyncThunk(
  'app/handleError',
  (data: HandleErrorPayload, {dispatch}) => {
    dispatch(generateAlert({id: data.path, time: 5000, message: data.message, severity: Severity.ERROR}));
  }
);
