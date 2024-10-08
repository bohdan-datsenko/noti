export {generateAlert} from './redux/thunks'
export {alertReducer, addAlert, removeAlert} from './redux/slice'
export {Severity, calcSeverityColor} from './utils/utils'

export type {IAlert} from './types/types';

export {default} from './components/AlertProvider';