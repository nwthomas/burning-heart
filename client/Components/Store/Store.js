import React, { useReducer, createContext } from "react";

import { HANDLE_SIGNUP_FORM_CHANGE } from "./types/index";

export const Store = createContext({
  state: {},
  dispatch: () => {}
});

const initialState = {
  user: {},
  donations: [],
  signUpForm: {
    email: "",
    username: "",
    password: "",
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: ""
  }
};

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case HANDLE_SIGNUP_FORM_CHANGE:
      return {
        ...state,
        signUpForm: {
          ...state.signUpForm,
          [action.payload.name]: action.payload.value
        }
      };
    default:
      return state;
  }
};

export const MyStore = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
