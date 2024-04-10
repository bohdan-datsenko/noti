export {rootReducer} from './redux/rootReducer';
export {setupStore} from './redux/store'
export {useAppDispatch, useAppSelector} from './hooks/redux'
export {useKeyboardShortcut} from './hooks/useKeyboardShortcut';
export {useHandleErrors} from './hooks/useHandleErrors'; // todo move to hooks/index.ts
export {handleError, colors, calculateColor} from './utils/utils'

export type {AppDispatch, RootState} from './redux/store';
export type {ActionWithMetadata} from './types/types';