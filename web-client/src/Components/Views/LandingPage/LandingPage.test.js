import React from "react";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { renderWithRouter, rendererWithRouter } from "../../../testHelpers";

import LandingPage from "./LandingPage";

describe("<LandingPage />", () => {
  it("should render the LandingPage component without crashing", () => {
    const helpers = renderWithRouter(<LandingPage />);
  });

  it("should match the snapshot of LandingPage", () => {
    const tree = rendererWithRouter(<LandingPage />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
