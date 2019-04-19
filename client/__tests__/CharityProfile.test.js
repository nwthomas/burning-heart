import React from "react";
import "react-native";
import { CharityProfile } from "../Components/Presentational/CharityProfile";
import renderer from "react-test-renderer";

describe("<CharityProfile />", () => {
  it("should render the component correctly without crashing", () => {
    const helpers = renderer.create(<CharityProfile />);
  });

  it("should match the snapshot of the tree", () => {
    const tree = renderer.create(<CharityProfile />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
