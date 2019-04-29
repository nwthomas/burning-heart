import decode from "jwt-decode";
import {
  LOGIN_APP_START,
  LOGIN_APP_SUCCESS,
  LOGIN_APP_ERROR,
  LOGOUT_APP,
  UPDATE_LOGIN_FORM,
  CLOSE_LOGIN_MODAL
} from "../types";

const getLoginStatus = () => {
  // Pull current token out of storage if it exists
  const token = localStorage.getItem("bhToken");
  let decodedToken = "";

  // Get currentDate and slice off last 3 numbers to match JWT token format
  const currentDate = Number(
    Date.now()
      .toString()
      .split("")
      .splice(0, 10)
      .join("")
  );

  // Decode JWT token if it exists
  if (token) {
    decodedToken = decode(token);
  }

  // Compare current token expiration date to current date/time minus one hour
  const loggedInStatus = decodedToken.exp > currentDate - 86400 / 24;

  // Return logged in status
  return loggedInStatus;
};

const initialState = {
  loggedIn: getLoginStatus(),
  username: "",
  password: "",
  loginStart: false,
  loginSuccess: false,
  loginError: false,
  message: "",
  modalOpen: false,
  account: {},
  token: "",
  accountType: ""
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_APP_START:
      return {
        ...state,
        loginError: false,
        loginStart: true,
        modalOpen: true
      };
    case LOGIN_APP_SUCCESS:
      localStorage.setItem("bhToken", action.payload.token);
      return {
        ...state,
        loginStart: false,
        loginSuccess: true,
        loggedIn: true,
        message: action.payload.message,
        username: "",
        password: "",
        account: action.payload.account,
        token: action.payload.token
      };
    case LOGIN_APP_ERROR:
      return {
        ...state,
        loginStart: false,
        loginError: true,
        message: action.payload.response.data.message
      };
    case LOGOUT_APP:
      return {
        ...state,
        loggedIn: false
      };
    case UPDATE_LOGIN_FORM:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case CLOSE_LOGIN_MODAL:
      return {
        ...state,
        loginSuccess: false,
        loginError: false,
        message: "",
        modalOpen: false
      };
    default:
      return state;
  }
};
