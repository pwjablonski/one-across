import produce from "immer";
import { handleActions } from "redux-actions";
import { setCurrentPuzzle } from "../actions";

/* eslint-disable no-param-reassign */
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
