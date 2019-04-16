import {
  HANDLE_SIGNUP_FORM_CHANGE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CREATE_ACCOUNT_START,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_ERROR,
  CLOSE_MODAL,
  HANDLE_LOGIN_FORM_CHANGE,
  SET_BIOMETRY_TYPE
} from "../types/index";

export const initialState = {
  account: {},
  donations: [],
  loggedIn: true,
  biometryType: "",
  token: null,
  signUpForm: {
    email: "",
    username: "",
    password: "",
    firstName: "",
    middleName: "",
    lastName: "",
    phone: ""
  },
  loginForm: {
    username: "",
    password: ""
  },
  message: "",
  loginStart: false,
  loginSuccess: false,
  loginError: false,
  createAccountStart: false,
  createAccountSuccess: false,
  createAccountError: false
};

export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case SET_BIOMETRY_TYPE: // For FaceID/TouchID
      return {
        ...state,
        biometryType: action.payload
      };
    case HANDLE_SIGNUP_FORM_CHANGE:
      return {
        ...state,
        signUpForm: {
          ...state.signUpForm,
          [action.payload.name]: action.payload.value
        }
      };
    case HANDLE_LOGIN_FORM_CHANGE:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
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
        loginSuccess: true,
        loggedIn: true,
        account: action.payload.account,
        message: action.payload.message,
        loginForm: {
          username: "",
          password: ""
        },
        token: action.payload.token
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginStart: false,
        loginError: true,
        message: action.payload
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
        createAccountSuccess: true,
        account: action.payload.account,
        message: action.payload.message,
        signUpForm: {
          email: "",
          username: "",
          password: "",
          firstName: "",
          middleName: "",
          lastName: "",
          phone: ""
        }
      };
    case CREATE_ACCOUNT_ERROR:
      return {
        ...state,
        createAccountStart: false,
        createAccountError: true,
        message: action.payload
      };
    case CLOSE_MODAL:
      return {
        ...state,
        createAccountError: false,
        createAccountSuccess: false,
        loginError: false,
        loginSuccess: false,
        message: ""
      };
    default:
      return state;
  }
};
