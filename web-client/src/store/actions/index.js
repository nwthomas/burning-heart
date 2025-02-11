import axios from "axios";
import decode from "jwt-decode";
import {
  MOVE_SIGNUP_FORM_FORWARD,
  MOVE_SIGNUP_FORM_BACKWARD,
  UPDATE_SIGNUP_FORM,
  UPDATE_DONOR_FORM,
  UPDATE_CHARITY_FORM,
  UPDATE_CHARITY_OWNER_FORM,
  CREATE_NEW_ACCOUNT_START,
  CREATE_NEW_ACCOUNT_SUCCESS,
  CREATE_NEW_ACCOUNT_ERROR,
  CREATE_NEW_CHARITY_START,
  CREATE_NEW_CHARITY_SUCCESS,
  CREATE_NEW_CHARITY_ERROR,
  CLOSE_SIGNUP_MODAL,
  UPDATE_LOGIN_FORM,
  LOGIN_APP_START,
  LOGIN_APP_SUCCESS,
  LOGIN_APP_ERROR,
  LOGIN_CHARITY_START,
  LOGIN_CHARITY_SUCCESS,
  LOGIN_CHARITY_ERROR,
  CLOSE_LOGIN_MODAL,
  LOGOUT_APP,
  EXPIRED_CREDENTIALS,
  LOGIN_TOKEN_START,
  LOGIN_TOKEN_SUCCESS,
  LOGIN_TOKEN_ERROR,
  LOGIN_TOKEN_CHARITY_START,
  LOGIN_TOKEN_CHARITY_SUCCESS,
  LOGIN_TOKEN_CHARITY_ERROR,
  FETCH_USER_DONATIONS_START,
  FETCH_USER_DONATIONS_SUCCESS,
  FETCH_USER_DONATIONS_ERROR,
  FETCH_CHARITY_DONATIONS_START,
  FETCH_CHARITY_DONATIONS_SUCCESS,
  FETCH_CHARITY_DONATIONS_ERROR,
  FETCH_CHARITIES_START,
  FETCH_CHARITIES_SUCCESS,
  FETCH_CHARITIES_ERROR,
  SELECT_DONATIONS,
  SELECT_CHARITIES,
  SELECT_CHARITY,
  CARD_PAYMENT_START,
  CARD_PAYMENT_SUCCESS,
  CARD_PAYMENT_ERROR,
  CLOSE_PAYMENT_MODAL,
  HANDLE_PAYMENT_FORM,
  HANDLE_CARD_TOKEN_ERROR,
  SIGNING_TOS,
  ADDING_OWNER,
  CANCEL_FURTHER_ACTION,
  REGISTER_OWNER_START,
  REGISTER_OWNER_SUCCESS,
  REGISTER_OWNER_ERROR,
  SIGN_TOS_START,
  SIGN_TOS_SUCCESS,
  SIGN_TOS_ERROR,
  UPDATE_IDENTITY_DOCUMENT
} from "../types";

const restrictedError = "Not authorized. Please try logging in again.";

const baseUrl = "https://burning-heart.herokuapp.com";
// const baseUrl = "http://localhost:7000";

//============================================================== Signup Action Creators
export const createDonorAccount = userDetails => dispatch => {
  dispatch({ type: CREATE_NEW_ACCOUNT_START });
  axios
    .post(`${baseUrl}/api/auth/register-account`, userDetails)
    .then(res => {
      dispatch({ type: CREATE_NEW_ACCOUNT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: CREATE_NEW_ACCOUNT_ERROR, payload: err });
    });
};

export const createCharityAccount = charityDetails => dispatch => {
  dispatch({ type: CREATE_NEW_CHARITY_START });
  axios
    .post(`${baseUrl}/api/auth/register-charity`, charityDetails)
    .then(res => {
      dispatch({ type: CREATE_NEW_CHARITY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: CREATE_NEW_CHARITY_ERROR, payload: err });
    });
};

export const createCharityOwner = (formData, charityId) => dispatch => {
  dispatch({ type: REGISTER_OWNER_START });
  const token = localStorage.getItem("bhToken");
  let decodedToken = "";

  if (token) {
    decodedToken = decode(token);
  }

  const headers = new Headers({
    authorization: token,
    withCredentials: true,
    "Content-Type": "multipart/form-data"
  });

  axios
    .post(
      `${baseUrl}/api/restricted/charities/create-owner/${
        decodedToken.subject
      }`,
      formData,
      headers
    )
    .then(res => {
      dispatch({ type: REGISTER_OWNER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: REGISTER_OWNER_ERROR, payload: err });
    });
};

