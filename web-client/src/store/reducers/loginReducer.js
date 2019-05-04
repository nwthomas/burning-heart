import {
  LOGIN_APP_START,
  LOGIN_APP_SUCCESS,
  LOGIN_APP_ERROR,
  LOGOUT_APP,
  UPDATE_LOGIN_FORM,
  CLOSE_LOGIN_MODAL,
  EXPIRED_CREDENTIALS,
  LOGIN_TOKEN_SUCCESS,
  LOGIN_TOKEN_ERROR,
  LOGIN_CHARITY_START,
  LOGIN_CHARITY_SUCCESS,
  LOGIN_CHARITY_ERROR
} from "../types";
import { getLoginStatus } from "./getLoginStatus";

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
  charity: {},
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
        loggedIn: false,
        token: "",
        account: {},
        accountType: ""
      };
    case LOGIN_CHARITY_START:
      return {
        ...state,
        loginStart: true,
        loginError: false
      };
    case LOGIN_CHARITY_SUCCESS:
      return {
        ...state,
        loginStart: false,
        loginSuccess: true,
        loggedIn: true,
        message: action.payload.message,
        username: "",
        password: "",
        charity: action.payload.charity,
        token: action.payload.token
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
        modalOpen: false,
        expiredCredentials: false
      };
    case EXPIRED_CREDENTIALS:
      return {
        ...state,
        modalOpen: true,
        message: action.payload.response.data.message,
        expiredCredentials: true
      };
    case LOGIN_TOKEN_SUCCESS:
      return {
        ...state,
        account: action.payload.account
      };
    case LOGIN_TOKEN_ERROR:
      localStorage.removeItem("bhToken");
      return {
        ...state,
        loggedIn: false
      };
    default:
      return state;
  }
};
