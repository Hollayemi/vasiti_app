import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Reducer from './reducers';

const middlewareEnhancer = applyMiddleware(thunkMiddleware);

const Store = createStore(Reducer, middlewareEnhancer);

export default Store;
