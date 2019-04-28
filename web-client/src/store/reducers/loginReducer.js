import { LOGIN_APP, LOGOUT_APP, UPDATE_LOGIN_FORM } from "../types";

const initialState = {
  loggedIn: false,
  username: "",
  password: ""
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_APP:
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
