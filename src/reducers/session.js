import produce from "immer";
import { handleActions } from "redux-actions";
import {
  // pauseTimer,
  // unpauseTimer,
  // incrementTimer,
  // updateFill,
  // clearPuzzle,
  setCurrentSessionId,
  setSessionData,
  resetSessionData
} from "../actions";

const fill = [];
for (let i = 0; i < 225; i += 1) {
  fill.push("");
}

const initialState = {
  currentSessionId: null,
  fill,
  puzzleId: null
  // timerValue: 0,
  // isTimerPaused: false,
  // pausedGameModalIsOpen: false,
};
/* eslint-disable no-param-reassign */
export default handleActions(
  {
    [setSessionData]: (state, { payload: { sessionData } }) =>
      produce(state, draft => {
        draft.currentSessionId = sessionData.currentSessionId;
        draft.fill = sessionData.fill;
        draft.timerValue = sessionData.timerValue;
        draft.isTimerPaused = sessionData.isTimerPaused;
        draft.puzzleId = sessionData.puzzleId;
      }),

    [setCurrentSessionId]: (state, { payload: { id } }) =>
      produce(state, draft => {
        draft.currentSessionId = id;
      }),

    [resetSessionData]: state =>
      produce(state, draft => {
        draft = initialState;
        return draft;
      })

    // [pauseTimer]: (state,
    //   ) => produce(state, draft => {
    //       draft['isTimerPaused'] = true;
    //       draft['pausedGameModalIsOpen'] = true
    //     }
    //   ),

    // [unpauseTimer]: (state,
    //   ) => produce(state, draft => {
    //       draft['isTimerPaused'] = false;
    //       draft['pausedGameModalIsOpen'] = false
    //     }
    //   ),

    // [incrementTimer]: (state,
    //   ) => produce(state, draft => {
    //       draft['timerValue'] =  state['timerValue'] + 1000;
    //     }
    //   ),

    // [updateFill]: (state, {payload: {grid}},
    //   ) => produce(state, draft => {
    //       draft['fill'] =  grid;
    //     }
    //   ),

    // [clearPuzzle]: (state,
    //   ) => produce(state, draft => {
    //       draft['fill'] = [];
    //     }
    //   ),
  },
  initialState
);
