import {createLogic} from 'redux-logic';

import {
    setCurrentPuzzle,
    setSessionData,
    displayPuzzle,
} from '../actions'
import {
  createPuzzle,
  createPuzzleSession
} from '../clients/firebase'
import uuid from 'uuid/v4';
import convertPuzToJson from '../util/convertPuzToJson'


export default createLogic({
  type: 'PUZZLE_UPLOADED',
  async process({getState, action}, dispatch, done) {
    const state = getState();

    const puzzle = await convertPuzToJson(action.payload.file);

    const puzzleResult = await createPuzzle(puzzle)
    const session = state.session;
    session['puzzleId'] = puzzleResult.id
    session['currentSessionId'] = uuid().toString();
    await createPuzzleSession(session)
    dispatch(setCurrentPuzzle(puzzle))
    dispatch(setSessionData(session));

    dispatch(displayPuzzle());

    done();
  },
});