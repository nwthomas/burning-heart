import React from "react";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { renderWithRouter, rendererWithRouter } from "../../../testHelpers";

import DonationCard from "./DonationCard";

describe("<DonationCard />", () => {
  it("should render the DonationCard component without crashing", () => {
    const donation = { charityName: "Name", amount: 1000 };
    const helpers = renderWithRouter(<DonationCard donation={donation} />);
  });

  it("should match the snapshot of DonationCard", () => {
    const donation = { charityName: "Name", amount: 1000 };
    const tree = rendererWithRouter(<DonationCard donation={donation} />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
