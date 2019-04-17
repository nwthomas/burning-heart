import React, { useReducer, createContext } from "react";
import { initialState, reducer } from "./reducers";

export const Store = createContext({
  state: {},
  dispatch: () => {}
});

export const MyStore = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
