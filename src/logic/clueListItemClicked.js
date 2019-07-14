import {createLogic} from 'redux-logic';
import {
  updateCurrentCell,
  updateCurrentClue,
  updateCurrentDirection,
  updateHilightedCells,
} from '../actions';
import { 
  getCurrentPuzzleGrid, 
  getCurrentPuzzleGridNums,
} from '../selectors';

import findClueAndHilightedCells from '../util/findClueAndHilightedCells'
import findCellFromClue from '../util/findCellFromClue'

export default createLogic({
  type: 'CLUE_LIST_ITEM_CLICKED',
  async process({getState, action:{payload: {clue, direction}}}, dispatch, done) {
    const state = getState();
    let grid = getCurrentPuzzleGrid(state)
    let gridnums = getCurrentPuzzleGridNums(state)
    let newCell = findCellFromClue(clue, gridnums);
    dispatch(updateCurrentDirection(direction))
    dispatch(updateCurrentCell(newCell))
    const {newClue, newHilightedCells} = findClueAndHilightedCells(direction, newCell, grid, gridnums);
    dispatch(updateCurrentClue(newClue))
    dispatch(updateHilightedCells(newHilightedCells))
    done();
  },
});