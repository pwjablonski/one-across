import { createLogic } from "redux-logic";
import { updateFill } from "../actions";

export default createLogic({
  type: "REVEAL_PUZZLE",
  async process({ getState }, dispatch, done) {
    const state = getState();
    const { grid } = state.currentPuzzle;
    dispatch(updateFill(grid));
    done();
  }
});
