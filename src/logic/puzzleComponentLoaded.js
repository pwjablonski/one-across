import {createLogic} from 'redux-logic';
import {
  setSessionData, 
  resetSessionData,
  setCurrentPuzzle, 
  updateHilightedCells,
  initializeSessionListener,
  displayPuzzle,
  hidePuzzle
} from '../actions'
import {getSessionData, getPuzzleData} from '../clients/firebase'
import findClueAndHilightedCells from '../util/findClueAndHilightedCells'

export default createLogic({
  type: 'PUZZLE_COMPONENT_LOADED',
  async process({action}, dispatch, done) {
    const session = await getSessionData(action.payload.id);
    if(session.data()){
      dispatch(setSessionData(session.data()));
      const puzzle = await getPuzzleData(session.data().puzzleId);
      dispatch(setCurrentPuzzle(puzzle.data()));
      dispatch(initializeSessionListener(action.payload.id))
      const {newHilightedCells} = findClueAndHilightedCells("across", 0, puzzle.data().grid, puzzle.data().gridnums);
      dispatch(updateHilightedCells(newHilightedCells))
      dispatch(displayPuzzle());
    } 
    else {
      dispatch(resetSessionData());
      dispatch(hidePuzzle());
    }

    done();
  },
});