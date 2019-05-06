import React from "react";
import { Router } from "react-router-dom";
import renderer from "react-test-renderer";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import { store } from "../store";

const rendererWithRouter = (
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => {
  return {
    ...renderer.create(
      <Router history={history}>
        <Provider store={store}>{ui}</Provider>
      </Router>
    ),
    history
  };
};

export default rendererWithRouter;
