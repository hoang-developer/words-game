import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import React from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import userEvent from "@testing-library/user-event";


describe('Test Interface', () => {
test("Should have header text", () => {
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

  test("Should display letter after click key", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const key = screen.getByTestId("letter-A");
    userEvent.click(key)
    const board = screen.getByRole("board");

    expect(board).toHaveTextContent("A");
  });

  
})

