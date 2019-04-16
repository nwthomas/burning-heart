import axios from "axios";
import {
  HANDLE_SIGNUP_FORM_CHANGE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CLOSE_MODAL,
  CREATE_ACCOUNT_START,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_ERROR,
  HANDLE_LOGIN_FORM_CHANGE
} from "../types/index";

// Signup form controlled input action creator
export const handleSignUpForm = (name, value, cb) => {
  return cb({
    type: HANDLE_SIGNUP_FORM_CHANGE,
    payload: { name, value }
  });
};

// Login form controlled input action creator
export const handleLoginForm = (name, value, cb) => {
  return cb({
    type: HANDLE_LOGIN_FORM_CHANGE,
    payload: { name, value }
  });
};

// Close modal action creator
export const closeModal = cb => {
  return cb({ type: CLOSE_MODAL });
};

// Login application action creator
export const loginApp = async (username, password, cb) => {
  await cb({ type: LOGIN_START });
  const creds = { username, password };
  axios
    .post("http://localhost:8000/api/auth/login", creds)
    .then(res => {
      return cb({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      return cb({ type: LOGIN_ERROR, payload: err.response.data.message });
    });
};

// Also triggers the loading icon on the signup button when sending to server
export const createAccount = (userDetails, cb) => {
  cb({ type: CREATE_ACCOUNT_START });
  return axios
    .post("https://burning-heart.herokuapp.com/api/auth/register", userDetails)
    .then(res => {
      return cb({ type: CREATE_ACCOUNT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      return cb({
        type: CREATE_ACCOUNT_ERROR,
        payload: err.response.data.message
      });
    });
};
