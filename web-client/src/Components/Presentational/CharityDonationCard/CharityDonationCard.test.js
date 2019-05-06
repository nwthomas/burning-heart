import React from "react";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { renderWithRouter, rendererWithRouter } from "../../../testHelpers";

import CharityDonationCard from "./CharityDonationCard";

describe("<CharityDonationCard />", () => {
  it("should render the CharityDonationCard to the screen without crashing", () => {
    const donation = { amount: 1000 };
    const helpers = renderWithRouter(
      <CharityDonationCard donation={donation} />
    );
  });

  it("should match the snapshot of CharityDonationCard", () => {
    const donation = { amount: 1000 };
    const tree = rendererWithRouter(
      <CharityDonationCard donation={donation} />
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
