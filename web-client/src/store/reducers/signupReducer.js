import {
  MOVE_SIGNUP_FORM_FORWARD,
  MOVE_SIGNUP_FORM_BACKWARD,
  UPDATE_SIGNUP_FORM,
  UPDATE_DONOR_FORM
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
    stuff: ""
  }
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
    default:
      return state;
  }
};
