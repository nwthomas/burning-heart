import {
  FETCH_CHARITY_DONATIONS_START,
  FETCH_CHARITY_DONATIONS_SUCCESS,
  FETCH_CHARITY_DONATIONS_ERROR,
  LOGOUT_APP
} from "../types";

const initialState = {
  charityDonations: [],
  fetchCharityDonationsStart: false,
  fetchCharityDonationsSuccess: false,
  fethCharityDonationsError: false,
  message: ""
};

export const charityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARITY_DONATIONS_START:
      return {
        ...state,
        fetchCharityDonationsError: false,
        fetchCharityDonationsStart: true
      };
    case FETCH_CHARITY_DONATIONS_SUCCESS:
      return {
        ...state,
        fetchCharityDonationsStart: false,
        fetchCharityDonationsSuccess: true,
        charityDonations: action.payload.donations
      };
    case FETCH_CHARITY_DONATIONS_ERROR:
      return {
        ...state,
        fetchCharityDonationsStart: false,
        fetchCharityDonationsError: true
      };
    case LOGOUT_APP:
      return {
        ...state,
        charityDonations: []
      };
    default:
      return state;
  }
};
