import { createLogic } from "redux-logic";
import shortid from "shortid";
import {
  setCurrentPuzzle,
  setSessionData,
  puzzleLoadCompleted
} from "../actions";
import { createPuzzle, createPuzzleSession } from "../clients/firebase";
import convertPuzToJson from "../util/convertPuzToJson";
import history from "../util/history";

export default createLogic({
  type: "PUZZLE_UPLOADED",
  async process({ getState, action }, dispatch, done) {
    const state = getState();

    const puzzle = await convertPuzToJson(action.payload.file);

    const puzzleResult = await createPuzzle(puzzle);
    const { session } = state;
    session.puzzleId = puzzleResult.id;
    session.currentSessionId = shortid.generate();
    await createPuzzleSession(session);
    dispatch(setCurrentPuzzle(puzzle));
    dispatch(setSessionData(session));

    dispatch(puzzleLoadCompleted());
    history.push(`${session.currentSessionId}`);

    done();
  }
});
