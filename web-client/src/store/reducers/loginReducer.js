import {
  LOGIN_APP_START,
  LOGIN_APP_SUCCESS,
  LOGIN_APP_ERROR,
  LOGOUT_APP,
  UPDATE_LOGIN_FORM
} from "../types";

const initialState = {
  loggedIn: false,
  username: "",
  password: "",
  loginStart: false,
  loginSuccess: false,
  loginError: false
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_APP_START:
      return {
        ...state,
        loggedIn: true
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
    default:
      return state;
  }
};
