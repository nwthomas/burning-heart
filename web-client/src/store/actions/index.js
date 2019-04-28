import axios from "axios";
import {
  MOVE_SIGNUP_FORM_FORWARD,
  MOVE_SIGNUP_FORM_BACKWARD,
  UPDATE_SIGNUP_FORM,
  UPDATE_DONOR_FORM,
  CREATE_NEW_ACCOUNT_START,
  CREATE_NEW_ACCOUNT_SUCCESS,
  CREATE_NEW_ACCOUNT_ERROR,
  CLOSE_SIGNUP_MODAL,
  UPDATE_LOGIN_FORM,
  LOGIN_APP_START,
  LOGIN_APP_SUCCESS,
  LOGIN_APP_ERROR
} from "../types";

//============================================================== Signup Action Creators
export const createDonorAccount = userDetails => dispatch => {
  dispatch({ type: CREATE_NEW_ACCOUNT_START });
  console.log(userDetails);
  axios
    .post("https://burning-heart.herokuapp.com/api/auth/register", userDetails)
    .then(res => {
      console.log(res.data);
      dispatch({ type: CREATE_NEW_ACCOUNT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: CREATE_NEW_ACCOUNT_ERROR, payload: err });
    });
};

export const handleSignupFormChanges = (name, value) => {
  return {
    type: UPDATE_SIGNUP_FORM,
    payload: { name, value }
  };
};

export const handleDonorFormChanges = (name, value) => {
  return {
    type: UPDATE_DONOR_FORM,
    payload: { name, value }
  };
};

export const nextSignupPage = () => {
  return {
    type: MOVE_SIGNUP_FORM_FORWARD
  };
};

export const previousSignupPage = () => {
  return {
    type: MOVE_SIGNUP_FORM_BACKWARD
  };
};

export const closeSignUpModal = () => {
  return {
    type: CLOSE_SIGNUP_MODAL
  };
};

//============================================================== Login Action Creators
export const loginApp = creds => dispatch => {
  dispatch({ type: LOGIN_APP_START });
  axios
    .post("https://burning-heart.herokuapp.com/api/auth/login", creds)
    .then(res => {
      dispatch({ type: LOGIN_APP_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: LOGIN_APP_ERROR, payload: err });
    });
};

export const handleLoginForm = (name, value) => {
  return {
    type: UPDATE_LOGIN_FORM,
    payload: { name, value }
  };
};
