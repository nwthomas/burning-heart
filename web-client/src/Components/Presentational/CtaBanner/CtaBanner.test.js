import React from "react";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { renderWithRouter, rendererWithRouter } from "../../../testHelpers";

import CtaBanner from "./CtaBanner";

describe("<CtaBanner />", () => {
  it("should render the CtaBanner components without crashing", () => {
    const helpers = renderWithRouter(<CtaBanner />);
  });

  it("should match the snapshot of CtaBanner", () => {
    const tree = rendererWithRouter(<CtaBanner />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
