import axios from "axios";
import {
  HANDLE_SIGNUP_FORM_CHANGE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CLOSE_MODAL,
  CREATE_ACCOUNT_START,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_ERROR
} from "../types/index";

export const handleSignUpForm = (name, value, cb) => {
  return cb({
    type: HANDLE_SIGNUP_FORM_CHANGE,
    payload: { name, value }
  });
};

export const closeModal = cb => {
  return cb({ type: CLOSE_MODAL });
};

export const loginApp = async (username, password, cb) => {
  await cb({ type: LOGIN_START });
  const creds = { username, password };
  axios
    .post("http://localhost:8000/api/auth/login", creds)
    .then(res => {
      console.log(res);
      return cb({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      return cb({ type: LOGIN_ERROR, payload: err.message });
    });
};

export const createAccount = (userDetails, cb) => {
  cb({ type: CREATE_ACCOUNT_START });
  return axios
    .post("https://burning-heart.herokuapp.com/api/auth/register", userDetails)
    .then(res => {
      console.log(res);
      return cb({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      return cb({ type: LOGIN_ERROR, payload: err.message });
    });
};
