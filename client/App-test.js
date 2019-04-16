/**
 * @format
 */

import "react-native";
import React from "react";
import App from "./App";
// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { renderWithRouter, rendererWithRouter } from "./testHelpers";

describe("<App />", () => {
  it("should render the App component without crashing", () => {
    const helpers = renderWithRouter(
      <App history={{ location: { pathname: "/" } }} />
    );
  });
});

// it("renders correctly", () => {
//   renderer.create(<App />);
// });
