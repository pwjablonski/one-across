import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import {createLogicMiddleware} from 'redux-logic';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootLogic from './logic';

  
export default function createApplicationStore() {
    const logicMiddleware = createLogicMiddleware(rootLogic);
    const logicEnhancer = applyMiddleware(logicMiddleware);
    const store = createStore(reducers, composeWithDevTools(logicEnhancer));
    return store;
}