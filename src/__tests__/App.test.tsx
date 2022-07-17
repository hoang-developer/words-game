import { render, screen } from "@testing-library/react";
import App from "../App";
import React from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../redux/store";


describe('Test Interface', () => {
test("Should have header text Words Game", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  // Test App header text here
  const header = screen.getByText("Words Game");
  const expectedText = "Words Game";
  expect(header).toHaveTextContent(expectedText);
});

test("Should have subtitle text", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const subtitle = screen.getByText("This is a Demo App for Learning TypeScript");
    const expectedText = "This is a Demo App for Learning TypeScript";
    expect(subtitle).toHaveTextContent(expectedText);
  });
})