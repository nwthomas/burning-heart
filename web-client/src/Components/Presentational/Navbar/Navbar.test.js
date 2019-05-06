import React from "react";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { renderWithRouter, rendererWithRouter } from "../../../testHelpers";

import Navbar from "./Navbar";

describe("<Navbar />", () => {
  it("should render the Navbar component without crashing", () => {
    const helpers = renderWithRouter(<Navbar />);
  });

  it("should match the snapshot of Navbar", () => {
    const tree = rendererWithRouter(<Navbar />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
