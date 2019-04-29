import {
  LOGIN_APP_START,
  LOGIN_APP_SUCCESS,
  LOGIN_APP_ERROR,
  LOGOUT_APP,
  UPDATE_LOGIN_FORM,
  CLOSE_LOGIN_MODAL
} from "../types";

const initialState = {
  loggedIn: false,
  username: "",
  password: "",
  loginStart: false,
  loginSuccess: false,
  loginError: false,
  message: "",
  modalOpen: false
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
      return {
        ...state,
        loginStart: false,
        loginSuccess: true,
        loggedIn: true,
        message: action.payload.message,
        username: "",
        password: ""
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
        loginSuccess: true,
        loginError: true,
        message: "",
        modalOpen: false
      };
    default:
      return state;
  }
};
