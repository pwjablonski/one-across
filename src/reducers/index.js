import { combineReducers } from 'redux';

import currentPuzzle from './currentPuzzle';
import ui from './ui';
import session from './session'


const rootReducer = (state, action) => {
    return combineReducers({
        currentPuzzle,
        ui,
        session,
    })(state, action);
}

export default rootReducer;