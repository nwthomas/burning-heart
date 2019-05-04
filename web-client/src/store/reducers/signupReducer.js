import {
  MOVE_SIGNUP_FORM_FORWARD,
  MOVE_SIGNUP_FORM_BACKWARD,
  UPDATE_SIGNUP_FORM,
  UPDATE_DONOR_FORM,
  UPDATE_CHARITY_FORM,
  CREATE_NEW_ACCOUNT_START,
  CREATE_NEW_ACCOUNT_SUCCESS,
  CREATE_NEW_ACCOUNT_ERROR,
  CREATE_NEW_CHARITY_START,
  CREATE_NEW_CHARITY_SUCCESS,
  CREATE_NEW_CHARITY_ERROR,
  CLOSE_SIGNUP_MODAL
} from "../types"; // Import of variable names so that you can use them/reduce errors

// Sets initial state for the application
const initialState = {
  formPage: 1,
  username: "",
  password: "",
  accountType: "",
  donorAccount: {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: ""
  },
  charityAccount: {
    charityName: "",
    phone: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zip: ""
  },
  modalOpen: false,
  createAccountStart: false,
  createAccountSuccess: false,
  createAccountError: false,
  createCharityStart: false,
  createCharitySuccess: false,
  createCharityError: false
};

export const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVE_SIGNUP_FORM_FORWARD:
      return {
        ...state,
        formPage: state.formPage + 1
      };
    case MOVE_SIGNUP_FORM_BACKWARD:
      return {
        ...state,
        formPage: state.formPage - 1
      };
    case UPDATE_SIGNUP_FORM:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case UPDATE_DONOR_FORM:
      return {
        ...state,
        donorAccount: {
          ...state.donorAccount,
          [action.payload.name]: action.payload.value
        }
      };
    case UPDATE_CHARITY_FORM:
      return {
        ...state,
        charityAccount: {
          ...state.charityAccount,
          [action.payload.name]: action.payload.value
        }
      };
    case CREATE_NEW_ACCOUNT_START:
      return {
        ...state,
        modalOpen: true,
        createAccountError: false,
        createAccountStart: true,
        message: ""
      };
    case CREATE_NEW_ACCOUNT_SUCCESS:
      return {
        ...state,
        createAccountStart: false,
        createAccountSuccess: true,
        message: action.payload.message,
        username: "",
        password: "",
        accountType: "",
        donorAccount: {
          firstName: "",
          middleName: "",
          lastName: "",
          email: "",
          phone: ""
        },
        formPage: 1
      };
    case CREATE_NEW_ACCOUNT_ERROR:
      return {
        ...state,
        createAccountStart: false,
        createAccountError: true,
        message: action.payload.response.data.message
      };
    case CREATE_NEW_CHARITY_START:
      return {
        ...state,
        modalOpen: true,
        createCharityError: false,
        createCharityStart: true,
        message: action.payload.message
      };
    case CREATE_NEW_CHARITY_SUCCESS:
      return {
        ...state,
        createCharityStart: false,
        createCharitySuccess: true,
        message: action.payload.message
      };
    case CREATE_NEW_CHARITY_ERROR:
      return {
        ...state,
        createAccountStart: false,
        createCharityError: true,
        message: action.payload.response.data.message
      };
    case CLOSE_SIGNUP_MODAL:
      return {
        ...state,
        modalOpen: false
      };
    default:
      return state;
  }
};
