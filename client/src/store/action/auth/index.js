import axios from 'axios';

import {
  SIGN_UP, SIGN_IN, SIGN_OUT, USER_LOADED
} from '../../types';

export const signUp = (user) => {
  return (dispatch) => {
    axios
      .post('http://localhost:3300/auth/signup', user)
      .then((token) => {
        localStorage.setItem('token', token.data);
        dispatch({
          type: SIGN_UP,
          token: token.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const signIn = (email, password) => {
  return (dispatch) => {
    axios
      .post('http://localhost:3300/auth//signin', { email, password })
      .then((token) => {
        localStorage.setItem('token', token.data);

        dispatch({
          type: SIGN_IN,
          token: token.data,
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
};

export const signOut = () => {
  return (dispatch) => {
    dispatch({
      type: SIGN_OUT,
    });

  };
};

export const loadUser = () => {
  return (dispatch, getState) => {
    const token = getState().auth.token;
    if (token) {
      dispatch({
        type: USER_LOADED,
        token,
      });
    } else return null;
  };
};
