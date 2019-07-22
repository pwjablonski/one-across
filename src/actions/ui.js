import { createAction } from "redux-actions";

export const updateCurrentCell = createAction("UPDATE_CURRENT_CELL", index => ({
  index
}));

export const keyInputted = createAction("KEY_INPUTTED", key => ({ key }));

export const updateHilightedCells = createAction(
  "UPDATE_HIGLIGHTED_CELLS",
  cells => ({ cells })
);

export const cellSelected = createAction("CELL_SELECTED", cell => ({ cell }));

export const updateCurrentClue = createAction("UPDATE_CURRENT_CLUE", clue => ({
  clue
}));

export const updateCurrentDirection = createAction(
  "UPDATE_CURRENT_DIRECTION",
  direction => ({ direction })
);

export const closePauseGameModal = createAction("CLOSE_PAUSE_GAME_MODAL");

export const revealPuzzle = createAction("REVEAL_PUZZLE");

export const puzzleLoadCompleted = createAction("PUZZLE_LOAD_COMPLETED");

export const clueListItemClicked = createAction(
  "CLUE_LIST_ITEM_CLICKED",
  (clue, direction) => ({ clue, direction })
);
