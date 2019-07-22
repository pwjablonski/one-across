import { createLogic } from "redux-logic";
import { listenForSessionDataChange } from "../clients/firebase";
import { setSessionData } from "../actions";

export default createLogic({
  type: "INITIALIZE_SESSION_LISTENER",
  warnTimeout: 0,
  // eslint-disable-next-line no-unused-vars
  async process({ action }, dispatch, done) {
    listenForSessionDataChange(action.payload.id, dispatch, setSessionData);
  }
});
