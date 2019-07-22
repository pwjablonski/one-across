import { createLogic } from "redux-logic";
import {
  updateCurrentCell,
  updateCurrentClue,
  updateCurrentDirection,
  updateHilightedCells
} from "../actions";
import {
  getCurrentCell,
  getCurrentPuzzleGrid,
  getCurrentPuzzleGridNums,
  getCurrentDirection
} from "../selectors";

import findClueAndHilightedCells from "../util/findClueAndHilightedCells";

export default createLogic({
  type: "CELL_SELECTED",
  async process(
    {
      getState,
      action: {
        payload: { cell }
      }
    },
    dispatch,
    done
  ) {
    const state = getState();
    const grid = getCurrentPuzzleGrid(state);
    const gridnums = getCurrentPuzzleGridNums(state);
    const currentCell = getCurrentCell(state);
    const currentDirection = getCurrentDirection(state);

    if (currentCell === cell) {
      if (currentDirection === "across") {
        dispatch(updateCurrentDirection("down"));
        const { newClue, newHilightedCells } = findClueAndHilightedCells(
          "down",
          cell,
          grid,
          gridnums
        );
        dispatch(updateCurrentClue(newClue));
        dispatch(updateHilightedCells(newHilightedCells));
      } else if (currentDirection === "down") {
        dispatch(updateCurrentDirection("across"));
        const { newClue, newHilightedCells } = findClueAndHilightedCells(
          "across",
          cell,
          grid,
          gridnums
        );
        dispatch(updateCurrentClue(newClue));
        dispatch(updateHilightedCells(newHilightedCells));
      }
    } else {
      dispatch(updateCurrentCell(cell));
      const { newClue, newHilightedCells } = findClueAndHilightedCells(
        currentDirection,
        cell,
        grid,
        gridnums
      );
      dispatch(updateCurrentClue(newClue));
      dispatch(updateHilightedCells(newHilightedCells));
    }
    done();
  }
});
