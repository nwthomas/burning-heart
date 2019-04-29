import {
  LOGIN_APP_START,
  LOGIN_APP_SUCCESS,
  LOGIN_APP_ERROR,
  LOGOUT_APP,
  UPDATE_LOGIN_FORM,
  CLOSE_LOGIN_MODAL,
  EXPIRED_CREDENTIALS
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
      console.log("Working!");
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
    default:
      return state;
  }
};
