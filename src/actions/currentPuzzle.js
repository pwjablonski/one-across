import { createAction } from "redux-actions";

export const setCurrentPuzzle = createAction("SET_CURRENT_PUZZLE", puzzle => ({
  puzzle
}));
