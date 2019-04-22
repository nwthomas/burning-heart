import { VARIABLE_NAMES_STARTED } from "../types"; // Import of variable names so that you can use them/reduce errors

// Sets initial state for the application
const initialState = {
  loggedIn: true
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case VARIABLE_NAMES_STARTED:
      return {
        ...state,
        loggedIn: true
      };
    default:
      return state;
  }
};

// Don't forget to spread in previous state in appropriate places
