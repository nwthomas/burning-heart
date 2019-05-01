import axios from "axios";
import decode from "jwt-decode";
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
  LOGIN_APP_ERROR,
  CLOSE_LOGIN_MODAL,
  LOGOUT_APP,
  EXPIRED_CREDENTIALS,
  LOGIN_TOKEN_START,
  LOGIN_TOKEN_SUCCESS,
  LOGIN_TOKEN_ERROR,
  FETCH_USER_DONATIONS_START,
  FETCH_USER_DONATIONS_SUCCESS,
  FETCH_USER_DONATIONS_ERROR
} from "../types";

const restrictedError = "Not authorized. Please try logging in again.";

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
export const loginAccount = creds => dispatch => {
  dispatch({ type: LOGIN_APP_START });
  axios
    .post("https://burning-heart.herokuapp.com/api/auth/login", creds)
    .then(res => {
      dispatch({ type: LOGIN_APP_SUCCESS, payload: res.data });
    })
    .catch(err => {
      if (err.response.data.message === restrictedError) {
        dispatch({ type: EXPIRED_CREDENTIALS, payload: err }); // Move later for other API calls... Not relevant here, but preserving code
      } else {
        dispatch({ type: LOGIN_APP_ERROR, payload: err });
      }
    });
};

export const loginWithToken = _ => dispatch => {
  console.log("Working!");
  dispatch({ type: LOGIN_TOKEN_START });
  const token = localStorage.getItem("bhToken");
  let decodedToken = "";

  if (token) {
    decodedToken = decode(token);
  }

  console.log(decodedToken);

  const reqOptions = {
    headers: { authorization: token }
  };

  if (decodedToken.type === "donor") {
    axios
      .get(
        `https://burning-heart.herokuapp.com/api/restricted/accounts/${
          decodedToken.subject
        }`,
        reqOptions
      )
      .then(res => {
        dispatch({ type: LOGIN_TOKEN_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: LOGIN_TOKEN_ERROR, payload: err });
      });
  } else {
    // Finish
  }
};

export const handleLoginForm = (name, value) => {
  return {
    type: UPDATE_LOGIN_FORM,
    payload: { name, value }
  };
};

export const closeLoginModal = () => {
  return {
    type: CLOSE_LOGIN_MODAL
  };
};

export const logoutApp = () => {
  return {
    type: LOGOUT_APP
  };
};

//============================================================== Donor Account Action Creators

export const fetchAccountDonations = creds => dispatch => {
  dispatch({ type: FETCH_USER_DONATIONS_START });
};