export const signStripeTOS = _ => dispatch => {
  dispatch({ type: SIGN_TOS_START });

  const token = localStorage.getItem("bhToken");
  console.log(token);
  let decodedToken = "";

  if (token) {
    decodedToken = decode(token);
  }

  const reqOptions = {
    headers: { authorization: token }
  };

  console.log(reqOptions);
  axios
    .post(
      `${baseUrl}/api/restricted/charities/tos/${decodedToken.subject}`,
      {},
      reqOptions
    )
    .then(res => {
      dispatch({ type: SIGN_TOS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: SIGN_TOS_ERROR, payload: err });
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

export const handleCharityFormChanges = (name, value) => {
  return {
    type: UPDATE_CHARITY_FORM,
    payload: { name, value }
  };
};

export const handleCharityOwnerForm = (name, value) => {
  return {
    type: UPDATE_CHARITY_OWNER_FORM,
    payload: { name, value }
  };
};

export const handleOwnerIdentityDocument = file => {
  return {
    type: UPDATE_IDENTITY_DOCUMENT,
    payload: { file }
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

export const startAddingOwner = () => {
  return {
    type: ADDING_OWNER
  };
};

export const startSigningTOS = () => {
  return {
    type: SIGNING_TOS
  };
};

export const cancelFurtherAction = () => {
  return {
    type: CANCEL_FURTHER_ACTION
  };
};

//============================================================== Login Action Creators
export const loginAccount = creds => dispatch => {
  dispatch({ type: LOGIN_APP_START });
  axios
    .post(`${baseUrl}/api/auth/login-account`, creds)
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

export const loginCharity = creds => dispatch => {
  dispatch({ type: LOGIN_CHARITY_START });
  axios
    .post(`${baseUrl}/api/auth/login-charity`, creds)
    .then(res => {
      dispatch({ type: LOGIN_CHARITY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err);
      if (err.response.data.message === restrictedError) {
        dispatch({ type: EXPIRED_CREDENTIALS, payload: err }); // Move later for other API calls... Not relevant here, but preserving code
      } else {
        dispatch({ type: LOGIN_CHARITY_ERROR, payload: err });
      }
    });
};

export const loginWithToken = _ => dispatch => {
  dispatch({ type: LOGIN_TOKEN_START });
  const token = localStorage.getItem("bhToken");
  let decodedToken = "";

  if (token) {
    decodedToken = decode(token);
  }

  const reqOptions = {
    headers: { authorization: token }
  };

  axios
    .get(
      `${baseUrl}/api/restricted/accounts/${decodedToken.subject}`,
      reqOptions
    )
    .then(res => {
      dispatch({ type: LOGIN_TOKEN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: LOGIN_TOKEN_ERROR, payload: err });
    });
};

export const loginWithTokenCharity = _ => dispatch => {
  dispatch({ type: LOGIN_TOKEN_CHARITY_START });
  const token = localStorage.getItem("bhToken");
  let decodedToken = "";

  if (token) {
    decodedToken = decode(token);
  }

  const reqOptions = {
    headers: { authorization: token }
  };

  axios
    .get(
      `${baseUrl}/api/restricted/charities/${decodedToken.subject}`,
      reqOptions
    )
    .then(res => {
      dispatch({ type: LOGIN_TOKEN_CHARITY_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: LOGIN_TOKEN_CHARITY_ERROR, payload: err });
    });
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

export const fetchAccountDonations = _ => dispatch => {
  dispatch({ type: FETCH_USER_DONATIONS_START });
  const token = localStorage.getItem("bhToken");
  let decodedToken = "";
  if (token) {
    decodedToken = decode(token);
  }
  const reqOptions = {
    headers: { authorization: token }
  };
  axios
    .get(
      `https://burning-heart.herokuapp.com/api/restricted/donations/account/${
        decodedToken.subject
      }`,
      reqOptions
    )
    .then(res => {
      dispatch({ type: FETCH_USER_DONATIONS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_USER_DONATIONS_ERROR, payload: err });
    });
};

export const fetchCharityDonations = _ => dispatch => {
  dispatch({ type: FETCH_CHARITY_DONATIONS_START });
  const token = localStorage.getItem("bhToken");
  let decodedToken = "";
  if (token) {
    decodedToken = decode(token);
  }
  const reqOptions = {
    headers: { authorization: token }
  };
  axios
    .get(
      `${baseUrl}/api/restricted/donations/charity/${decodedToken.subject}`,
      reqOptions
    )
    .then(res => {
      dispatch({ type: FETCH_CHARITY_DONATIONS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_CHARITY_DONATIONS_ERROR, payload: err });
    });
};

export const fetchCharities = _ => dispatch => {
  dispatch({ type: FETCH_CHARITIES_START });
  const token = localStorage.getItem("bhToken");
  const reqOptions = {
    headers: { authorization: token }
  };
  axios
    .get(`${baseUrl}/api/restricted/charities`, reqOptions)
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
      dispatch({ type: FETCH_CHARITIES_SUCCESS, payload: sortedCharityRes });
    })
    .catch(err => {
      dispatch({ type: FETCH_CHARITIES_ERROR, payload: err });
    });
};

export const makePayment = (
  amount,
  cardToken,
  charityId,
  accountId
) => dispatch => {
  dispatch({ type: CARD_PAYMENT_START });
  const donationData = {
    donation: { amount },
    stripeData: { tokenId: cardToken.token.id },
    charityId: Number(charityId),
    accountId
  };
  const token = localStorage.getItem("bhToken");
  const reqOptions = { headers: { authorization: token } };
  return axios
    .post(`${baseUrl}/api/restricted/donations`, donationData, reqOptions)
    .then(res => {
      dispatch({ type: CARD_PAYMENT_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: CARD_PAYMENT_ERROR,
        payload: err
      });
    });
};

export const handleCardTokenError = err => {
  return {
    type: HANDLE_CARD_TOKEN_ERROR,
    payload: err
  };
};

export const closePaymentModal = () => {
  return {
    type: CLOSE_PAYMENT_MODAL
  };
};

export const handlePaymentForm = (name, value) => {
  return {
    type: HANDLE_PAYMENT_FORM,
    payload: { name, value }
  };
};

export const selectCharity = charityId => {
  return { type: SELECT_CHARITY, payload: charityId };
};

export const selectDonationsList = () => {
  return { type: SELECT_DONATIONS };
};

export const selectCharitiesList = () => {
  return { type: SELECT_CHARITIES };
};
