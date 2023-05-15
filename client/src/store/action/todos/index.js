import axios from "axios";
import { setHeaders } from "../../api";

import {
  GET_TODOS, ADD_TODO, EDIT_TODO, TOGGLE_TODO, DELETE_TODO
} from '../../types';

export const getTodos = () => {
  return (dispatch) => {
    axios.get('http://localhost:3300/todos', setHeaders())
    .then((res) => {
      dispatch({
        type: GET_TODOS, 
        payload: res.data,
      })
    });
  }
};

export const addTodo = (value) => {
  return (dispatch, getState) => {
    const uid = getState().auth._id;
    axios.post('http://localhost:3300/todos/addtodo', {title: value, complete: false, uid}, setHeaders())
    .then((res) => {
      dispatch({
        type: ADD_TODO, 
        payload: res.data,
      })
    });
  }
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:3300/todos/deletetodo/${id}`, setHeaders())
    .then((res) => {
      dispatch({
        type: DELETE_TODO,
        payload: res.data._id,
      })
    })
  }
};

export const toggleTodo = (id) => {
  return (dispatch) => {
    axios.patch(`http://localhost:3300/todos/toggletodo/${id}`, {}, setHeaders())
    .then((res) => {
      dispatch({
        type: TOGGLE_TODO,
        payload: res.data._id,
      })
    })
  }
};

export const editTodo = (id, title, todo) => {
  return (dispatch, getState) => {
    const uid = getState().auth._id;
    axios.put(`http://localhost:3300/todos/editTodo/${id}`, {title: title, uid, complete: todo.complete}, setHeaders())
    .then((res) => {
      dispatch({
        type: EDIT_TODO,
        payload: { id: res.data._id, title: res.data.title }
      })
    })
  }
};
