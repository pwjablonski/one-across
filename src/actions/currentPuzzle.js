import { createAction } from "redux-actions";

export default createAction("SET_CURRENT_PUZZLE", puzzle => ({
  puzzle
}));
