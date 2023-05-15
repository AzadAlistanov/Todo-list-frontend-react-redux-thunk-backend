import {
  GET_TODOS, ADD_TODO, EDIT_TODO, TOGGLE_TODO, DELETE_TODO
} from '../../types';

export default function todoReducer (state=[], action) {
  switch (action.type) {

    case GET_TODOS: {
      return action.payload;
    }

    case ADD_TODO: {
      return [...state, action.payload];
    }
      
    case DELETE_TODO: {
      return [...state.filter((todo) => todo._id !== action.payload)];
    }

    case EDIT_TODO: {
      return [...state.map((todo) => 
        todo._id === action.payload.id ? {...todo, title: action.payload.title} : {...todo}
      )];
    }

    case TOGGLE_TODO: {
      return [...state.map((todo) => 
        todo._id === action.payload ? {...todo, complete: !todo.complete} : {...todo}
      )];
    }

    default: {
      return state
    }
  }
}
