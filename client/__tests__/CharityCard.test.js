import React from "react";
import "react-native";
import { CharityCard } from "../Components/Presentational/CharityCard";
import renderer from "react-test-renderer";

describe("<CharityCard />", () => {
  it("should render the component without crashing", () => {
    const charity = { charityName: "name" };
    const helpers = renderer.create(<CharityCard charity={charity} />);
  });

  it("should match the snapshot of the tree", () => {
    const charity = { charityName: "name" };
    const tree = renderer.create(<CharityCard charity={charity} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
