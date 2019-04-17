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
  SET_BIOMETRY_TYPE,
  FETCH_CHARITIES_START,
  FETCH_CHARITIES_SUCCESS,
  FETCH_CHARITIES_ERROR,
  FETCH_USER_DONATIONS_START,
  FETCH_USER_DONATIONS_SUCCESS,
  FETCH_USER_DONATIONS_ERROR,
  UPDATE_SHOWN_CHARITY_LIST,
  RESET_SHOWN_CHARITY_LIST
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

// Charity list search action creator
export const searchCharities = (input, charities, cb) => {
  // Updates shownCharities without mutating original charity list held in state
  if (!input) {
    cb({
      type: RESET_SHOWN_CHARITY_LIST,
      payload: {
        shownCharities: charities,
        charitySearchInput: input
      }
    });
  } else {
    const newShownCharityList = charities.filter(charity => {
      return charity.charityName.toLowerCase().includes(input.toLowerCase());
    });
    cb({
      type: UPDATE_SHOWN_CHARITY_LIST,
      payload: {
        shownCharities: newShownCharityList,
        charitySearchInput: input
      }
    });
  }
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

// Retrieve complete list of donations for a given user account
export const fetchAccountDonations = (username, token, cb) => {
  cb({ type: FETCH_USER_DONATIONS_START });
  const reqOptions = { headers: { authorization: token } };
  return axios
    .get(
      "https://burning-heart.herokuapp.com/api/restricted/donations/account/1",
      reqOptions
    )
    .then(res => {
      return cb({ type: FETCH_USER_DONATIONS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      return cb({
        type: FETCH_USER_DONATIONS_ERROR,
        payload: err.response.data.message
      });
    });
};

// Retrieve complete list of charities from server
export const fetchCharityList = (token, cb) => {
  cb({ type: FETCH_CHARITIES_START });
  const reqOptions = { headers: { authorization: token } };
  return axios
    .get(
      "https://burning-heart.herokuapp.com/api/restricted/charities",
      reqOptions
    )
    .then(res => {
      const sortedCharities = res.data.charities.sort(function(a, b) {
        if (a.charityName > b.charityName) return 1;
        if (a.charityName < b.charityName) return -1;
        return 0;
      });
      const sortedCharityRes = {
        ...res.data,
        charities: sortedCharities
      };
      return cb({ type: FETCH_CHARITIES_SUCCESS, payload: sortedCharityRes });
    })
    .catch(err => {
      return cb({
        type: FETCH_CHARITIES_ERROR,
        payload: err.response.data.message
      });
    });
};
