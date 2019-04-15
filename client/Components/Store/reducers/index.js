import {
  HANDLE_SIGNUP_FORM_CHANGE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CREATE_ACCOUNT_START,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_ERROR,
  CLOSE_MODAL
} from "./types/index";

export const initialState = {
  user: {},
  donations: [],
  signUpForm: {
    email: "",
    username: "",
    password: "",
    firstName: "",
    middleName: "",
    lastName: "",
    phone: ""
  },
  loginStart: false,
  loginSuccess: false,
  loginError: false,
  createAccountStart: false,
  createAccountSuccess: false,
  createAccountError: false
};

export const reducer = (state, action) => {
  switch (action.type) {
    case HANDLE_SIGNUP_FORM_CHANGE:
      return {
        ...state,
        signUpForm: {
          ...state.signUpForm,
          [action.payload.name]: action.payload.value
        }
      };
    case LOGIN_START:
      return {
        ...state,
        loginError: false,
        loginStart: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginStart: false,
        loginSuccess: true
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginStart: false,
        loginError: true
      };
    case CREATE_ACCOUNT_START:
      return {
        ...state,
        createAccountStart: true,
        createAccountError: false
      };
    case CREATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        createAccountStart: false,
        createAccountSuccess: true
      };
    case CREATE_ACCOUNT_ERROR:
      return {
        ...state,
        createAccountStart: false,
        createAccountError: true
      };
    case CLOSE_MODAL:
      return {
        ...state,
        createAccountError: false,
        createAccountSuccess: false,
        loginError: false,
        loginSuccess: false
      };
    default:
      return state;
  }
};
