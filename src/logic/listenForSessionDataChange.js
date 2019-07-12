import {createLogic} from 'redux-logic';
import {listenForSessionDataChange} from '../clients/firebase'
import {setSessionData} from '../actions'
// import {loadDatabase} from '../clients/firebase'

export default createLogic({
  type: 'INITIALIZE_SESSION_LISTENER',
  warnTimeout: 0,
  async process({getState, action}, dispatch, done) {   
    listenForSessionDataChange(action.payload.id, dispatch, setSessionData);
  },
});