import {
  MOVE_SIGNUP_FORM_FORWARD,
  MOVE_SIGNUP_FORM_BACKWARD,
  UPDATE_SIGNUP_FORM,
  UPDATE_DONOR_FORM,
  UPDATE_CHARITY_FORM,
  UPDATE_CHARITY_OWNER_FORM,
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
    country: "US", // Preset
    type: "custom", // Preset
    business_type: "company", // Preset
    default_currency: "usd", // Preset
    requested_capabilities: ["card_payments"], // Preset
    email: "", // done
    charityName: "", // done
    phone: "", // done
    street1: "", // done
    city: "", // done
    state: "", // done
    zip: "", // done
    tax_id: "",
    mcc: "8398", // Preset
    url: "", // done
    object: "bank_account", // External acct obj
    country: "US", // External acct obj
    currency: "usd", // External acct obj
    routing_number: "", // done
    account_number: "" // done
  },
  charityOwner: {
    first_name: "", // done
    last_name: "", // done
    day: "",
    month: "",
    year: "",
    email: "", // done
    line1: "", // done
    city: "", // done
    state: "", // done
    postal_code: "", // done
    phone: "", // done
    ssn_last_4: "",
    relationship: {
      account_opener: true, // done
      director: true, // done
      owner: true, // done
      percentage_ownership: 100, // done
      title: "CEO" // done
    }
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
    case UPDATE_CHARITY_OWNER_FORM:
      return {
        ...state,
        charityOwner: {
          ...state.charityOwner,
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
        createCharityStart: true
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
