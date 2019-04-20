import {
  HANDLE_SIGNUP_FORM_CHANGE,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CREATE_ACCOUNT_START,
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_ERROR,
  MAKE_DONATION_START,
  MAKE_DONATION_SUCCESS,
  MAKE_DONATION_ERROR,
  CLOSE_MODAL,
  HANDLE_LOGIN_FORM_CHANGE,
  HANDLE_DONATION_FORM_CHANGE,
  SET_BIOMETRY_TYPE,
  FETCH_CHARITIES_START,
  FETCH_CHARITIES_SUCCESS,
  FETCH_CHARITIES_ERROR,
  FETCH_USER_DONATIONS_START,
  FETCH_USER_DONATIONS_SUCCESS,
  FETCH_USER_DONATIONS_ERROR,
  UPDATE_SHOWN_CHARITY_LIST,
  RESET_SHOWN_CHARITY_LIST,
  GO_HOME,
  GO_SEARCH,
  GO_PROFILE
} from "../types/index";

export const initialState = {
  account: {},
  charities: [], // Duplicated state for search replacement
  shownCharities: [],
  donations: [], // Duplicate state for search replacement
  shownDonations: [],
  loggedIn: false,
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
  donation: {
    amount: "",
    creditCard: "",
    expDate: "",
    securityCode: ""
  },
  newPassword: "",
  charitySearchInput: "",
  message: "",
  homeViewSelected: true,
  searchViewSelected: false,
  profileViewSelected: false,
  loginStart: false,
  loginSuccess: false,
  loginError: false,
  createAccountStart: false,
  createAccountSuccess: false,
  createAccountError: false,
  getCharitiesStart: false,
  getCharitiesSuccess: false,
  getCharitiesError: false,
  getUserDonationsStart: false,
  getUserDonationsSuccess: false,
  getUserDonationsError: false,
  makeDonationStart: false,
  makeDonationSuccess: false,
  makeDonationError: false
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
        getCharitiesError: false,
        getCharitiesSuccess: false,
        message: ""
      };
    case UPDATE_SHOWN_CHARITY_LIST:
      return {
        ...state,
        shownCharities: action.payload.shownCharities,
        charitySearchInput: action.payload.charitySearchInput
      };
    case RESET_SHOWN_CHARITY_LIST:
      return {
        ...state,
        shownCharities: action.payload.shownCharities,
        charitySearchInput: action.payload.charitySearchInput
      };
    case FETCH_CHARITIES_START:
      return {
        ...state,
        getCharitiesStart: true,
        getCharitiesError: false
      };
    case FETCH_CHARITIES_SUCCESS:
      return {
        ...state,
        getCharitiesStart: false,
        getCharitiesSuccess: true,
        message: action.payload.message,
        charities: action.payload.charities,
        shownCharities: action.payload.charities
      };
    case FETCH_CHARITIES_ERROR:
      return {
        ...state,
        getCharitiesStart: false,
        getCharitiesError: true,
        message: action.payload
      };
    case FETCH_USER_DONATIONS_START:
      return {
        ...state,
        getUserDonationsStart: true,
        getUserDonationsError: false
      };
    case FETCH_USER_DONATIONS_SUCCESS:
      return {
        ...state,
        donations: action.payload.donations,
        shownDonations: action.payload.donations,
        getUserDonationsStart: false,
        getUserDonationsSuccess: true
      };
    case FETCH_USER_DONATIONS_ERROR:
      return {
        ...state,
        getUserDonationsStart: false,
        getUserDonationsError: true,
        message: action.payload
      };
    case GO_HOME: // Navigation logic
      return {
        ...state,
        homeViewSelected: true,
        searchViewSelected: false,
        profileViewSelected: false
      };
    case GO_SEARCH: // Navigation logic
      return {
        ...state,
        homeViewSelected: false,
        searchViewSelected: true,
        profileViewSelected: false
      };
    case GO_PROFILE: // Navigation logic
      return {
        ...state,
        homeViewSelected: false,
        searchViewSelected: false,
        profileViewSelected: true
      };
    case HANDLE_DONATION_FORM_CHANGE:
      return {
        ...state,
        donation: {
          ...state.donation,
          [action.payload.name]: action.payload.value
        }
      };
    default:
      return state;
  }
};
