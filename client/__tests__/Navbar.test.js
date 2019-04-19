import React from "react";
import "react-native";
import { Navbar } from "../Components/Presentational/Navbar";
import renderer from "react-test-renderer";

describe("<Navbar />", () => {
  it("should render successfully without crashing", () => {
    const helpers = renderer.create(<Navbar />);
  });
});
