import {
  FETCH_USER_DONATIONS_START,
  FETCH_USER_DONATIONS_SUCCESS,
  FETCH_USER_DONATIONS_ERROR,
  FETCH_CHARITIES_START,
  FETCH_CHARITIES_SUCCESS,
  FETCH_CHARITIES_ERROR,
  SELECT_DONATIONS,
  SELECT_CHARITIES,
  SELECT_CHARITY,
  CARD_PAYMENT_START,
  CARD_PAYMENT_SUCCESS,
  CARD_PAYMENT_ERROR,
  CLOSE_PAYMENT_MODAL,
  HANDLE_PAYMENT_FORM
} from "../types";

const initialState = {
  donations: [],
  charities: [],
  selectedCharity: "",
  amount: "",
  message: "",
  paymentError: false,
  showPaymentModal: false,
  selectCharities: false,
  selectDonations: true,
  fetchDonationsStart: false,
  fetchDonationsSuccess: false,
  fetchDonationsError: false,
  fetchCharitiesStart: false,
  fetchCharitiesSuccess: false,
  fetchCharitiesError: false,
  makePaymentStart: false,
  makePaymentSuccess: false,
  makePaymentError: false
};

export const donorReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DONATIONS_START:
      return {
        ...state,
        fetchDonationsError: false,
        fetchDonationsStart: true
      };
    case FETCH_USER_DONATIONS_SUCCESS:
      const donationsArr = action.payload.donations;
      return {
        ...state,
        fetchDonationsStart: false,
        fetchDonationsSuccess: true,
        donations: donationsArr.reverse()
      };
    case FETCH_USER_DONATIONS_ERROR:
      return {
        ...state,
        fetchDonationsStart: false,
        fetchDonationsError: true,
        message: action.payload.response.data.message
      };
    case FETCH_CHARITIES_START:
      return {
        ...state,
        fetchCharitiesError: false,
        fetchCharitiesStart: false
      };
    case FETCH_CHARITIES_SUCCESS:
      return {
        ...state,
        fetchCharitiesStart: false,
        fetchCharitiesSuccess: true,
        charities: action.payload.charities
      };
    case FETCH_CHARITIES_ERROR:
      return {
        ...state,
        fetchChritiesStart: false,
        fetchCharitiesError: true,
        message: action.payload.response.data.message
      };
    case SELECT_CHARITIES:
      return {
        ...state,
        selectCharities: true,
        selectDonations: false
      };
    case SELECT_CHARITY:
      return {
        ...state,
        selectedCharity: action.payload,
        showPaymentModal: true
      };
    case SELECT_DONATIONS:
      return {
        ...state,
        selectDonations: true,
        selectCharities: false
      };
    case CLOSE_PAYMENT_MODAL:
      return {
        ...state,
        showPaymentModal: false,
        amount: ""
      };
    case HANDLE_PAYMENT_FORM:
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    case CARD_PAYMENT_START:
      return {
        ...state,
        makePaymentError: false,
        makePaymentStart: true,
        message: ""
      };
    case CARD_PAYMENT_SUCCESS:
      return {
        ...state,
        makePaymentStart: false,
        makePaymentSuccess: true,
        donations: [action.payload.donation, ...state.donations]
      };
    case CARD_PAYMENT_ERROR:
      return {
        ...state,
        makePaymentStart: false,
        makePaymentError: true
      };
    default:
      return state;
  }
};
