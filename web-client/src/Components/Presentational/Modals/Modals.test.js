import React from "react";
import "react-testing-library/cleanup-after-each";
import "jest-dom/extend-expect";
import { renderWithRouter, rendererWithRouter } from "../../../testHelpers";

import LoginModal from "./LoginModal";
import PaymentSendingModal from "./PaymentSendingModal";

describe("<LoginModal />", () => {
  it("should render the LoginModal component without crashing", () => {
    const push = jest.fn();
    const scrollToSpy = jest.fn();
    window.scrollTo = scrollToSpy;
    const helpers = renderWithRouter(<LoginModal />);
  });

  it("should match the snapshot of LoginModal", () => {
    const tree = rendererWithRouter(<LoginModal />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});

describe("<PaymentSendingModal />", () => {
  it("should match the snapshot of PaymentSendingModal", () => {
    const helpers = renderWithRouter(<PaymentSendingModal />);
  });

  it("should match the snapshot of PaymentSendingModal", () => {
    const tree = rendererWithRouter(<PaymentSendingModal />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
