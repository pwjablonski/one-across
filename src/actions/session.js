import {createAction} from 'redux-actions';

export const setCurrentSessionId = createAction(
    'SET_CURRENT_SESSION_ID',
    (id) => ({id}),
);

export const updateCharacter = createAction(
    'UPDATE_CHARACTER',
    (character, cell) => ({character, cell}),
);

export const pauseTimer = createAction(
    'PAUSE_TIMER',
);

export const unpauseTimer = createAction(
    'UNPAUSE_TIMER',
);

export const incrementTimer = createAction(
    'INCREMENT_TIMER',
);

export const updateFill = createAction(
    'UPDATE_FILL',
    (grid) => ({grid}),
);

export const clearPuzzle = createAction(
    'CLEAR_PUZZLE',
);

export const setSessionData = createAction(
    'SET_SESSION_DATA',
    (sessionData) => ({sessionData}),
);

export const resetSessionData = createAction(
    'RESET_SESSION_DATA',
);

export const initializeSessionListener = createAction(
    'INITIALIZE_SESSION_LISTENER',
    (id) => ({id})
);