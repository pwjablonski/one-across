import { createLogic } from "redux-logic";
import { updateFill } from "../clients/firebase";

export default createLogic({
  type: "UPDATE_CHARACTER",
  async process(
    {
      getState,
      action: {
        payload: { cell, character }
      }
    },
    dispatch,
    done
  ) {
    const state = getState();
    const sessionId = state.session.currentSessionId;
    const fill = { ...state.session.fill };
    fill[cell] = character;
    await updateFill(sessionId, fill);
    done();
  }
});
