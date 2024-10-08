import {createAppAsyncThunk} from '../../app/redux/store';
import {addAlert} from './slice';
import {Severity} from '../utils/utils';

interface generateAlertPayload {
  id?: string;
  time?: number;
  message: string;
  severity: Severity;
}
// todo disable toolbar if notes not loaded
export const generateAlert = createAppAsyncThunk(
  'alerts/generateAlert',
  (data: generateAlertPayload, {dispatch}) => {
    dispatch(
      addAlert({
        id: data.id ?? 'default',
        time: data.time ?? 3000,
        message: data.message,
        severity: data.severity
      })
    );
  }
);