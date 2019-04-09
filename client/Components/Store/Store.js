import React, { useReducer, createContext } from "react";

export const Store = createContext({
  state: {},
  dispatch: () => {}
});

const initialState = {
  user: {},
  donations: []
};

const reducer = (state, action) => {
  switch (action.type) {
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
