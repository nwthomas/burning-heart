import React from "react";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { renderWithRouter, rendererWithRouter } from "./testHelpers";
import { Provider } from "react-redux";
import { store } from "./store";

import App from "./App";

const AppWithStoreAndStripe = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

describe("<App />", () => {
  it("should render the App component without crashing", () => {
    const helpers = rendererWithRouter(
      <AppWithStoreAndStripe history={{ location: { pathname: "/" } }} />
    );
  });

  it("matches the snapshot of App", () => {
    const tree = rendererWithRouter(
      <AppWithStoreAndStripe history={{ location: { pathname: "/" } }} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
