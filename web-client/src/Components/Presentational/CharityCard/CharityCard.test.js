import React from "react";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { renderWithRouter, rendererWithRouter } from "../../../testHelpers";
import { Provider } from "react-redux";
import { store } from "../../../store";

import CharityCard from "./CharityCard";

const charity = { id: 1, charityName: "Charity" };
const CharityCardWithStore = () => {
  return (
    <Provider store={store}>
      <CharityCard charity={charity} />
    </Provider>
  );
};

describe("<CharityCard />", () => {
  it("should render the CharityCard without crashing", () => {
    const helpers = renderWithRouter(<CharityCardWithStore />);
  });

  it("should match the snapshot of CharityCard", () => {
    const tree = rendererWithRouter(<CharityCardWithStore />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
