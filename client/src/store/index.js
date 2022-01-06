import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoReducer from './reducers/todos';
import authReducer from './reducers/auth';


const initialState = {
  todos: todoReducer,
  auth: authReducer
}

export default createStore(combineReducers(initialState), compose(applyMiddleware(thunk)))
