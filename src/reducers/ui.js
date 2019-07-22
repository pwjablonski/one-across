import produce from "immer";
import { handleActions } from "redux-actions";
import {
  updateCurrentCell,
  updateCurrentClue,
  updateHilightedCells,
  updateCurrentDirection,
  puzzleLoadCompleted
} from "../actions";

const initialState = {
  currentCell: 0,
  currentDirection: "across",
  currentClue: 1,
  hilightedCells: [],
  timerValue: 0,
  isTimerPaused: false,
  pausedGameModalIsOpen: false,
  winnerModalIsOpen: false,
  currentPuzzleIsSet: false,
  puzzleLoaded: false
};

/* eslint-disable no-param-reassign */
export default handleActions(
  {
    [updateCurrentCell]: (state, { payload: { index } }) =>
      produce(state, draft => {
        draft.currentCell = index;
      }),

    [updateCurrentClue]: (state, { payload: { clue } }) =>
      produce(state, draft => {
        draft.currentClue = clue;
      }),

    [updateHilightedCells]: (state, { payload: { cells } }) =>
      produce(state, draft => {
        draft.hilightedCells = cells;
      }),

    [updateCurrentDirection]: (state, { payload: { direction } }) =>
      produce(state, draft => {
        draft.currentDirection = direction;
      }),

    [puzzleLoadCompleted]: state =>
      produce(state, draft => {
        draft.puzzleLoaded = true;
      })
  },
  initialState
);
