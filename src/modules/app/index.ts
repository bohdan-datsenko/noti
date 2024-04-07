export {rootReducer} from './redux/rootReducer';
export {setupStore} from './redux/store'
export {useAppDispatch, useAppSelector} from './hooks/redux'
export {useKeyboardShortcut} from './hooks/useKeyboardShortcut';
export {exhaustiveCheck, handleError, colors, calculateColor} from './utils/utils'

export type {AppDispatch, RootState} from './redux/store';
export type {ActionWithMetadata} from './types/types';