import React from "react";
import { NativeRouter as Router } from "react-router-native";
import { render } from "react-testing-library";
import { createMemoryHistory } from "history";

const renderWithRouter = (
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    history
  };
};

export default renderWithRouter;
