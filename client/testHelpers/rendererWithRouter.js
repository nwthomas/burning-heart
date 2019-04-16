import React from "react";
import { NativeRouter as Router } from "react-router-native";
import renderer from "react-test-renderer";
import { createMemoryHistory } from "history";

const rendererWithRouter = (
  ui,
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] })
  } = {}
) => {
  return {
    ...renderer.create(<Router history={history}>{ui}</Router>),
    history
  };
};

export default rendererWithRouter;
