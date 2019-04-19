import React from "react";
import "react-native";
import { Header } from "../Components/Presentational/Header";
import renderer from "react-test-renderer";

describe("<Header />", () => {
  it("should render successfully without crashing", () => {
    const helpers = renderer.create(<Header />);
  });
});
