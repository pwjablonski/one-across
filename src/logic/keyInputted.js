import { createLogic } from "redux-logic";
import {
  updateCurrentCell,
  updateCharacter,
  updateHilightedCells,
  updateCurrentClue,
  updateCurrentDirection
} from "../actions";
import {
  getCurrentCell,
  getCurrentPuzzleGrid,
  getCurrentPuzzleGridNums,
  getCurrentDirection
} from "../selectors";

import findClueAndHilightedCells from "../util/findClueAndHilightedCells";
import findNewCurrentCell from "../util/findNewCurrentCell";
import findNextClueStartingCell from "../util/findNextClueStartingCell";

export default createLogic({
  type: "KEY_INPUTTED",
  async process(
    {
      getState,
      action: {
        payload: { key }
      }
    },
    dispatch,
    done
  ) {
    const state = getState();
    const grid = getCurrentPuzzleGrid(state);
    const gridnums = getCurrentPuzzleGridNums(state);
    const currentDirection = getCurrentDirection(state);
    const currentCell = getCurrentCell(state);

    switch (key) {
      case "ArrowDown":
      case "ArrowUp":
        if (currentDirection === "across") {
          dispatch(updateCurrentDirection("down"));
          const { newClue, newHilightedCells } = findClueAndHilightedCells(
            "down",
            currentCell,
            grid,
            gridnums
          );
          dispatch(updateCurrentClue(newClue));
          dispatch(updateHilightedCells(newHilightedCells));
        } else {
          const newCurrentCell = findNewCurrentCell(grid, currentCell, key);
          dispatch(updateCurrentCell(newCurrentCell));
          const { newClue, newHilightedCells } = findClueAndHilightedCells(
            currentDirection,
            newCurrentCell,
            grid,
            gridnums
          );
          dispatch(updateCurrentClue(newClue));
          dispatch(updateHilightedCells(newHilightedCells));
        }
        break;
      case "ArrowRight":
      case "ArrowLeft":
        if (currentDirection === "down") {
          dispatch(updateCurrentDirection("across"));
          const { newClue, newHilightedCells } = findClueAndHilightedCells(
            "across",
            currentCell,
            grid,
            gridnums
          );
          dispatch(updateCurrentClue(newClue));
          dispatch(updateHilightedCells(newHilightedCells));
        } else {
          const newCurrentCell = findNewCurrentCell(grid, currentCell, key);
          dispatch(updateCurrentCell(newCurrentCell));
          const { newClue, newHilightedCells } = findClueAndHilightedCells(
            currentDirection,
            newCurrentCell,
            grid,
            gridnums
          );
          dispatch(updateCurrentClue(newClue));
          dispatch(updateHilightedCells(newHilightedCells));
        }
        break;
      case "Backspace": {
        dispatch(updateCharacter("", currentCell));
        let newCurrentCell;
        if (currentDirection === "across") {
          newCurrentCell = findNewCurrentCell(grid, currentCell, "ArrowLeft");
        } else if (currentDirection === "down") {
          newCurrentCell = findNewCurrentCell(grid, currentCell, "ArrowUp");
        }
        dispatch(updateCurrentCell(newCurrentCell));
        const { newClue, newHilightedCells } = findClueAndHilightedCells(
          currentDirection,
          newCurrentCell,
          grid,
          gridnums
        );
        dispatch(updateCurrentClue(newClue));
        dispatch(updateHilightedCells(newHilightedCells));
        break;
      }
      case " ": {
        dispatch(updateCharacter("", currentCell));
        let newCurrentCell;
        if (currentDirection === "across") {
          newCurrentCell = findNewCurrentCell(grid, currentCell, "ArrowRight");
        } else if (currentDirection === "down") {
          newCurrentCell = findNewCurrentCell(grid, currentCell, "ArrowDown");
        }
        dispatch(updateCurrentCell(newCurrentCell));
        const { newClue, newHilightedCells } = findClueAndHilightedCells(
          currentDirection,
          newCurrentCell,
          grid,
          gridnums
        );
        dispatch(updateCurrentClue(newClue));
        dispatch(updateHilightedCells(newHilightedCells));
        break;
      }
      case "Enter":
      case "Tab": {
        const newCurrentCell = findNextClueStartingCell(
          currentCell,
          currentDirection,
          grid
        );
        dispatch(updateCurrentCell(newCurrentCell));
        const { newClue, newHilightedCells } = findClueAndHilightedCells(
          currentDirection,
          newCurrentCell,
          grid,
          gridnums
        );
        dispatch(updateCurrentClue(newClue));
        dispatch(updateHilightedCells(newHilightedCells));
        break;
      }
      case "Control":
      case "Alt":
      case "Meta":
      case "Escape":
      case "Shift": {
        break;
      }
      default: {
        const newCharacter = key.toUpperCase();
        dispatch(updateCharacter(newCharacter, currentCell));
        let newCurrentCell;
        if (currentDirection === "across") {
          newCurrentCell = findNewCurrentCell(grid, currentCell, "ArrowRight");
        } else if (currentDirection === "down") {
          newCurrentCell = findNewCurrentCell(grid, currentCell, "ArrowDown");
        }
        dispatch(updateCurrentCell(newCurrentCell));
        const { newClue, newHilightedCells } = findClueAndHilightedCells(
          currentDirection,
          newCurrentCell,
          grid,
          gridnums
        );
        dispatch(updateCurrentClue(newClue));
        dispatch(updateHilightedCells(newHilightedCells));
        break;
      }
    }
    done();
  }
});
