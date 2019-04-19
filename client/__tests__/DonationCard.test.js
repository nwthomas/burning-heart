import React from "react";
import "react-native";
import { DonationCard } from "../Components/Presentational/DonationCard";
import renderer from "react-test-renderer";

describe("<DonationCard />", () => {
  it("should render the component without crashing", () => {
    const donation = { charityName: "name", amount: 10 };
    const helpers = renderer.create(<DonationCard donation={donation} />);
  });

  it("should match the snapshot of the tree", () => {
    const donation = { charityName: "name", amount: 10 };
    const tree = renderer.create(<DonationCard donation={donation} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
