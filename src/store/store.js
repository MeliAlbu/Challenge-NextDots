import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//import { composeWithDevTools } from 'remote-redux-devtools';
import reducers from './reducers';

//const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
const store = createStore(reducers, applyMiddleware(thunk));
export default store;