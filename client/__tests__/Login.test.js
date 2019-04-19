import React from "react";
import "react-native";
import { Login } from "../Components/Presentational/Login";
import renderer from "react-test-renderer";
import { rendererWithRouter } from "../testHelpers/rendererWithRouter";

describe("<Login />", () => {
  it("should render successfully without crashing", () => {
    const helpers = rendererWithRouter(<Login />);
  });
});
