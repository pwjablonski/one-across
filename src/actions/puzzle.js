import {createAction} from 'redux-actions';

export const puzzleUploaded = createAction(
    'PUZZLE_UPLOADED',
    (file) => ({file})
);

export const puzzleComponentLoaded = createAction(
    'PUZZLE_COMPONENT_LOADED',
    (id) => ({id})
); 