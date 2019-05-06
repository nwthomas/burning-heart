import React from "react";
import { Router } from "react-router-dom";
import { render } from "react-testing-library";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { store } from "../store";

const renderWithRouter = (
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => {
  return {
    ...render(
      <Router history={history}>
        <Provider store={store}>{ui}</Provider>
      </Router>
    ),
    history
  };
};

export default renderWithRouter;
