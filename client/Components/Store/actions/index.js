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
  HANDLE_LOGIN_FORM_CHANGE,
  SET_BIOMETRY_TYPE
} from "../types/index";

// Sets either FaceID/TouchID/other
export const setBiometryType = (biometryType, cb) => {
  return cb({
    type: SET_BIOMETRY_TYPE,
    payload: biometryType
  });
};

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
export const loginApp = (username, password, cb) => {
  cb({ type: LOGIN_START });
  const creds = { username, password };
  axios
    .post("https://burning-heart.herokuapp.com/api/auth/login", creds)
    .then(res => {
      console.log(res);
      if (res.data.error) {
        return cb({ type: LOGIN_ERROR, payload: res.data.message });
      } else {
        return cb({ type: LOGIN_SUCCESS, payload: res.data });
      }
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
      if (res.data.error) {
        return cb({ type: CREATE_ACCOUNT_ERROR, payload: res.data.message });
      } else {
        return cb({ type: CREATE_ACCOUNT_SUCCESS, payload: res.data });
      }
    })
    .catch(err => {
      return cb({
        type: CREATE_ACCOUNT_ERROR,
        payload: err.response.data.message
      });
    });
};
