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
  UPDATE_ACCOUNT_START,
  UPDATE_ACCOUNT_SUCCESS,
  UPDATE_ACCOUNT_ERROR,
  HANDLE_LOGIN_FORM_CHANGE,
  HANDLE_DONATION_FORM_CHANGE,
  HANDLE_UPDATE_FORM_CHANGE,
  SET_BIOMETRY_TYPE,
  FETCH_CHARITIES_START,
  FETCH_CHARITIES_SUCCESS,
  FETCH_CHARITIES_ERROR,
  FETCH_USER_DONATIONS_START,
  FETCH_USER_DONATIONS_SUCCESS,
  FETCH_USER_DONATIONS_ERROR,
  FETCH_GRAPH_DONATIONS_START,
  FETCH_GRAPH_DONATIONS_SUCCESS,
  FETCH_GRAPH_DONATIONS_ERROR,
  UPDATE_SHOWN_CHARITY_LIST,
  RESET_SHOWN_CHARITY_LIST,
  MAKE_DONATION_START,
  MAKE_DONATION_SUCCESS,
  MAKE_DONATION_ERROR,
  GO_HOME,
  GO_SEARCH,
  GO_PROFILE
} from "../types/index";

import { makeToken } from "./stripeTokenCreator";

export const navigateApp = (page, cb) => {
  if (page === "home") {
    cb({ type: GO_HOME });
  } else if (page === "search") {
    cb({ type: GO_SEARCH });
  } else {
    cb({ type: GO_PROFILE });
  }
};

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

// Donation form controlled input action creator
export const updateDonationForm = (name, value, cb) => {
  return cb({
    type: HANDLE_DONATION_FORM_CHANGE,
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

export const handleUpdateForm = (name, value, cb) => {
  return cb({
    type: HANDLE_UPDATE_FORM_CHANGE,
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
    .post("https://burning-heart.herokuapp.com/api/auth/login-account", creds)
    .then(res => {
      return cb({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      return cb({ type: LOGIN_ERROR, payload: err.response.data.message });
    });
};

// Login application action creator with history push
export const manualLoginApp = (username, password, history, cb) => {
  cb({ type: LOGIN_START });
  const creds = { username, password };
  axios
    .post("https://burning-heart.herokuapp.com/api/auth/login-account", creds)
    .then(res => {
      history.push("/");
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
    .post(
      "https://burning-heart.herokuapp.com/api/auth/register-account",
      userDetails
    )
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

// Update account for user action creator
export const updateUserAccount = (userDetails, id, token, cb) => {
  cb({ type: UPDATE_ACCOUNT_START });
  const reqOptions = { headers: { authorization: token } };
  return axios
    .put(
      `https://burning-heart.herokuapp.com/api/restricted/accounts/${id}`,
      userDetails,
      reqOptions
    )
    .then(res => {
      return cb({ type: UPDATE_ACCOUNT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      return cb({
        type: UPDATE_ACCOUNT_ERROR,
        payload: err.response.data.message
      });
    });
};

// Retrieve complete list of donations for a given user account
export const fetchAccountDonations = (id, token, cb) => {
  cb({ type: FETCH_USER_DONATIONS_START });
  const reqOptions = { headers: { authorization: token } };
  return axios
    .get(
      `https://burning-heart.herokuapp.com/api/restricted/donations/account/${id}`,
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

export const fetchDonationGraphData = (userId, token, cb) => {
  cb({ type: FETCH_GRAPH_DONATIONS_START });
  const reqOptions = { headers: { authorization: token } };
  return axios
    .get(
      `https://burning-heart.herokuapp.com/api/restricted/data/donations/${userId}`,
      reqOptions
    )
    .then(res => {
      return cb({ type: FETCH_GRAPH_DONATIONS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      return cb({
        type: FETCH_GRAPH_DONATIONS_ERROR,
        payload: err.response.data.message
      });
    });
};

export const makeDonation = async (
  donation,
  charityId,
  accountId,
  token,
  cb
) => {
  cb({ type: MAKE_DONATION_START });
  const { creditCard, expMonth, expYear, securityCode } = donation;
  const reqOptions = { headers: { authorization: token } };
  const cardToken = await makeToken(
    creditCard, // Must be string
    Number(expMonth), // Must be number
    Number(expYear), // Must be number
    securityCode // Must be string
  );

  if (cardToken.tokenId) {
    const donationData = {
      donation,
      stripeData: cardToken,
      charityId: Number(charityId), // Must be number
      accountId
    };
    return axios
      .post(
        "https://burning-heart.herokuapp.com/api/restricted/donations",
        donationData,
        reqOptions
      )
      .then(res => {
        return cb({ type: MAKE_DONATION_SUCCESS, payload: res.data });
      })
      .catch(err => {
        return cb({
          type: MAKE_DONATION_ERROR,
          payload: err.response.data.message
        });
      });
  } else {
    return cb({
      type: MAKE_DONATION_ERROR,
      payload: "Please enter valid card information and try again."
    });
  }
};
