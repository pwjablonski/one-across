import produce from "immer";
import { handleActions } from "redux-actions";
import { setCurrentPuzzle } from "../actions";

export default handleActions(
  {
    [setCurrentPuzzle]: (state, { payload: { puzzle } }) =>
      produce(state, draft => {
        draft = puzzle;
        return draft;
      })
  },
  {}
);
